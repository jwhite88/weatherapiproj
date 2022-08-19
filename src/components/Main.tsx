import React from 'react'
import Sidebar from './Sidebar';
import WeatherSection from './WeatherSection';


function Main() {
  return (
      <div className=' flex flex-row justify-between h-screen bg- bg-amber-600 '>
        <Sidebar />
        <WeatherSection />
    </div>
  )
}

export default Main