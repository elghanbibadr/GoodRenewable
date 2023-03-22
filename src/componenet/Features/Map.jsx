import React from 'react'
import desktopMap from "../../assets/desktopMap.svg"
import mobileMap from "../../assets/mobileMap.svg"
export const Map = () => {
  return (
    <div className='mt-40 p-4 mb-40 map '>  
    <img  className='hidden md:block mx-auto lg:w-[80%]' src={desktopMap} />
    <img  className='mx-auto md:hidden' src={mobileMap} />
    </div>
  )
}
