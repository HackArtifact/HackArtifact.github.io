import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import iconCartLoaded from '../../assets/icons/iconCartLoaded.svg';
import iconProfileLogin from '../../assets/images/iconProfileLoggedin.png';
import '../../style/style.css';
import logoSwey from '../../assets/icons/logoSwey.svg';
import iconMenu from '../../assets/icons/iconMenu.svg';
import iconMenuDark from '../../assets/icons/iconMenuDark.svg';
import iconSearch from '../../assets/icons/iconSearch.svg';
import iconsearchwhite from '../../assets/icons/iconsearchwhite.svg';

const NavOnlineUser = (props) => {

  const [menu, setMenu] = useState(false);
  const IconMenu = menu ? iconMenuDark : iconMenu;

  return (
    <>
      <nav className={menu ? 'navbar navbar-expand-lg bgGradientCountScreenActive rounded-b-pill' : 'navbar navbar-expand-lg bgColorMain'}>
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          <div className='flex items-center'>
            <img src={logoSwey} alt="Logo Swey" className='navbar-brand me-0 mb-1' />
            <h1 className={menu ? 'mb-0 ml-2 roboto font-black text-[21px] text-black' : `{mb-0 ml-2 roboto font-black text-[21px] lg:hidden text-[${props.textSwey}]}`}>S W É Y</h1>
            <h1 className='mb-0 ml-2 roboto font-black text-[21px] hidden lg:block text-[#F3F3F3]'>S W É Y</h1>
          </div>
          <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img onClick={() => setMenu(!menu)} src={IconMenu} alt="Icon Menu" />
          </button>
          {/* desktop nav */}
          <ul className="navbar-nav text-center mb-2 mb-lg-0 d-none d-lg-flex ms-xl-5 justify-conten-start">
            <li className="nav-item">
              <a className="nav-link active text-black fw-bold sans" aria-current="page" href="#">Sell</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black fw-bold sans" href="#">Marketplace</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black fw-bold sans" href="#">Community</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black fw-bold sans" href="#">Join Swéy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black fw-bold sans" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black fw-bold sans" href="#">Resources</a>
            </li>
          </ul>
          <div className="collapse navbar-collapse d-lg-flex justify-content-end align-items-center" id="navbarSupportedContent">
            <form className="d-flex d-lg-none mt-3 relative" role="search">
              <input className="form-control m-auto ps-5 bgColorInputCountScreen w-75 h-12 rounded-pill placeholder:text-right placeholder:text-[#299ef373] " type="search" placeholder="Search the store" aria-label="Search" />
              <img src={iconSearch} alt="Icon Search" className='absolute left-[calc(20%_-_12px)] top-[calc(50%_-_12px)]' />
            </form>
            {/* mobile nav */}
            <ul className="navbar-nav text-center mb-2 mb-lg-0 d-lg-none">
              <li className="nav-item">
                <a className="nav-link active text-blue fw-bold sans" aria-current="page" href="#">Sell</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-blue fw-bold sans" href="#">Marketplace</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-blue fw-bold sans" href="#">Community</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-blue fw-bold sans" href="#">Join Swéy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-blue fw-bold sans" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-blue fw-bold sans" href="#">Resources</a>
              </li>
            </ul>


            <div className='flex justify-content-end relative'>
              <form className="d-none d-lg-flex" role="search">
                <input className="form-control bgColorInputCountScreen placeholder:text-[#C7E7FF] placeholder:text-center border-0 ps-5" type="search" placeholder="Search the store" aria-label="Search" />
                <img src={iconsearchwhite} alt="Icon Search" className='absolute left-[calc(5%_-_12px)] top-[calc(50%_-_12px)]' />
              </form>
              <div className='d-none d-lg-flex align-items-center gap-2'>
                <NavLink to='/login' className='text-[#272D4E] no-underline roboto font-medium text-[18px] lg:text-white'>Log In</NavLink>
                <NavLink to='/home' className='bg-[#7854F7] w-[120px] h-[47px] roboto font-medium text-[18px] text-white no-underline mb-0 flex justify-center items-center rounded-md lg:hidden'>Get Started</NavLink>
              </div>
            </div>
            <div className='flex justify-center items-center w-[100%] mr-auto ml-auto xl-gap-4'>
              <NavLink to='/login' className='text-[#272D4E] no-underline roboto font-medium text-[18px] lg:text-white'><img src={iconCartLoaded} alt="Icon Cart" className='w-[51px] h-[51px] pb-2' /></NavLink>
              <NavLink to='/home'><img src={iconProfileLogin} alt="Icon Profile" className='w-[94px] h-[94px]' /></NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavOnlineUser