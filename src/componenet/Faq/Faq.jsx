import  React ,{useState} from 'react'
import {faqData} from "./FaqData"
import arrow from "../../assets/smallArow.svg"

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const hanldeQuestionClicked=(e)=>{
    if (activeIndex===e.currentTarget.id)return
    console.log(e.currentTarget.id)
    setActiveIndex(e.currentTarget.id)
  }

  return (
    <div className='lg:w-[60%]  md:w-[70%]  sm:w-[90%] mt-20 mx-auto'> 
        <h2 className='text-center lg:mb-20'>FAQ</h2>
        <div className='flex mt-10 items-center   flex-col md:flex-row'>
            <button className='border-paleBlack w-[70%] sm:w-[32rem] ma  text-[1.8rem] px-6 mx-2 font-[600] border-[2px] py-4 rounded-full'>Communities </button>
            <button className='text-white w-[70%] my-4 sm:w-[32rem] border-t-green-secondary px-6  font-[600] border-[2px] mx-2 py-4  rounded-full  bg-green'>Developers</button>
            <button className='border-paleBlack w-[70%] sm:w-[32rem]  text-[1.8rem] px-6 mx-2 font-[600] border-[2px] py-4 rounded-full'>Landowners </button>
        </div>

       {faqData.map(({id,question,answer})=>{
        return <div onClick={hanldeQuestionClicked} key={id} id={id} className='bg-white cursor-pointer rounded-[16px] relative p-4 md:p-8 my-10' >
            <h5 className='w-[80%]'>{question}</h5>
            <img className={`absolute top-10 right-4 ${activeIndex==id ? "rotate-180":""}`} src={arrow} />
          <p className={`${activeIndex == id ? "opacity-100 visible":"opacity-0 invisible h-0"} transition-opacity duration-1000`}> {answer}</p>
        </div>

       })}
    </div>
  )
}

export default Faq