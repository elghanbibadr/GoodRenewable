import React from 'react'
import {TeamData} from "./TeamData"
import Card from '../UI/Card'
import { Gridx3 } from '../UI/Gridx3'
import AOS from 'aos';
import 'aos/dist/aos.css';
const OurTeam = () => {
  AOS.init();
  
  return (
    <div className='mt-20 lg:mt-40  mx-auto'>
    <h2 className='text-center mb-6'>Our <strong className="strong-ourTeam ">Team</strong></h2>
    <Gridx3 className='lg:w-[80%] lg:mx-auto'>
    {TeamData.map(({id,name,role,img,href,animation})=>{
        return <Card animation={animation} key={id} className="text-center max-w-[348px] mx-auto  p-4 my-4">
            <img className='w-[40%] my-6  mx-auto' src={img} />
            <h5>{name}</h5>
            <p>{role}</p>
            <a  href={href} target="_blank">
            <svg className='mx-auto linkedinIcon w-[46px] my-8' viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M44.3333 0H11.6667C5.22433 0 0 5.22433 0 11.6667V44.3333C0 50.7757 5.22433 56 11.6667 56H44.3333C50.778 56 56 50.7757 56 44.3333V11.6667C56 5.22433 50.778 0 44.3333 0ZM18.6667 44.3333H11.6667V18.6667H18.6667V44.3333ZM15.1667 15.708C12.9127 15.708 11.0833 13.8647 11.0833 11.592C11.0833 9.31933 12.9127 7.476 15.1667 7.476C17.4207 7.476 19.25 9.31933 19.25 11.592C19.25 13.8647 17.423 15.708 15.1667 15.708ZM46.6667 44.3333H39.6667V31.2573C39.6667 23.3987 30.3333 23.9937 30.3333 31.2573V44.3333H23.3333V18.6667H30.3333V22.785C33.5907 16.751 46.6667 16.3053 46.6667 28.5623V44.3333Z" fill="#AAAAAA"/>
           </svg>

            </a>
        </Card>
    })}
    </Gridx3>
    </div>

  )
}

export default OurTeam