import React from 'react';
import iconTwitter from '../../assets/icons/twitter.svg';
import iconFacebook from '../../assets/icons/facebook.svg';
import iconRss from '../../assets/icons/rss.svg';
import iconInstagram from '../../assets/icons/instagram.svg';


const Footer = ({ hideSocial }) => {
  return (
    <>
      <div className='flex items-center justify-evenly lg:gap-20 '>
          <div className={hideSocial ? 'hidden' : 'bg-white flex justify-center items-center gap-5 h-auto'}>
            <a href=""><img src={iconTwitter} alt="Twitter Icon" /></a>
            <a href=""><img src={iconFacebook} alt="Facebook Icon" /></a>
            <a href="#"><img src={iconRss} alt="RSS Icon" /></a>
            <a href=""><img src={iconInstagram} alt="Instagram Icon" /></a>
          </div>

          <div className='flex justify-center text-center roboto font-normal'>
            <h2 className='text-[12px] text-[#272D4E] mb-0'>COPYRIGHT SWÉY - <span><a href="#" className='text-[#272D4E]'>TERMS & CONDITIONS PRIVACY POLICY</a></span></h2>
          </div>

        </div>
    </>
  )
}

export default Footer;