import React from 'react'
import BookCallBtn from '../Nav/BookCallBtn'
const Hero = () => {
  return (
    <div className='mt-10 lg:mt-40'>
    <h1 className='lg:w-[80%]'>Harness the<strong className='strong-small' > Power</strong> of Community Engagement for <strong className='strong--taller'>Renewable</strong> Energy Projects</h1>
    <p className='text-black my-6 w-4/5 lg:w-1/3'>Creating clean energy projects with community support at the centre.</p>
     <BookCallBtn text="Book a Discovery Call" className="py-2 bg-black text-white md:py-4" fill="white" />
    </div>
  )
}

export default Hero