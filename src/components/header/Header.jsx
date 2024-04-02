
import './header.css';

import React, { useState } from 'react';

const Header = ({ onDataReceived }) => {
  const [location, setLocation] = useState('');
  const api_key = "40a0041875e899327d2862809f30d159";

  const search = async () => {
    if (location === "") {
      return 0;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Pass the data to the parent component
      onDataReceived(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  return (
    <div className='header-container'>
      <div className="logo">Accurate Weather</div>
      <div className="searchbox">
        <input 
          type="text" 
          className='search-input' 
          placeholder='Search location' 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <span className="material-symbols-outlined" onClick={search}>Search</span>
      </div>
    </div>
  )
}

export default Header;
