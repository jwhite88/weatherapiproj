import React, { useContext, useState, useEffect } from 'react'
import WeatherContext from '../utils/WeatherContext'

import { WeatherData } from '../utils/WeatherContext'

function WeatherCard({ temp, feelsLike, humidity, description, icon, windSpeed, dateTxt, dt, city }: WeatherData) {
  const { degreeForC, setDegreeForC, weatherData, setWeatherData } = useContext(WeatherContext);
  const [day, setDay] = useState('')

  useEffect(() => {
    const date = new Date(dt! * 1000)

    switch (date.getDay()) {
      case 0:
        setDay('Sunday')
        break;

      case 1:
        setDay('Monday')
        break;

      case 2:
        setDay('Tuesday')
        break;

      case 3:
        setDay('Wednesday')
        break;

      case 4:
        setDay('Thursday')
        break;

      case 5:
        setDay('Friday')
        break;

      case 6:
        setDay('Saturday')
        break;

      default:
        break;
    }
  }, [dt])

  return (
    <div className="w-[200px] h-[290px]  border-offblack-200 rounded-xl relative before:bg-offblack-600/[0.55] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-xl  mb-5 font-bold tracking-wider text-[#fff]" style={{ fontFamily: "Handlee"}}>
      <h4 className="relative pt-4 text-3xl ">{city}</h4>
      <span className="relative inline-block text-center">
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='' />
      </span>
      <span className='relative block text-center text-2xl'>{degreeForC === 'imperial' ? (Math.round(temp * 1.8 - 459.67)) : (Math.round(temp - 273.15))}&#176;</span>
      <h3 className="relative text-left pl-5 text-xl pb-1 pt-2">{day && day}</h3>
      <p className='relative capitalize text-left pl-5 text-xl pb-2'>
        {description}
      </p>
    </div>
  )
}

export default WeatherCard