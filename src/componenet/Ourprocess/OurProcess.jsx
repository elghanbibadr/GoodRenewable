import React from 'react'
import { ourProcessData } from './Constant'
import OurProcessItem from './OurProcessItem'

const OurProcess = () => {
  return (
    <div className='bg-white pt-[10rem] rounded-[2.4rem] pl-6 mt-[10rem] '>
    <div className='md:text-center'>
        <h2 className='mb-10'>OurProcess</h2>
        <p className='md:mb-20'>The three-step strategy is carefully designed to maximise the likelihood of success</p>
    </div>
    {ourProcessData.map(({id,title,img,text})=>{
        return <OurProcessItem id={id} title={title} img={img} text={text} />
    })}
  </div>
  )
}

export default OurProcess