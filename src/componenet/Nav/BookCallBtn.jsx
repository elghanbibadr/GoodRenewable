import React from 'react'
import arrow from "../../assets/arrow.svg"

const BookCallBtn = (props) => {
  return (
    <button className={`${props.className} flex  border-2 border-paleBlack rounded-2xl px-6 py-2 items-center`}>
    <p className='mr-4'>Book a Call</p>
    <img className='w-[20px]' src={arrow} alt='arrow right logo' />
</button>  )
}

export default BookCallBtn