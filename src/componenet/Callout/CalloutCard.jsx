import Card from '../UI/Card'
const CalloutCard = (props) => {
  return (
    <Card className='py-4 px-10 mx-auto h-full my-10 rounded-[2.4rem] max-w-[40.5rem] '>
      <div className='w-[70%] h-[200px] mx-auto'><img className='  h-full mt-10' src={props.img} loading="lazy" alt={`${props.title} svg logo presentation`} /></div>
      <div >
        <h4 className='my-8' >{props.title}</h4>
        <p >{props.text} <a>{props.link}</a></p>
      </div>
    </Card>
  )
}

export default CalloutCard