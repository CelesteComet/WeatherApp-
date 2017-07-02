import axios from 'axios';

var API_KEY = 'd3153f6835cc2e7e583da7410d0f524a';

export const fetch5DayForecast = (cityName) => {
 return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + cityName + '&type=accurate&APPID=' + API_KEY + '&cnt=5');
}