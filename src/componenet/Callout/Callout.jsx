import CalloutCard from './CalloutCard'
import BookCallBtn from '../UI/BookCallBtn'
import BookDiscoveryCall from '../UI/BookDiscoveryCallBtn'
import { CalloutCardsData } from './CalloutCardsData'
import { Gridx3 } from '../UI/Gridx3'

const Callout = () => {


  return (
    <div className='my-40 p-4  md:grid md:grid-rows-auto  items-center'>
      <div data-aos="zoom-in" className='md:text-center'>
        <h3 className=' md:relative lg:text-[4.9rem] md:top-10' >Get <strong className='strong--taller  '>involved early</strong></h3>
        <p className='my-32  lg:mx-auto'>
          GoodRenewable is in the process of running workshops and consultations across the UK. <br/> We want to hear from communities, developers and landowners interested in being part <br/> of our pioneer projects. Book your discovery call below.
        </p>
      </div> 

      <div  className=' w-fit mx-auto md:mt-10   md:row-start-3'>
      <a href="https://calendly.com/good-renewable/arrange-a-call?primary_color=5ada2e" target="_blank" >
      <button className={`flex  w-full py-4 lg:py-6  lg:px-16  book-discoveryCall-btn bg-black text-paleWhite hover:bg-paleWhite hover:text-black md:py-4"  rounded-xl px-6  items-center `}>
        <span className='mr-4 font-[500] '>Book a Discovery Call</span>
        <svg width="20" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.7071 8.70711C25.0976 8.31658 25.0976 7.68342 24.7071 7.29289L18.3431 0.928932C17.9526 0.538408 17.3195 0.538408 16.9289 0.928932C16.5384 1.31946 16.5384 1.95262 16.9289 2.34315L22.5858 8L16.9289 13.6569C16.5384 14.0474 16.5384 14.6805 16.9289 15.0711C17.3195 15.4616 17.9526 15.4616 18.3431 15.0711L24.7071 8.70711ZM0 9H24V7H0V9Z" fill="#fff" />
        </svg>
    </button>    
     </a>
      </div>

      <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <Gridx3 >
          {CalloutCardsData.map(({ id, title, text, img }) => {
            return <CalloutCard key={id} id={id} title={title} text={text} img={img} />;
          })}
        </Gridx3>
      </div>

    </div>
  )
}

export default Callout