import React from 'react'

const Faq = () => {
  return (
    <div className='md:w-1/2 md:mt-20 mx-auto'> 
        <h2 className='text-center lg:mb-20'>FAQ</h2>
        <div className='flex mt-10 items-center   flex-col md:flex-row'>
            <button className='border-paleBlack w-[70%] sm:w-[32rem] ma  text-[1.8rem] px-6 mx-2 font-[600] border-[2px] py-4 rounded-full'>Communities </button>
            <button className='text-white w-[70%] my-4 sm:w-[32rem] border-t-green-secondary px-6  font-[600] border-[2px] mx-2 py-4  rounded-full  bg-green'>Developers</button>
            <button className='border-paleBlack w-[70%] sm:w-[32rem]  text-[1.8rem] px-6 mx-2 font-[600] border-[2px] py-4 rounded-full'>Landowners </button>
        </div>
    </div>
  )
}

export default Faq