import React from 'react'
import { Gridx2 } from '../UI/Gridx2'

const OurProcessItem = () => {
  return (
    <Gridx2>
        <img src={props.img} />
        <div>
            <div>
                <span>{props.id}</span>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    </Gridx2>
  )
}

export default OurProcessItem