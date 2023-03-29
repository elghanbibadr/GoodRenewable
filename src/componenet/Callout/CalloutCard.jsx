import Card from '../UI/Card'
const CalloutCard = (props) => {

  const handleBookCallClicked=()=>props.setBookingPopUpOpen(true)

  return (
    <Card className='py-4 px-10 mx-auto md:mx-2 h-full my-10 rounded-[2.4rem] max-w-[40.5rem] '>
      <div className='w-[70%] h-[200px] mx-auto'><img className='  h-full mt-10' src={props.img} loading="lazy" alt={`${props.title} svg logo presentation`} /></div>
      <div >
        <h4 className='my-8' >{props.title}</h4>
        {props.id==2  && <p>Learn about joining our <a  onClick={handleBookCallClicked} className='text-green cursor-pointer underline'>Pioneer Group</a> of developers benefiting from discounted subscriptions and early access to projects.</p>}
        {props.id!==2 &&  <p >{props.text} </p> }
      </div>
    </Card>
  )
}

export default CalloutCard