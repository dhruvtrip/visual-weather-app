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
  ngOnInit(): void {
    this.weatherService.getWeatherData('Tokyo').subscribe({
      next: (response) => {
        this.weatherData = response; //assign the API data to the response
        console.log(response);
      },
    });
    throw new Error('Method not implemented.');
  }
}
