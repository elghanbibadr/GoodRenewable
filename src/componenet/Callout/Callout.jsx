import CalloutCard from './CalloutCard'
import BookCallBtn from '../UI/BookCallBtn'
import { CalloutCardsData } from './CalloutCardsData'
import { Gridx3 } from '../UI/Gridx3'

const Callout = (props) => {


  return (
    <div className='my-40  md:grid md:grid-rows-auto   items-center'>
     
     {/* data-aos="zoom-in"  */}
      <div className='md:text-center'>
        <h2 className=' ' >Get <strong className='getInvolved-underline '>involved early</strong></h2>
        <p className=' my-14  lg:mx-auto'>
          GoodRenewable is in the process of running workshops and consultations across the UK. <br/> We want to hear from communities, developers and landowners interested in being part <br/> of our pioneer projects. Book your discovery call below.
        </p>
      </div> 

      <div  className=' w-full md:w-fit mx-auto md:mt-10   md:row-start-3'>
  
            <BookCallBtn setBookingPopUpOpen={props.setBookingPopUpOpen} fill='white' className='py-5 lg:relative lg:right-10  w-full sm3:w-fit text-center sm:pl-[4.4rem]  lg:py-6  lg:px-16 md:mt-10  book-discoveryCall-btn  mb-20  bg-black hover:bg-[#FAFAFA] hover:text-black text-white' text='Book a Discovery Call' />

      </div>
      {/* data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" */}
      <div >
        <Gridx3  >
          {CalloutCardsData.map(({ id, title, text, img }) => {
            return <CalloutCard setBookingPopUpOpen={props.setBookingPopUpOpen} key={id} id={id} title={title} text={text} img={img} />;
          })}
        </Gridx3>
      </div>

    </div>
  )
}

export default Callout