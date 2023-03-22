import React from 'react'

export const Gridx3 = (props) => {
  return (
    <div className={`${props.className} md:grid gap-x-[1rem] lg:grid-row-[488px] lg:gap-x-[3rem] justify-center   items-center md:grid-cols-3`}>{props.children}</div>
  )
}
