import CalloutCard from './CalloutCard'
import BookCallBtn from '../UI/BookCallBtn'
import { CalloutCardsData } from './CalloutCardsData'
import { Gridx3 } from '../UI/Gridx3'

const Callout = () => {


  return (
    <div className='my-40 px-4  md:grid md:grid-rows-auto  items-center'>
      <div data-aos="zoom-in" className='md:text-center'>
        <h2 className=' lg:text-[4.9rem] ' >Get <strong className='strong--taller  '>involved early</strong></h2>
        <p className=' my-14  lg:mx-auto'>
          GoodRenewable is in the process of running workshops and consultations across the UK. <br/> We want to hear from communities, developers and landowners interested in being part <br/> of our pioneer projects. Book your discovery call below.
        </p>
      </div> 

      <div  className=' w-full md:w-fit mx-auto md:mt-10   md:row-start-3'>
  
            <BookCallBtn fill='white' className='py-5   w-full text-center sm:pl-[4.4rem] sm2:w-fit lg:py-6  lg:px-16 md:mt-10  book-discoveryCall-btn  mb-20  bg-black hover:bg-[#FAFAFA] hover:text-black text-white' text='Book a Discovery Call' />

      </div>

      <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <Gridx3  >
          {CalloutCardsData.map(({ id, title, text, img }) => {
            return <CalloutCard key={id} id={id} title={title} text={text} img={img} />;
          })}
        </Gridx3>
      </div>

    </div>
  )
}

export default Callout