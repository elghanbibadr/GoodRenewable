import React from 'react'

const Card = (props) => {
  return (
    <div className={`${props.className} bg-white`}>{props.children}</div>
  )
}

export default Card