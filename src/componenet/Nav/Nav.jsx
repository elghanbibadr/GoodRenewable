import React ,{useState} from 'react'
import logo from "../../assets/Logo.svg"
import menuBurger from "../../assets/burger.svg"
import closeIcon from "../../assets/close.svg"
import GoodRenewable from "../../assets/GoodRenewable.svg"
import BookCallBtn from './BookCallBtn'

const Nav = () => {
    const [menuCollapse, setMenuCollapse]=useState(false)

    const hanldeMenuHamburgerClicked=()=>setMenuCollapse(true)
    const hanldeCloseIconClicked=()=>setMenuCollapse(false)
  return (
    <header>
    <nav className='p-4 flex items-center justify-between flex-wrap md:flex-nowrap'>
     <img className={`${!menuCollapse ? "block":"hidden"} md:hidden`} src={logo} alt='logo' /> 
   <img className={`${menuCollapse ? "block":"hidden"} w-64 h-14 md:block`}  src={GoodRenewable} alt="goodRenewable logo"/>
    { !menuCollapse &&   <BookCallBtn className="md:hidden" /> }  
  { !menuCollapse &&  <img onClick={hanldeMenuHamburgerClicked} className="md:hidden" src={menuBurger} alt="menu burger icon" />}    
     { menuCollapse && <img onClick={hanldeCloseIconClicked} className='md:hidden' src={closeIcon} alt="close icon" />}  
       <ul className={ ` ${!menuCollapse ? "opacity-0 invisible":"opacity-100 visible"} mx-auto md:mx-1 flex flex-col items-center mt-20 md:mt-auto  w-full md:w-auto    text-black navbar__list font-bold md:font-[400]  text-[3.2rem] md:flex-row  md:text-[1.6rem]`}>
        <li  ><a href='#'>Our Process</a> </li>
        <li><a href='#'>Get Involved</a> </li>
        <li><a href='#'>FAQ</a> </li>
        <li><a href='#'>Our Team</a> </li>
        <li className='relative top-10 md:top-0'><a href='#'><BookCallBtn /></a> </li>
     </ul>
      </nav>
    </header>
  )
}

export default Nav