import React from 'react'
import { lazy ,Suspense } from 'react'
import Nav from './componenet/Nav/Nav'
import Hero from './componenet/Hero/Hero'
import Desc from './componenet/Desc'
import Features from './componenet/Features/Features'
import OurProcess from './componenet/Ourprocess/OurProcess'
import Callout from './componenet/Callout/Callout'
import Faq from './componenet/Faq/Faq'
import OurTeam from './componenet/OurTeam/OurTeam'
// import Footer from './componenet/Footer/Footer'
import Layout from './componenet/UI/Layout'

const Footer=lazy(()=>import('./componenet/Footer/Footer'))
const App = () => {
  return (

    <>
      <Layout>
        <Nav />
        <Hero />
        <Desc />
        <Features />
        <OurProcess />
        <Callout />
        <Faq />
        <OurTeam />
      </Layout>
        <Footer />
    </>
  )
}

export default App