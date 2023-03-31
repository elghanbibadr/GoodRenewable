import desktopMap from "../../assets/desktopMap.svg"
import mobileMap from "../../assets/mobileMap.svg"

export const Map = () => {
  return (
    // div  data-aos="flip-up"  className='my-60 max-w-[88%] mx-auto map '
    <div data-aos="zoom-in" div className="my-60  md:max-w-[96%] mx-auto  map" data-aos-offset="300" >  
    <img   className=' max-w-[100%]   hidden object-fit  md:block  ' src={desktopMap} alt='map image for desktops' loading='lazy' />
    <img  className=' max-w-[100%]  object-fit md:hidden' src={mobileMap}  alt='map image for mobile' loading='lazy' />
    </div>
  )
}
