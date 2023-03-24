import React ,{useState,useEffect} from 'react'
import logo from "../../assets/Logo.svg"
import menuBurger from "../../assets/burger.svg"
import closeIcon from "../../assets/close.svg"
import GoodRenewable from "../../assets/GoodRenewable.svg"
import BookCallBtn from './BookCallBtn'

const Nav = () => {
    const [menuCollapse, setMenuCollapse]=useState(false)
    const listLinks=["Our Process","Get Involved","FAQ","Our Team"]

    const hanldeMenuHamburgerClicked=()=>setMenuCollapse(true)
    const hanldeCloseIconClicked=()=>setMenuCollapse(false)


    // steacky menu
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

  return (
    <header className={` ${isSticky ? 'fixed inset-0 z-[999999999] h-fit bg-white' : ''}`}>
    <nav className=' flex py-4  items-center justify-between flex-wrap relative md:flex-nowrap md:pt-6'>
     <img className={`${!menuCollapse ? "block":"hidden"} md:hidden`} src={logo} alt='logo' /> 
   <img className={`${menuCollapse ? "block":"hidden"} w-64 h-14 md:block lg:h-[4.2rem] lg:w-[32rem] lg:relative lg:right-16`}  src={GoodRenewable} alt="goodRenewable logo"/>
    { !menuCollapse &&   <BookCallBtn text="Book a Call" className="py-2 book-call-btn  hover:bg-black hover:text-white  md:hidden" fill="#152223" /> }  
  { !menuCollapse &&  <img onClick={hanldeMenuHamburgerClicked} className="md:hidden" src={menuBurger} alt="menu burger icon" />}    
     { menuCollapse && <img onClick={hanldeCloseIconClicked} className='md:hidden px-3' src={closeIcon} alt="close icon" />}  
        <ul className={ ` ${!menuCollapse ? "hidden h-0":" h-screen"} mx-auto md:flex  transition-opacity duration-1000 md:mx-1 md:visible md:h-fit  md:opacity-100 flex flex-col items-center mt-20 md:mt-0  w-full md:w-auto    text-black navbar__list font-bold md:font-[400]  text-[3.2rem] md:flex-row  md:text-[1.6rem]`}>
          {listLinks.map((link,index) =>{
                return <li  key={index}><a href='#'>{link}</a></li>
            })}
        <li className='relative top-10 md:top-0 '><a href='#'><BookCallBtn className='book-call-btn  hover:bg-black hover:text-white' text="Book a Call" fill="#152223" /></a> </li>
     </ul> 
      </nav>
    </header>
  )
}

export default Nav