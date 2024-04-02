import './App.css';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';



import React, { useState } from 'react';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

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

