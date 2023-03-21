import React from 'react'
import Nav from './componenet/Nav/Nav'
import Hero from './componenet/Hero/Hero'
import Desc from './componenet/Desc'
import Features from './componenet/Features/Features'

const App = () => {
  return (
   <div className='lg:px-6 py-4'>
   <Nav />
   <Hero />
   <Desc/>
   <Features />
   </div>
  )
}

export default App