import React from 'react'

const Card = (props) => {
  return (
    <div data-aos={props.animation} className={`${props.className} bg-white`}>{props.children}</div>
  )
}

export default Card