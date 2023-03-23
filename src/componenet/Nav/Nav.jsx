import React ,{useState} from 'react'
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
  return (
    <header>
    <nav className=' flex pt-4  items-center justify-between flex-wrap relative md:flex-nowrap md:pt-6'>
     <img className={`${!menuCollapse ? "block":"hidden"} md:hidden`} src={logo} alt='logo' /> 
   <img className={`${menuCollapse ? "block":"hidden"} w-64 h-14 md:block lg:h-[4.2rem] lg:w-[32rem] lg:relative lg:right-16`}  src={GoodRenewable} alt="goodRenewable logo"/>
    { !menuCollapse &&   <BookCallBtn text="Book a Call" className="py-2 book-call-btn md:hidden" fill="#152223" /> }  
  { !menuCollapse &&  <img onClick={hanldeMenuHamburgerClicked} className="md:hidden" src={menuBurger} alt="menu burger icon" />}    
     { menuCollapse && <img onClick={hanldeCloseIconClicked} className='md:hidden' src={closeIcon} alt="close icon" />}  
       <ul className={ ` ${!menuCollapse ? "opacity- invisible h-0":"opacity-100 h-screen  visible"} mx-auto md:mx-1 md:visible md:h-fit  md:opacity-100 flex flex-col items-center mt-20 md:mt-0  w-full md:w-auto    text-black navbar__list font-bold md:font-[400]  text-[3.2rem] md:flex-row  md:text-[1.6rem]`}>
          {listLinks.map((link,index) =>{
                return <li  key={index}><a href='#'>{link}</a></li>
            })}
        <li className='relative top-10 md:top-0 '><a href='#'><BookCallBtn className='book-call-btn' text="Book a Call" fill="#152223" /></a> </li>
     </ul>
      </nav>
    </header>
  )
}

export default Nav