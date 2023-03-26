import React, { useState } from 'react'
import { developersFaqData } from "./FaqData"
import { communitiesFaqData } from "./FaqData"
import { landownersFaqData } from "./FaqData"
import arrow from "../../assets/smallArow.svg"

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [currentVisibleData, setCurrentVisibleData] = useState(developersFaqData)

  const hanldeQuestionClicked = (e) => {
    if (activeIndex === e.currentTarget.id) return
    console.log(e.currentTarget.id)
    setActiveIndex(e.currentTarget.id)
  }

  const handleBtnClicked = (e) => {
    if (!e.target.id) return;
    e.target.id == 1 ? setCurrentVisibleData(communitiesFaqData) : e.target.id == 2 ? setCurrentVisibleData(developersFaqData) : setCurrentVisibleData(landownersFaqData);
  }

  return (
    <div className='lg:w-[60%]  md:w-[70%]  sm:w-[90%] mt-20 mx-auto'>
      <h2 className='text-center lg:mb-20'>FAQ</h2>
      <div onClick={handleBtnClicked} className='flex mt-10 items-center md:justify-center md:gap-x-[1rem]   flex-col md:flex-row'>
        <button id="1" className={` faqBtn ${currentVisibleData == communitiesFaqData ? "bg-green text-white border-none" : ""} `}>Communities </button>
        <button id="2" className={` faqBtn  ${currentVisibleData == developersFaqData ? "bg-green text-white border-none" : ""}  `}>Developers</button>
        <button id="3" className={`faqBtn ${currentVisibleData == landownersFaqData ? "bg-green text-white border-none" : " "}`}>Landowners </button>
      </div>

      <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        {currentVisibleData.map(({ id, question, answer }) => {
          return <div onClick={hanldeQuestionClicked} key={id} id={id} className='bg-white border-[1px] border-[#E8E8E8] cursor-pointer rounded-[16px] relative p-4 md:p-8 my-10' >
            <h5 className='w-[80%] '>{question}</h5>
            <img className={`absolute top-12 right-10 ${activeIndex == id ? "rotate-180" : ""}`} src={arrow} alt='arrow logo' loading='lazy' />
            <p className={`${activeIndex == id ? "opacity-100 visible my-6" : "opacity-0 invisible h-0"} transition-opacity text-[1.6rem] duration-1000`}> {answer}</p>
          </div>

        })}
      </div>
    </div>
  )
}

export default Faq