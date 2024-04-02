import React from 'react'
import "./body.css"
import clear_icon from "../assets/clear.png";
import cloud_img from "../assets/cloud.png"
import drizzle_img from "../assets/drizzle.png";
import humidity_img from "../assets/humidity.png";
import rain_img from "../assets/rain.png";
import snow_img from "../assets/snow.png";
import wind_img from '../assets/wind.png';
import Header from '../header/Header';



const Body = ({ data }) => {
  const { main, weather, wind, name } = data;

  const temperature = main.temp;
  const humidity = main.humidity;
  const windSpeed = wind.speed;

  const weatherCondition = weather[0].main;

  let weatherIcon;
  switch (weatherCondition) {
    case 'Clear':
      weatherIcon = clear_icon;
      break;
    case 'Clouds':
      weatherIcon = cloud_img;
      break;
    case 'Drizzle':
      weatherIcon = drizzle_img;
      break;
    case 'Rain':
      weatherIcon = rain_img;
      break;
    case 'Snow':
      weatherIcon = snow_img;
      break;
    default:
      weatherIcon = cloud_img; // Default icon
  }
  
  return (
    <div className="body-container">
      <div className="weather-image">
        <img src={weatherIcon} alt="cloud icon" />
      </div>
      <div className="weather-temp">{main ? `${main.temp}°C` : ''}</div>
      <div className="weather-location">{name}</div>
      <div className="data-contain">
        <div className="element">
          <img src={humidity_img} alt="" className='icon' />
          <div className="data">
            <div className="humidity-percent">{main ? `${main.humidity}%` : ''}</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_img} alt="" className='icon' />
          <div className="data">
            <div className="wind-speed">{wind ? `${wind.speed} km/hr` : ''}</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body;