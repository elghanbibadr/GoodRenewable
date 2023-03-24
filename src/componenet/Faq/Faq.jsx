import  React ,{useState} from 'react'
import {developersFaqData} from "./FaqData"
import {communitiesFaqData} from "./FaqData"
import {landownersFaqData} from "./FaqData"
import arrow from "../../assets/smallArow.svg"

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [currentVisibleData,setCurrentVisibleData] = useState(landownersFaqData)

  const hanldeQuestionClicked=(e)=>{
    if (activeIndex===e.currentTarget.id)return
      console.log(e.currentTarget.id)
    setActiveIndex(e.currentTarget.id)
  }

  const handleBtnClicked=(e)=>{
    if (!e.target.id)return;
    e.target.id == 1 ? setCurrentVisibleData(communitiesFaqData) : e.target.id==2 ? setCurrentVisibleData(developersFaqData):setCurrentVisibleData(landownersFaqData);
  }

  return (
    <div className='lg:w-[60%]  md:w-[70%]  sm:w-[90%] mt-20 mx-auto'> 
        <h2 className='text-center lg:mb-20'>FAQ</h2>
        <div onClick={handleBtnClicked} className='flex mt-10 items-center   flex-col md:flex-row'>
            <button id="1" className={`border-paleBlack w-[70%] sm:w-[32rem] ma ${currentVisibleData==communitiesFaqData ? "bg-green text-white":""} border-paleBlack  text-[1.8rem] px-6 mx-2 font-[600] border-[2px] py-4 rounded-full`}>Communities </button>
            <button id="2" className={` w-[70%] my-4 sm:w-[32rem] ${currentVisibleData==developersFaqData ? "bg-green text-white":""} px-6 border-paleBlack font-[600] border-[2px] mx-2 py-4  rounded-full  `}>Developers</button>
            <button id="3" className={`border-paleBlack w-[70%] sm:w-[32rem] ${currentVisibleData==landownersFaqData ? "bg-green text-white":"border-paleBlack "} text-[1.8rem] px-6 mx-2 font-[600] border-[2px] py-4 rounded-full`}>Landowners </button>
        </div>

       {currentVisibleData.map(({id,question,answer})=>{
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