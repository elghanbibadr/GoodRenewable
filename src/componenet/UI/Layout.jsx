import React from 'react'

const Layout = (props) => {
  return (
    <div className='lg:max-w-[120rem] lg:mx-auto p-2 '>
        {props.children}
    </div>
  )
}

export default Layout