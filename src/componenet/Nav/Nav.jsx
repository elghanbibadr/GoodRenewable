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
    <nav className='p-4 flex items-center justify-between flex-wrap'>
     {!menuCollapse &&   <img src={logo} alt='logo' />}  
      {menuCollapse &&  <img className='w-64 h-14'  src={GoodRenewable} alt="goodRenewable logo"/>}  
    { !menuCollapse &&   <BookCallBtn /> }  
  { !menuCollapse &&  <img onClick={hanldeMenuHamburgerClicked} src={menuBurger} alt="menu burger icon" />}    
     { menuCollapse && <img onClick={hanldeCloseIconClicked} className='' src={closeIcon} alt="close icon" />}  
     {menuCollapse &&  <ul className=' mx-auto flex flex-col items-center mt-20  w-full relative    text-black navbar__list font-bold  text-[3.2rem]'>
        <li  ><a href='#'>Our Process</a> </li>
        <li><a href='#'>Get Involved</a> </li>
        <li><a href='#'>FAQ</a> </li>
        <li><a href='#'>Our Team</a> </li>
        <li className='relative top-10'><a href='#'><BookCallBtn /></a> </li>
     </ul>}
      </nav>
    </header>
  )
}

export default Nav