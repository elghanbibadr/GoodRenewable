import desktopMap from "../../assets/desktopMap.svg"
import mobileMap from "../../assets/mobileMap.svg"

export const Map = () => {
  return (
    <div         data-aos="flip-up"     className='my-60  max-w-[99%]   mx-auto  flex justify-center  map '  data-aos-offset="300">  
    <img  className='hidden  md:block  ' src={desktopMap} alt='map image for desktops' loading='lazy' />
    <img  className=' md:hidden' src={mobileMap}  alt='map image for mobile' loading='lazy' />
    </div>
  )
}
