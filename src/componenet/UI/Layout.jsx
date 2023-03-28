import React from 'react'

const Layout = (props) => {
  return (
    <div className=' max-w-[140rem] mx-auto  lg:px-10  '>
        {props.children}
    </div>
  )
}

export default Layout
// max-w-[140rem] w-[100%] 
// md:px-4 lg:px-10    