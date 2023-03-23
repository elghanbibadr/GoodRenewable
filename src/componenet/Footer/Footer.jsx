import React from 'react'
import goodRenewableLogo from '../../assets/GoodRenewable.svg'
const Footer = () => {
    const listLinks=["Our Process","Get Involved","FAQ","Our Team"]

  return (
    <footer className='pt-28 section bg-cover bg-no-repeat bg-[url(/src/assets/footer.svg)] md:bg-[url(/src/assets/footerBg-desktop.svg)] flex flex-col items-center'>
        <img src={goodRenewableLogo} alt='good renewable logo' />
        <ul className='text-[1.8rem] md:flex md:justify-between font-[sora] text-center '>
            {listLinks.map((link,index) =>{
                return <li className='my-6 md:mx-10' key={index}><a href='#'>{link}</a></li>
            })}
        </ul>
        <p className='text-black my-10 font-[500]'>hello@goodrenewable.io</p>
        <span className='text-[1.4rem] font-[600]'>© All rights reserved. 2023</span>
    </footer>
  )
}

export default Footer