import React from 'react'
import Nav from './componenet/Nav/Nav'
import Hero from './componenet/Hero/Hero'
import Desc from './componenet/Desc'
import Features from './componenet/Features/Features'
import OurProcess from './componenet/Ourprocess/OurProcess'
import Callout from './componenet/Callout/Callout'
import Faq from './componenet/Faq/Faq'
import OurTeam from './componenet/OurTeam/OurTeam'
const App = () => {
  return (

    <>
  <Nav />
<Hero />
<div className=' px-2 lg:px-12'>
  <Desc/>
   <Features />
   <OurProcess/>
   <Callout />
   <Faq />
   <OurTeam />
</div>
    </>
  )
}

export default App