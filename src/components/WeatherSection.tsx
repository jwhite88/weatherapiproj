import React, { useContext } from 'react'
import WeatherCard from './WeatherCard'
import WeatherContext from '../utils/WeatherContext';

function WeatherSection() {
  const { degreeForC, setDegreeForC, weatherData, setWeatherData } = useContext(WeatherContext);

// sky-img 

  return (
    <div className='sky-img grow-[3] bg-blue-300 pt-2 '>
          WeatherSection
          <div className='flex justify-around flex-wrap gap-1 pt-8'>
              {
                weatherData?.map((w, idx) => { 
                  return(
                    <>
                      <WeatherCard
                        key={idx}
                        temp={w.temp}
                        description={w.description}
                        feelsLike={w.feelsLike}
                        humidity={w.humidity}
                        icon={w.icon}
                        windSpeed={w.windSpeed}
                        dateTxt={w.dateTxt}
                        city={w.city}
                        dt={w.dt}
                      />
                    </>
                  )
                 })
               
              }
          </div>
    </div>
  )
}

export default WeatherSection