import desktopMap from "../../assets/desktopMap.svg"
import mobileMap from "../../assets/mobileMap.svg"

export const Map = () => {
  return (
    <div  data-aos="flip-up"  className='my-60  md:mx-8  map '  data-aos-offset="300">  
    <img  className=' max-w-full mx-auto hidden  md:block  ' src={desktopMap} alt='map image for desktops' loading='lazy' />
    <img  className=' max-w-full mx-auto md:hidden' src={mobileMap}  alt='map image for mobile' loading='lazy' />
    </div>
  )
}
