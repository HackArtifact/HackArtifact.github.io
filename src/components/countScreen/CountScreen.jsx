import React, { useContext } from 'react';

//components
import NavOfflineUser from '../utilities/NavOfflineUser.jsx';

//usecontext
import { ProductContext } from '../../context/ProductContext.jsx';

//styles
import '../../style/style.css';

//files
import appleIcon from '../../assets/images/iconApple.png';
import androidIcon from '../../assets/images/iconAndroid.png';

const CountScreen = () => {

  const { countdownLogic } = useContext(ProductContext);
  //execution of countdown logic
  window.onload = countdownLogic();


  //   document.getElementsByTagName('meta')['theme-color'].content = '#4285f4';
  //   document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#4285f4')


  return (
    <main className='bgGradientCountScreen w-screen min-h-screen '>

      <NavOfflineUser 
        colorSwey='swey' 
        colorInputDesktop='input-desktop' 
        iconWhite={true} 
        colorNav='light' 
        colorLogin='#272D4E' 
        colorNavMobile='colorNavMobile' 
        loginDesktop='#ECEFFF' 
        colorInputMobile='input'
        colorTextInputMobile='colorNavMobile'
        colorTextInputDesktop='white'
      />

      <article className='w-[90%] ml-auto mr-auto mt-[59px] lg:mt-[30px]'>
        <div className='pl-1'>
          <h2 className='text-[60px] sans font-bold leading-none lg:text-[85px] text-[#8790C3] mb-0'>Swéy:</h2>
          <h3 className='text-[35px] sans font-normal leading-none lg:text-[60px] text-[#8790C3] mb-0'>Shop your way</h3>
        </div>

        <section className='pt-[111px] lg:pt-[80px] flex justify-center text-center lg:gap-4 gap-2 w-[90%] ml-auto mr-auto'>
          <div className="flex flex-col items-center">
            <h3 className='text-[18px] md:text-[40px] lg:text-[40px] text-[#FFD7D7] sans font-bold mb-0'>Days</h3>
            <div className='rounded-full mt-2 w-[67px] h-[67px] md:w-[80px] md:h-[80px] lg:w-[170px] lg:h-[170px] lg:rounded-3xl flex justify-center items-center bg-[#2c305978]'>
              <span id='days' className='text-[40px] lg:text-[90px] roboto font-bold text-[#D4F7FF]' />
            </div>
          </div>
          <div className="hour flex flex-col items-center">
            <h3 className='text-[18px] md:text-[40px] lg:text-[40px] text-[#FFD7D7] sans font-bold mb-0'>Hours</h3>
            <div className='rounded-full mt-2 w-[67px] h-[67px] md:w-[80px] md:h-[80px] lg:w-[170px] lg:h-[170px] lg:rounded-3xl flex justify-center items-center bg-[#2c305978]'>
              <span id='hours' className='text-[40px] lg:text-[90px] roboto font-bold text-[#D4F7FF]' />
            </div>
          </div>
          <div className="minute flex flex-col items-center">
            <h3 className='text-[18px] md:text-[40px] lg:text-[40px] text-[#FFD7D7] sans font-bold mb-0'>Minutes</h3>
            <div className='rounded-full mt-2 w-[67px] h-[67px] md:w-[80px] md:h-[80px] lg:w-[170px] lg:h-[170px] lg:rounded-3xl flex justify-center items-center bg-[#2c305978]'>
              <span id='minutes' className='text-[40px] lg:text-[90px] roboto font-bold text-[#D4F7FF]' />
            </div>
          </div>
          <div className="second flex flex-col items-center">
            <h3 className='text-[18px] md:text-[40px] lg:text-[40px] text-[#FFD7D7] sans font-bold mb-0'>Seconds</h3>
            <div className='rounded-full mt-2 w-[67px] h-[67px] md:w-[80px] md:h-[80px] lg:w-[170px] lg:h-[170px] lg:rounded-3xl flex justify-center items-center bg-[#2c305978]'>
              <span id='seconds' className='text-[40px] lg:text-[90px] roboto font-bold text-[#D4F7FF]' />
            </div>
          </div>
        </section>

        <h3 className='pt-[19px] text-center text-[23px] lg:text-[46px] font-normal text-[#8790C3] sans mb-0'>Mobile App Coming Soon</h3>

        {/*When the countdown ends, it displays the following message*/}
        <p id='msgFinish' className='text-white' />

      </article>

      <footer className='w-[90%] ml-auto mr-auto pt-[100px] gap-4 lg:pt-2 flex justify-center lg:gap-5'>
        <div className='w-[110px] h-[110px] lg:w-[110px] lg:h-[110px] bg-footerAndroid rounded-full flex items-center justify-center bg-[#418377]'>
          <img src={androidIcon} alt="Android logo" className='lg:w-1/2' />
        </div>
        <div className='w-[110px] h-[110px] lg:w-[110px] lg:h-[110px] bg-footerApple rounded-full flex items-center justify-center bg-[#3F3F3F]'>
          <img src={appleIcon} alt="Apple logo" className='lg:w-1/2' />
        </div>
      </footer>

    </main>
  )
}

export default CountScreen;