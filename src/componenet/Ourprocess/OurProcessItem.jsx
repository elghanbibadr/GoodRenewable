import React from 'react'
import { Gridx2 } from '../UI/Gridx2'
import AOS from 'aos';
import 'aos/dist/aos.css';
const OurProcessItem = (props) => {
  AOS.init();

  return (
    <Gridx2>
            <div data-aos={props.animation} className={`${props.id==2 ? "col-start-2 row-start-2 " :""} lg:pl-14`}>
                <div className='lg:grid lg:grid-cols-[40px__1fr]  '>
                    <div className='bg-green self-center  w-[40px] mt-32 lg:relative lg:right-20  md:mt-0 flex font-bold text-xl text-black justify-center items-center h-[40px] p-2 rounded-full '>
                        <span>{props.id}</span>
                    </div>
                    <h3 className='my-8 lg:relative lg:right-12 '>{props.title}</h3>
                </div>
                <p>{props.text}</p>
            </div>
        <img data-aos={`${props.id==2 ? "fade-right" :"fade-left"}`} className={`${props.id==2 ? "col-start-1 row-start-2  " :""}  w-[70%]  mx-auto mt-12 mb-12 lg:w-[60%]`} src={props.img} />
    </Gridx2>
  )
}

export default OurProcessItem