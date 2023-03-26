import { ourProcessData } from './Constant'
import OurProcessItem from './OurProcessItem'

const OurProcess = () => {
  return (
    <div className='bg-white pt-[10rem] rounded-[2.4rem] pl-6 mt-[10rem] '>
      <div className='md:text-center'>
        <h2 className='mb-10'>Our process</h2>
        <p className='md:mb-20  '>The three-step strategy is carefully designed to maximise <br/> the likelihood of success</p>
      </div>
      {ourProcessData.map(({ id, title, img, text1,text2, animation }) => {
        return <OurProcessItem animation={animation} key={id} id={id} title={title} img={img} text1={text1} text2={text2} />
      })}
    </div>
  )
}

export default OurProcess