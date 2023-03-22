import React from 'react'
import Card from '../UI/Card'
const CalloutCard = (props) => {
  return (
    <Card className='p-4 rounded-[2.4rem] max-w-[41.5rem]'>
    <img src={props.img} />
    <h4 className='my-8' >{props.title}</h4>
    <p>{props.text}</p>
    </Card>
  )
}

export default CalloutCard