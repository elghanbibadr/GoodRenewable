import React from 'react'
import { Element } from 'react-scroll'
import Nav from './componenet/Nav/Nav'
import Hero from './componenet/Hero/Hero'
import Desc from './componenet/Desc'
import Features from './componenet/Features/Features'
import OurProcess from './componenet/Ourprocess/OurProcess'
import Callout from './componenet/Callout/Callout'
import Faq from './componenet/Faq/Faq'
import OurTeam from './componenet/OurTeam/OurTeam'
 import Footer from './componenet/Footer/Footer'
import Layout from './componenet/UI/Layout'

const App = () => {
  return (

    <>
      <Layout>
        <Nav />
        <Hero />
        <Desc />
        <Features />
        <Element name="Our Process">
        <OurProcess />
        </Element>
        <Element name='Get Involved'>
          <Callout />
        </Element>
        <Element name="FAQ">
          <Faq />
        </Element>
        <Element name="Our Team">
          <OurTeam />
        </Element>
      </Layout>
        <Footer />
    </>
  )
}

export default App