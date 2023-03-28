import React, { useState, useEffect } from 'react'
import { Link, Element } from 'react-scroll';

import logo from "../../assets/Logo.svg"
import menuBurger from "../../assets/burger.svg"
import closeIcon from "../../assets/close.svg"
import GoodRenewable from "../../assets/GoodRenewable.svg"
import BookCallBtn from '../UI/BookCallBtn'

const Nav = () => {
  const [menuCollapse, setMenuCollapse] = useState(false)
  const listLinks = ["Our Process", "Get Involved", "FAQ", "Our Team"]

  const hanldeMenuHamburgerClicked = () => setMenuCollapse(true)
  const hanldeCloseIconClicked = () => setMenuCollapse(false)


  // steacky menu
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleNavLinkClicked = () => setMenuCollapse(false)

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <header className={` bg-white px-4      ${isSticky ? 'fixed md:px-4 lg:px-10 inset-0 z-[99999999999999999] shadow-lg h-fit bg-white' : 'md:bg-[#FAFAFA]'}`}>
      <nav className=' flex py-4  md:px-0  items-center justify-between flex-wrap relative md:flex-nowrap md:pt-6 '>
       <Link className={`${isSticky ? "block" : "hidden"} md:hidden`} to="nav" offset={-80} smooth={true} duration={500}><img className='cursor-pointer'  src={logo} alt='logo' /> </Link>
       <Link className={`${!isSticky ? "block" : "hidden"} md:block `} to="nav" offset={-80} smooth={true} duration={500}><img className='lg:h-[4.2rem] cursor-pointer w-64 h-14 mb-1 lg:mb-3  md:block  lg:w-[32rem] lg:relative lg:right-14'  src={GoodRenewable} alt="goodRenewable logo" /></Link>
         {isSticky && !menuCollapse &&   <BookCallBtn text="Book a Call" className="py-2 book-call-btn border-2    hover:bg-black hover:text-white  md:hidden" fill="#152223" /> }
        {!menuCollapse && <img onClick={hanldeMenuHamburgerClicked} className="md:hidden cursor-pointer" src={menuBurger} alt="menu burger icon" />}
        {menuCollapse && <img onClick={hanldeCloseIconClicked} className='md:hidden px-3 cursor-pointer' src={closeIcon} alt="close icon" />}
        <ul className={` ${!menuCollapse ? "hidden  h-0" : " h-screen"} mx-auto md:flex  transition-opacity duration-1000 md:mx-1 md:visible md:h-fit  md:opacity-100 flex flex-col items-center mt-20 md:mt-0  w-full md:w-auto    text-black navbar__list font-bold md:font-[400]  text-[3.2rem] md:flex-row  md:text-[1.6rem]`}>
          {listLinks.map((link, index) => {
            return <li className='' key={index}><Link to={link} offset={index == 0 ? -60 :-80} smooth={true} duration={500}><a onClick={handleNavLinkClicked} href='#' className=' lg:mr-[2rem]'>{link}</a></Link></li>
          })}
          <li onClick={handleNavLinkClicked} className='relative top-10 md:top-0   '><BookCallBtn className='book-call-btn border-2 lg:px-10  hover:bg-black hover:text-white lg:ml-20' text="Book a Call" fill="#152223" /> </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav