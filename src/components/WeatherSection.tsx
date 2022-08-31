import React, { useContext } from 'react'
import WeatherCard from './WeatherCard'
import WeatherContext from '../utils/WeatherContext';

function WeatherSection() {
  const { degreeForC, setDegreeForC, weatherData, setWeatherData } = useContext(WeatherContext);

// CSS Clasess: sky-img bg-blue-300

  return (
    <div className=' grow-[3]  pt-2 '>
          <h2 className="pt-2 text-6xl font-bold text-[#f0f0f3]" style={{fontFamily: "Varela Round"}}>Five Day Weather</h2>
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