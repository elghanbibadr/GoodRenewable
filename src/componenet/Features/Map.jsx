import desktopMap from "../../assets/desktopMap.svg"
import mobileMap from "../../assets/mobileMap.svg"

export const Map = () => {
  return (
    <div         data-aos="flip-up"     className='my-60      flex justify-center    map '  data-aos-offset="300">  
    <img  className='hidden max-w-[100%] md:block mx-4  ' src={desktopMap} alt='map image for desktops' loading='lazy' />
    <img  className='mx-auto max-w-[100%] md:hidden' src={mobileMap}  alt='map image for mobile' loading='lazy' />
    </div>
  )
}
