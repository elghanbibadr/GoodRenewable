import React from 'react'

const Layout = (props) => {
  return (
    <div className='lg:max-w-[140rem] lg:mx-auto md:px-4 lg:px-10 '>
        {props.children}
    </div>
  )
}

export default Layout