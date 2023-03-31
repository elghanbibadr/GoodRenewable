import React from 'react'

const Layout = (props) => {
  return (
    <div className=' max-w-[1440px] lg:mx-auto px-4 md:px-6   lg:px-10  '>
        {props.children}
    </div>
  )
}

export default Layout
