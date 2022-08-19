import React from 'react'

function Header() {
  return (
    <div className="flex flex-row justify-between py-[10px] px-[40px] bg-sky-500">
      <div>
        <span>Icon</span>
      </div>
      <div>
        <input type="text" className=" rounded-sm pl-2" placeholder="Search City" />
      </div>
      <div>
        <span></span>
        <select className='rounded-sm px-1'>
          <option>F</option>
          <option>C</option>
        </select>
      </div>
    </div>
  )
}

export default Header