import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

//components
import CardProducts from '../utilities/CardProducts';
import NavOfflineUser from '../utilities/NavOfflineUser';
import Footer from '../utilities/Footer';

//styles
import '../../style/style.css';

//files
import logoSweyLoading from '../../assets/images/logoSweyLoading.png';
import iconMenu from '../../assets/icons/iconMenu.svg';
import logoSwey from '../../assets/icons/logoSwey.svg';
import iconSearch from '../../assets/icons/iconSearch.svg';
import iconMenuDark from '../../assets/icons/iconMenuDark.svg';

const CheckoutSaved = () => {
  const [menu, setMenu] = useState(false);
  const IconMenu = menu ? iconMenuDark : iconMenu;

  return (
    <>
      <section className='bgColorMain'>

      <NavOfflineUser />

        <div className='flex w-[80%] ml-auto mr-auto mt-[18px] mb-[38px]'>
          <h2 className='sans font-bold text-[13px] text-[#2B2B2C] border-b-2 w-1/2 text-center'><NavLink to='/checkout' className='text-inherit no-underline '>Cart</NavLink></h2>
          <h2 className='sans font-bold text-[13px] text-[#2B2B2C] border-b-2 border-sky-500 w-1/2 text-center'>Saved</h2>
        </div>
        <div className='grid grid-cols-2 gap-2 pl-2 pr-2'>
          <CardProducts background='white' />
        </div>
        <div className='mt-[57px] flex justify-center'>
          <img src={logoSweyLoading} alt="Logo Swey Loading" />
        </div>
      </section>
      <footer className='mt-[35px]'>
        <Footer hideSocial={true} />
      </footer>
    </>
  )
}

export default CheckoutSaved;