import React from 'react'
import Nav from './componenet/Nav/Nav'
import Hero from './componenet/Hero/Hero'
import Desc from './componenet/Desc'
import Features from './componenet/Features/Features'
import OurProcess from './componenet/Ourprocess/OurProcess'
import Callout from './componenet/Callout/Callout'
const App = () => {
  return (

    <>
  <Nav />
<Hero />
<div className='lg:px-12'>
  <Desc/>
   <Features />
   <OurProcess/>
   <Callout />
</div>
    </>
  )
}

export default App