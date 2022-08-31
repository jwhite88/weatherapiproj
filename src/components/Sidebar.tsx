import React, { ReactElement } from 'react'

function Sidebar(): ReactElement  {
  return (
      <div className='basis-56 bg-amber-100 '>
          Sidebar
         <div className=' text-left pl-4'>
              <ul>
                  <li>Los Angles City is Great</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
              </ul>
         </div>
      </div>
  )
}

export default Sidebar