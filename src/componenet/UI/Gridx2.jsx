import React from 'react'

export const Gridx2 = (props) => {
  return (
    <div className={`${props.className} md:grid justify-center md:px-8  items-center md:grid-cols-2`}>{props.children}</div>
  )
}
