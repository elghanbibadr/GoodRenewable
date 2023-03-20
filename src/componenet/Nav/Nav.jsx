import React ,{useState} from 'react'
import logo from "../../assets/Logo.svg"
import arrow from "../../assets/arrow.svg"
import menuBurger from "../../assets/burger.svg"
import closeIcon from "../../assets/close.svg"
import GoodRenewable from "../../assets/GoodRenewable.svg"
const Nav = () => {
    const [menuCollapse, setMenuCollapse]=useState(false)
  return (
    <header>
    <nav className='p-4 flex items-center justify-between flex-wrap'>
        <img src={logo} alt='logo' />
        <img className='hidden' src={GoodRenewable} alt="goodRenewable logo"/>
        <button className='flex border-2 border-paleBlack rounded-2xl px-6 py-2 items-center'>
            <p className='mr-4'>Book a Call</p>
            <img className='w-[20px]' src={arrow} alt='arrow right logo' />
        </button>
    { !menuCollapse &&  <img src={menuBurger} alt="menu burger icon" />}    
     { menuCollapse && <img className='hidden' src={closeIcon} alt="close icon" />}  
     {menuCollapse &&  <ul className='w-full text-black navbar__list font-bold  text-[3.2rem]'>
        <li ><a href='#'>Our Process</a> </li>
        <li><a href='#'>Get Involved</a> </li>
        <li><a href='#'>FAQ</a> </li>
        <li><a href='#'>Our Team</a> </li>
     </ul>}
      </nav>
    </header>
  )
}

export default Nav