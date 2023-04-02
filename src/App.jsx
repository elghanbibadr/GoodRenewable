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
import CookieConsent ,{getCookieConsentValue } from "react-cookie-consent";
import 'aos/dist/aos.css'; // Import the styles



const App = () => {
  const [bookingPopUpOpen, setBookingPopUpOpen] = useState(false)


  Aos.init({
    offset: "180px",
    once: false,
  });

  const handleAccept = () => {
    // Set a cookie value
    document.cookie = "myCookie=true; path=/; max-age=2592000";

  };


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

      <CookieConsent
        location="bottom"
        containerClasses="cookieBanner"
        buttonText="Accept"
        style={{paddingInline:'14px' ,alignItems:'center',justifyContent:'center'}}
        buttonStyle={{ background:"white", color: "#152223", fontSize: "17px",padding:"8px 30px",borderRadius:"6px" }}
        expires={150}
        onAccept={handleAccept}


        >
        <span className='text-white text-[1.1rem] md:text-[1.3rem] ' >    This website uses cookies to improve your experience. By continuing to use our site, you consent to the use of cookies.
</span>
      </CookieConsent>

    </>
  )
}

export default App