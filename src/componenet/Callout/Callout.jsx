import React from 'react'
import CalloutCard from './CalloutCard'
import BookCallBtn from '../Nav/BookCallBtn'
import { CalloutCardsData  } from './CalloutCardsData'
import { Gridx3 } from '../UI/Gridx3'
const Callout = () => {
  return (
    <div className='mt-40 p-4 md:grid md:grid-rows-[auto] items-center'>
        <div className='md:text-center'>
            <h3>Get <strong className='strong--taller text-[4.9rem] '>involved early</strong></h3>
            <p className='my-10 lg:w-1/2 lg:mx-auto'>
            GoodRenewable is in the process of running workshops and consultations across the UK. We want to hear from communities, developers and landowners interested in being part of our pioneer projects. Book your discovery call below.
            </p>
        </div>
        {/* <BookCallBtn text="Book a Discovery Call" className="py-3 book-discoveryCall-btn bg-black text-white  md:py-4"  /> */}

        <BookCallBtn fill='white' className='py-4 md:mt-10 md:row-start-3 book-discoveryCall-btn md:mx-auto mb-20 bg-black hover:bg-paleWhite hover:text-black text-white' text='Book a Discovery Call'/>
     <Gridx3>
       {CalloutCardsData.map(({id,title,text,img})=>{
          return <CalloutCard id={id} title={title} text={text} img={img} />;
       })}
     </Gridx3>
    </div>
  )
}

export default Callout