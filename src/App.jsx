import React, { useState } from 'react'
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
import Callendly from './componenet/callendy/Callendly'
import Aos from 'aos'
import 'aos/dist/aos.css'; // Import the styles
import CookieBanner from 'react-cookie-banner';



const App = () => {
  const [bookingPopUpOpen,setBookingPopUpOpen]=useState(false)


  Aos.init({
    offset:"180px",
    once:false,
  });

  return (

    <>
          <Element name="nav">
         <Nav bookingPopUpOpen={bookingPopUpOpen} setBookingPopUpOpen={setBookingPopUpOpen} />
         <Callendly isOpen={bookingPopUpOpen} setIsOpen={setBookingPopUpOpen} />
        </Element> 
         <Layout>
      
      <Hero bookingPopUpOpen={bookingPopUpOpen} setBookingPopUpOpen={setBookingPopUpOpen} />  
      </Layout>

         <Desc /> 
         <Layout>
         <Features />   
        <Element name="Our Process"> 
        <OurProcess /> 
        </Element>
       <Element name='Get Involved'>
           <Callout setBookingPopUpOpen={setBookingPopUpOpen} />
         </Element>
          <Element name="FAQ">
           <Faq />
         </Element>
          <Element name="Our Team">
            <OurTeam />    
       </Element>    
         </Layout>
       <Footer />  
       <CookieBanner
       
        message="This website uses cookies to ensure you get the best experience on our website."
        buttonMessage="Accept"
  declineButtonText="Decline"
        cookie="user-has-accepted-cookies"
        dismissOnScroll={false}
        dismissOnClick={false}
      />
    </>
  )
}

export default App