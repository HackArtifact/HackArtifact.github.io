import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import NavOfflineUser from '../utilities/NavOfflineUser';
import Footer from '../utilities/Footer';
import '../../style/style.css';
import clothesCoverDesktop from '../../assets/images/clothesCoverDesktop.png';
import backgroundPointsLogin from '../../assets/images/backgroundPointsLogin.png';
import iconSquareLogin from '../../assets/images/iconSquareLogin.png';
import iconCircleLogin from '../../assets/icons/iconCircleLogin.svg';
import iconCircleLoginBlue from '../../assets/icons/iconCircleLoginBlue.svg';
import iconMenu from '../../assets/icons/iconMenu.svg';
import logoSwey from '../../assets/icons/logoSwey.svg';
import iconSearch from '../../assets/icons/iconSearch.svg';
import iconsearchwhite from '../../assets/icons/iconsearchwhite.svg';
import iconMenuDark from '../../assets/icons/iconMenuDark.svg';

  const Login = () => {

    const [menu, setMenu] = useState(false);
    const IconMenu = menu ? iconMenuDark : iconMenu;

    // const [form, setForm] = useState({ email: '', password: '' });

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    // }

    // const handleOnChange = async (e) => {
    //   await setForm({
    //     ...form,
    //     [e.target.name]: e.target.value
    //   });
    // }

    // const handleCheckMail = async () => {
    //   await axios.post('https://api.escuelajs.co/api/v1/users/is-available', {
    //     email: form.email
    //   })
    //   .then(function(response){
    //     console.log(response)
    //     if(response.data.isAvailable){
    //       alert('El usuario existe')
    //     } else {
    //       console.log('El usuario no existe')
    //     }
    //   })
    //   .catch(function(error){
    //     console.log(error)
    //   })
    // }

    // const handleSession = async () => {
    //   await axios.post(baseURL, {
    //     email: form.email,
    //     password: form.password
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
       
    // }

 

  return (

    <>
      <main className='bgColorMain overflow-x-hidden h-screen'>

      <NavOfflineUser 
        colorSwey='colorNavMobile' 
        colorInputMobile='input' 
        colorNavMobile='colorNavMobile' 
        colorLogin='#272D4E' 
        colorInputDesktop='input' 
        colorNav='colorNavMobile' 
        loginDesktop='#272D4E'
        hiddeInput={true} 
      />


        <section className='lg:flex lg:items-center lg:justify-end'>
          <section className='mobile bg-white rounded-2xl w-[80%] h-[385px] ml-auto mr-auto mt-[165px] lg:mt-[80px] shadow-xl relative lg:w-[30%] lg:h-[400px]  lg:m-auto lg:mr-[220px] lg:flex lg:flex-col lg:justify-center xl:mt-[200px]' >
            <img src={iconSquareLogin} alt="Icon Square Login" className='absolute right-0 -top-10 lg:hidden' />
            <img src={iconCircleLogin} alt="Icon Circle Login" className='absolute -left-6 -top-9 -z-10 lg:hidden' />
            <h2 className='sans font-bold text-[34px] text-[#272D4E] pl-[10%] pt-4 pb-3 mb-0'>Login:</h2>
            <form>
              <input type="email" name="email" placeholder='Username/email' className='pl-2 w-[80%] h-[51px] ml-auto mr-auto block border rounded-xl placeholder:text-[16px] outline-[#299EF3]' required={true} />
              <input type="password" name="password" placeholder='Password' className='pl-2 w-[80%] h-[51px] ml-auto mr-auto block outline-[#299EF3] border rounded-xl mt-[18px] placeholder:text-[16px]' />
            </form>
            <a href="#" className='no-underline sans font-extrabold text-[15px] text-[#299EF3] pl-[10%]'>Forgot Password?</a>
            <NavLink to='/home' className='btnGradientRight mt-[18px] w-[80%] h-[47px] text-white sans font-medium text-[16px] ml-auto mr-auto no-underline text-center flex items-center justify-center rounded-full lg:w-[50%]' >Login</NavLink>
            <NavLink to='/signup' className='sans font-bold text-[15px] text-[#299EF3] no-underline text-center block pt-2'>Don't have an account?</NavLink>
            <img src={backgroundPointsLogin} alt="Background Points" className='absolute -bottom-0 -right-6 -z-10 lg:hidden' />
            <img src={iconCircleLoginBlue} alt="Icon Circle Login" className='absolute w-[32px] h-[32px] -bottom-3 -right-2 lg:hidden' />
            <img src={iconCircleLoginBlue} alt="Icon Circle Login" className='absolute -bottom-16 left-3 lg:hidden' />
            <img src={iconCircleLogin} alt="Icon Circle Login" className='absolute -right-16 -bottom-32 w-[103px] h-[107px] lg:hidden' />
          </section>
          <section className='hidden lg:block w-[23%] lg:mt-[50px]'>
            <img src={clothesCoverDesktop} alt="Clothes Cover Desktop" className='' />
          </section>
        </section>
        <footer className='hidden lg:flex lg:gap-28 lg:items-center  lg:absolute lg:bottom-4 lg:left-[calc(50%_-_315px)]'>
          <Footer className='hidden lg:block' />
        </footer>
        <div id='result'></div>
      </main>
    </>
  )
}

export default Login;