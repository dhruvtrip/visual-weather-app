import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}
  weatherData?: WeatherData;
  cityName: string = 'Oslo'; // default city on init

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = ''; // search bar remains blank
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response; //assign the API data to the response
        console.log(response);
      },
    });
  }
}
