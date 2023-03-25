import React from 'react'
import desktopMap from "../../assets/desktopMap.svg"
import mobileMap from "../../assets/mobileMap.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Map = () => {

  AOS.init();


  return (
    <div data-aos-offset="400"  data-aos="flip-up" className='my-80 p-4 mb-40 map '>  
    <img  className='hidden md:block mx-auto lg:w-[80%]' src={desktopMap} />
    <img  className='mx-auto md:hidden' src={mobileMap} />
    </div>
  )
}
