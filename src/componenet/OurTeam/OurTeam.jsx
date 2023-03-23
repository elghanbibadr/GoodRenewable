import React from 'react'
import {TeamData} from "./TeamData"
import Card from '../UI/Card'
import { Gridx3 } from '../UI/Gridx3'
const OurTeam = () => {
  return (
    <div className='mt-20 lg:mt-40  mx-auto'>
    <h2 className='text-center mb-6'>Our Team</h2>
    <Gridx3 className='lg:w-[80%] lg:mx-auto'>
    {TeamData.map(({id,name,role,img})=>{
        return <Card className="text-center max-w-[348px] mx-auto  p-4 my-4">
            <img className='w-[40%] my-6  mx-auto' src={img} />
            <h5>{name}</h5>
            <p>{role}</p>
        </Card>
    })}
    </Gridx3>
    </div>

  )
}

export default OurTeam