import { Link } from 'react-scroll'
import goodRenewableLogo from '../../assets/GoodRenewable.svg'
const Footer = () => {
  const listLinks = ["Our Process", "Get Involved", "FAQ", "Our Team"]
  return (
    <footer className='pt-28 section bg-cover bg-no-repeat bg-[url(/src/assets/footer.svg)] md:bg-[url(/src/assets/footerBg-desktop.svg)] flex flex-col items-center'>
      <img className='mt-10' src={goodRenewableLogo} alt='good renewable logo' loading='lazy' />
      <ul className='text-[1.8rem] md:flex md:justify-between font-[sora] text-center '>
        {listLinks.map((link, index) => {
          return <li className='my-6 md:mx-10' key={index}><Link to={link} offset={-100} smooth={true} duration={500}><a className='text-[1.6rem]' href='#'>{link}</a></Link></li>

        })}
      </ul>
      <h5 className='text-black cursor-pointer  underline my-10 font-[500]'><a href="mailto:hello@goodrenewable.io">hello@goodrenewable.io</a></h5>
      <span className='text-[1.4rem] font-[400] mb-10'>© All rights reserved. 2023</span>
    </footer>
  )
}

export default Footer