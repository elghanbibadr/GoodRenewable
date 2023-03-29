import React from 'react'

const Layout = (props) => {
  return (
    <div className=' max-w-[144rem] px-6 mx-auto  lg:px-10  '>
        {props.children}
    </div>
  )
}

export default Layout
