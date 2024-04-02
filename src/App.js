import './App.css';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';



import React, { useState } from 'react';

const App = () => {
  const defaultCity = {
    "coord": {
      "lon": 86.7214,
      "lat": 21.935
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 30.67,
      "feels_like": 31.9,
      "temp_min": 30.67,
      "temp_max": 30.67,
      "pressure": 1006,
      "humidity": 49,
      "sea_level": 1006,
      "grnd_level": 994
    },
    "visibility": 10000,
    "wind": {
      "speed": 4.31,
      "deg": 168,
      "gust": 7.19
    },
    "clouds": {
      "all": 2
    },
    "dt": 1712066475,
    "sys": {
      "country": "IN",
      "sunrise": 1712016288,
      "sunset": 1712060890
    },
    "timezone": 19800,
    "id": 1276942,
    "name": "Baripāda",
    "cod": 200
  };
  const [weatherData, setWeatherData] = useState(defaultCity);

  // Function to receive data from Header component
  const handleDataReceived = (data) => {
    setWeatherData(data);
  }

  return (
    <div className="App">
      <Header onDataReceived={handleDataReceived} />
      <Body data={weatherData} />
      <Footer />
    </div>
  );
}

export default App;

