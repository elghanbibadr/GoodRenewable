import desktopMap from "../../assets/desktopMap.svg"
import mobileMap from "../../assets/mobileMap.svg"

export const Map = () => {
  return (
    <div   data-aos="flip-up" className='my-40 p-4 mb-40 map '  data-aos-offset="300">  
    <img  className='hidden md:block   mx-4' src={desktopMap} alt='map image for desktops' loading='lazy' />
    <img  className='mx-auto md:hidden' src={mobileMap}  alt='map image for mobile' loading='lazy' />
    </div>
  )
}
