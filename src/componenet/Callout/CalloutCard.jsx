import Card from '../UI/Card'
const CalloutCard = (props) => {
  return (
    <Card className='p-4 mx-auto h-full my-10 rounded-[2.4rem] max-w-[40.5rem] '>
      <div className='w-[80%] h-[200px]'><img className=' h-full mt-10' src={props.img} loading="lazy" alt={`${props.title} svg logo presentation`} /></div>
      <div >
        <h4 className='my-8' >{props.title}</h4>
        <p >{props.text}</p>
      </div>
    </Card>
  )
}

export default CalloutCard