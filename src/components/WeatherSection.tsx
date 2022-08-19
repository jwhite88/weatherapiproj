import React from 'react'
import WeatherCard from './WeatherCard'

function WeatherSection() {
  return (
    <div className='grow-[3] bg-blue-300 pt-2 '>
          WeatherSection
          <div className='flex justify-around pt-8'>
              <WeatherCard />
              <WeatherCard />
              <WeatherCard />
              <WeatherCard />
          </div>
    </div>
  )
}

export default WeatherSection