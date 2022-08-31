import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import WeatherContext, { DegreeState, WeatherData } from './utils/WeatherContext';

function App() {
  const [degreeForC, setDegreeForC] = useState("imperial")
  const [weatherData, setWeatherData] = useState<WeatherData[] | null>(null)
  return (
    <div className=" text-center ">
      <WeatherContext.Provider value={{ degreeForC, setDegreeForC, weatherData, setWeatherData }}>
        <Header />
        <Main />
      </WeatherContext.Provider>
    </div>
  );
}

export default App;
