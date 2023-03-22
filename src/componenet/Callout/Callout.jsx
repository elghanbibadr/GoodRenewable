import React from 'react'
import CalloutCard from './CalloutCard'
import BookCallBtn from '../Nav/BookCallBtn'
const Callout = () => {
  return (
    <div className='mt-40 p-4'>
        <div>
            <h3>Get <strong>involved early</strong></h3>
            <p className='my-10'>
            GoodRenewable is in the process of running workshops and consultations across the UK. We want to hear from communities, developers and landowners interested in being part of our pioneer projects. Book your discovery call below.
            </p>
        </div>
        <BookCallBtn fill='white' className='py-4 bg-black text-white' text='Book a Discovery Call'/>
        <CalloutCard />
    </div>
  )
}

export default Callout