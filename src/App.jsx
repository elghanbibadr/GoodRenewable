import React from 'react'
// import { Nav, Hero, Desc, Features, OurProcess, Callout, Faq, OurTeam, Footer } from './componenet';

import Nav from './componenet/Nav/Nav'
import Hero from './componenet/Hero/Hero'
import Desc from './componenet/Desc'
import Features from './componenet/Features/Features'
import OurProcess from './componenet/Ourprocess/OurProcess'
import Callout from './componenet/Callout/Callout'
import Faq from './componenet/Faq/Faq'
import OurTeam from './componenet/OurTeam/OurTeam'
import Footer from './componenet/Footer/Footer'

const App = () => {
  return (

    <>
      <Nav />
      <Hero />
      <div className=' px-2 lg:px-12'>
        <Desc />
        <Features />
        <OurProcess />
        <Callout />
        <Faq />
        <OurTeam />
      </div>
        <Footer />
    </>
  )
}

export default App