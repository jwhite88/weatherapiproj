import React, { useContext, useState, useCallback, useRef } from 'react'
import WeatherContext from '../utils/WeatherContext'
import { searchCityTemps } from '../utils/weathersearch'


function Header() {
  const { degreeForC, setDegreeForC, weatherData, setWeatherData } = useContext(WeatherContext);
 const [city, setCity] = useState<string>("")
 const inputRef = useRef<HTMLInputElement>(null)

  // console.log({ degreeForC })

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log({city})
    const returnedTemps = searchCityTemps(city as string, degreeForC as string);
   console.log('inputRef ', inputRef.current?.value)
    returnedTemps.then((response) => { 
  
      const resultArr = []
      if (response.status === 200) {
        console.log('response:', response.data)

        for (let i = 0; i < response.data.list.length; i += 8) {
          // console.log(response.data.list[i])
          let obj = {
            temp: response.data.list[i].main.temp,
            feelsLike: response.data.list[i].main.feels_like,
            humidity: response.data.list[i].main.humidity,
            description: response.data.list[i].weather[0].description,
            icon: response.data.list[i].weather[0].icon,
            windSpeed: response.data.list[i].wind.speed,
            dateTxt: response.data.list[i].dt_txt,
            dt: response.data.list[i].dt,
            city: response.data.city.name
          }

          resultArr.push(obj)
        }
      }


      setWeatherData(resultArr)
      inputRef.current!.value = ''

     })
  }, [city])

  return (
    <div className="flex flex-row justify-between py-[10px] px-[40px] bg-gradient-to-r from-cyan-700/75 to-blue-900/50 ">
      <div>
        <span>Icon</span>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)}  className=" rounded-sm pl-2" placeholder="Search City" ref={inputRef} />
          {/* <button type='submit'>Temp</button> */}
        </form>
      </div>
      <div>
        <span></span>
        <select value={degreeForC as string} onChange={(e) => setDegreeForC(e.target.value)} className='rounded-sm px-1'>
          <option value="imperial">F</option>
          <option value="metric">C</option>
        </select>
      </div>
    </div>
  )
}

export default Header