import React from 'react';
import { NavLink } from 'react-router-dom';

//components
import NavOfflineUser from '../utilities/NavOfflineUser';
import Footer from '../utilities/Footer';

//styles
import '../../style/style.css';

//files
import backgroundPointsLogin from '../../assets/images/backgroundPointsLogin.png';
import clothesCoverDesktop from '../../assets/images/clothesCoverDesktop.png';
import gradientSignupMobile from '../../assets/images/gradientSignupMobile.png';
import iconCircleLogin from '../../assets/icons/iconCircleLogin.svg';
import iconCircleLoginBlue from '../../assets/icons/iconCircleLoginBlue.svg';

const SignUp = () => {

  return (
    <>
      <main className='bgColorMain overflow-x-hidden h-screen relative'>
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

        <section className='lg:flex  lg:justify-end'>
          <section 
            className='mobile bg-white rounded-2xl w-[80%] h-[600px] ml-auto mr-auto mt-[80px] shadow-xl relative lg:w-[30%] lg:m-auto lg:h-[500px] lg:mr-[220px] lg:flex lg:flex-col lg:justify-center'>
            <img 
              src={iconCircleLoginBlue} 
              alt="Icon Square Login" 
              className='absolute -right-5 -top-12 lg:hidden' 
            />
            <img 
              src={iconCircleLogin} 
              alt="Icon Circle Login" 
              className='absolute -left-8 top-20 -z-10 lg:hidden' 
            />
            <h2 className='sans font-bold text-[34px] text-[#272D4E] pl-[10%] pt-4 mb-0'>Sign-Up</h2>
            <input 
              type="text" 
              name="" 
              id="username" 
              placeholder='Username' 
              className='pl-2 w-[80%] h-[51px] outline-gray-500 ml-auto mr-auto mt-[10px] block border rounded-xl placeholder:text-[16px] lg:h-[30px]' />
            <input 
              type="email" 
              name="" 
              id="email" 
              placeholder='Email' 
              className='pl-2 w-[80%] h-[51px] outline-gray-500 ml-auto mr-auto block border rounded-xl mt-[18px] placeholder:text-[16px] lg:h-[30px]' />
            <input 
              type="password" 
              name="" 
              id="password" 
              placeholder='Password' 
              className='pl-2 w-[80%] h-[51px] outline-gray-500 ml-auto mr-auto block border rounded-xl mt-[18px] placeholder:text-[16px] lg:h-[30px]' />
            <input 
              type="password" 
              name="" 
              id="confirm  password" 
              placeholder='confirm Password' 
              className='pl-2 w-[80%] h-[51px] outline-gray-500 ml-auto mr-auto block border rounded-xl mt-[18px] placeholder:text-[16px] lg:h-[30px]' />
            <div className='flex justify-center items-center mt-[17px] gap-2'>
              <input 
                type="text" 
                name="" 
                id="day" 
                placeholder='29' 
                className='w-[26%] h-[51px] outline-gray-500 block border rounded-xl placeholder:text-[16px] placeholder:text-center lg:h-[30px]' />
              <input 
                type="text" 
                name="" 
                id="month" 
                placeholder='July' 
                className='w-[26%] h-[51px] outline-gray-500 block border rounded-xl placeholder:text-[16px] placeholder:text-center lg:h-[30px]' />
              <input 
                type="text" 
                name="" 
                id="year" 
                placeholder='2022' 
                className='w-[26%] h-[51px] outline-gray-500 block border rounded-xl placeholder:text-[16px] placeholder:text-center lg:h-[30px]' />
            </div>
            <div className='flex justify-center gap-1 mt-[17px]'>
              <div className='flex justify-center items-center w-[26%] h-[51px] border rounded-xl gap-2 lg:h-[30px]'>
                <span className='sans font-normal text-[10px] text-[#C8CAD0]'>She/her</span>
                <input 
                  type="radio" 
                  name="" 
                  id="she" 
                />
              </div>
              <div className='flex justify-center items-center w-[26%] h-[51px] border rounded-xl gap-2 lg:h-[30px]'>
                <span className='sans font-normal text-[10px] text-[#C8CAD0]'>He/Him</span>
                <input 
                  type="radio" 
                  name="" 
                  id="he" 
                />
              </div>
              <div className='flex justify-center items-center w-[26%] h-[51px] border rounded-xl gap-2 lg:h-[30px]'>
                <span className='sans font-normal text-[10px] text-[#C8CAD0]'>they/them</span>
                <input 
                  type="radio" 
                  name="" 
                  id="they" 
                />
              </div>
            </div>
            <div className='hidden lg:flex justify-start pl-12 items-center gap-2 mt-2'>
              <div>
                <a href="#" className='roboto font-extrabold text-[16px] text-[#299EF3] no-underline'>“I want to be able to sell”</a>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
              </div>
            </div>
            <NavLink 
              to='/home' 
              className='btnGradientRight mt-[18px] w-[80%] h-[47px] text-white sans font-medium text-[16px] ml-auto mr-auto no-underline text-center flex items-center rounded-full justify-center lg:w-[50%]'
            >
              Login
            </NavLink>
            <NavLink 
              to='/login' 
              className='sans font-bold text-[15px] text-[#299EF3] no-underline text-center block pt-2'
            >
              Don't have an account?
            </NavLink>
            <img 
              src={backgroundPointsLogin} 
              alt="Background Points" 
              className='absolute -bottom-0 -right-6 -z-10 lg:hidden' 
            />
            <img 
              src={iconCircleLoginBlue} 
              alt="Icon Circle Login" 
              className='absolute w-[32px] h-[32px] -bottom-3 -right-2 lg:hidden' 
            />
            <img 
              src={iconCircleLogin} 
              alt="Icon Circle Login" 
              className='absolute -right-16 -bottom-32 w-[103px] h-[107px] lg:hidden' 
            />
          </section>
          <section className='hidden lg:block w-[23%] lg:mt-[50px]'>
            <img 
              src={clothesCoverDesktop} 
              alt="Clothes Cover Desktop" 
              className='' 
            />
          </section>
        </section>
        <footer className='hidden lg:flex lg:gap-28 lg:items-center  lg:absolute lg:bottom-4 lg:left-[calc(50%_-_315px)]'>
          <Footer 
            className='hidden lg:block' 
          />
        </footer>

      {/* gradiente mobile */}
      {/* <img src={gradientSignupMobile} alt="Gradient Signup Mobile" className='absolute bottom-0 -z-10' /> */}
      </main>
    </>
  )
}

export default SignUp;