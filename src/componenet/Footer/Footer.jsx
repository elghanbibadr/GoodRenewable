import React from 'react'
import goodRenewableLogo from '../../assets/GoodRenewable.svg'
const Footer = () => {
  return (
    <footer className='pt-28 bg-[url(/src/assets/footer.svg)] md:bg-[url(/src/assets/footerBg-desktop.svg)] flex flex-col items-center'>
        <img src={goodRenewableLogo} alt='good renewable logo' />
        <ul className='text-[1.8rem] md:flex md:justify-between font-[sora] text-center '>
           <li className='my-6 md:mx-10'><a href='#'>Our Process</a></li> 
           <li className='my-6 md:mx-10'><a href='#'>Get Involved</a></li> 
           <li className='my-6 md:mx-10'><a href='#'>FAQ</a></li> 
           <li className='my-6 md:mx-10'><a href='#'>Our Team</a></li> 
        </ul>
        <p className='text-black mb-10 font-[500]'>hello@goodrenewable.io</p>
        <span className='text-[1.4rem] font-[600]'>© All rights reserved. 2023</span>
    </footer>
  )
}

export default Footer