import { Gridx2 } from '../UI/Gridx2'


const OurProcessItem = (props) => {
  return (
    <Gridx2 className=" lg:gap-y-[6rem]">
      <div data-aos={props.animation} className={`${props.id == 2 ? "col-start-2 row-start-2 " : ""} lg:pl-14`}>
        <div className='lg:grid lg:grid-cols-[40px__1fr]  '>
          <div className='bg-paleGreen self-center  w-[40px] mt-32 lg:relative lg:right-20  md:mt-0 flex font-bold text-xl text-black justify-center items-center h-[40px] p-2 rounded-full '>
            <span>{props.id}</span>
          </div>
          <h3 className='my-8 lg:relative lg:right-12 '>{props.title}</h3>
        </div>
        <p className='mb-8 '>{props.text1}</p>
        <p>{props.text2}</p>
      </div>
      <img data-aos={`${props.id == 2 ? "fade-right" : "fade-right"}`} className={`${props.id == 2 ? "col-start-1 row-start-2  " : ""}  w-[70%]  mx-auto mt-12 mb-12 lg:w-[50%]`} src={props.img} loading="lazy" alt={`${props.title} svg logo presentation`} />
    </Gridx2>
  )
}

export default OurProcessItem