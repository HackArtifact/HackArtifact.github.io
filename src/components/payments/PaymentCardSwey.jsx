import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

//usecontext
import { ProductContext } from '../../context/ProductContext';

//components
import NavOfflineUser from '../utilities/NavOfflineUser';

//files
import iconMenu from '../../assets/icons/iconMenu.svg';
import logoSwey from '../../assets/icons/logoSwey.svg';
import iconMenuDark from '../../assets/icons/iconMenuDark.svg';
import iconSearch from '../../assets/icons/iconSearch.svg';
import iconArrowLeft from '../../assets/icons/iconArrowLeft.svg';
import iconClose from '../../assets/icons/iconClose.svg';
import iconVerifiedHome from '../../assets/icons/iconVerifiedHome.svg';
import iconLocationMarket from '../../assets/icons/iconLocationMarket.svg';


const CheckoutPaymentCardSwey = () => {

  const { modalSplit2, setModalSplit2, modalSplit3, setModalSplit3, modalSplit4, setModalSplit4 } = useContext(ProductContext);

  return (
    <>
      {/* VERSION DESKTOP */}
      <section className='bg-white w-[60%] ml-auto mr-auto mt-[42px] shadow-2xl rounded-xl pl-4 pr-4 pb-4 pt-[43px] hidden lg:block '>

        <div className='flex justify-between items-center pl-2 pr-2'>
          <div>
            <img 
              src={iconArrowLeft} 
              alt="Icon Arrow Left" 
              className='w-[23px] h-[26px] cursor-pointer' 
              onClick={() => {
                setModalSplit3(!modalSplit3);
                setModalSplit2(!modalSplit2);
              }}
            />
          </div>
          <h2 className='text-[#40BFFF] raleway font-normal text-[32px] mt-[5px]'>Make Payment</h2>
          <div>
            <img 
              src={iconClose} 
              alt="Icon Close" c
              className='w-[26px] h-[29px] cursor-pointer' 
              onClick={() => {
                setModalSplit3(!modalSplit3);
              }}
            />
          </div>
        </div>

        <div className='flex mt-[5px] justify-center items-center'>
          <div className='bg-[#40BFFF] rounded-full w-[37px] h-[36px] text-center flex items-center justify-center'>
            <h3 className='text-white text-[18px] font-bold items-center justify-center mb-0'>1</h3>
          </div>
          <hr className='bg-black w-2' />
          <div className='bg-[#40BFFF] rounded-full w-[37px] h-[36px] text-center flex items-center justify-center'>
            <h3 className='text-white text-[18px] font-bold mb-0'>2</h3>
          </div>
          <hr className='bg-black w-2' />
          <div className='bg-[#40BFFF] rounded-full w-[37px] h-[36px] text-center flex items-center justify-center'>
            <h3 className='text-white text-[18px] font-bold mb-0'>3</h3>
          </div>
          <hr className='bg-black w-2' />
          <div className='bg-[#DFDEDE] rounded-full w-[37px] h-[36px] text-center flex items-center justify-center'>
            <h3 className='text-white text-[18px] font-bold mb-0'>4</h3>
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <div className='mt-[37px]'>
            <input
              type="text"
              placeholder='Name on Card'
              className='w-[80%] h-[50px] block m-auto rounded-md placeholder:pl-2 bg-[#F6F6F6] placeholder:text-[16px] outline-[#40BFFF] pl-2 text-[#272D4E] roboto font-normal text-[16px]'
            />
            <div className='flex justify-center pl-2 pr-2 mt-[26px]'>
              <input
                type="number"
                placeholder='Expiry'
                className='w-[35%] h-[50px] block m-auto rounded-md placeholder:pl-2 bg-[#F6F6F6] placeholder:text-[16px] outline-[#40BFFF] pl-2 text-[#272D4E] roboto font-normal text-[16px]'
              />
              <input
                type="number"
                placeholder='CVV'
                className='w-[35%] h-[50px] block m-auto rounded-md placeholder:pl-2 bg-[#F6F6F6] placeholder:text-[16px] outline-[#40BFFF] pl-2 text-[#272D4E] roboto font-normal text-[16px]'
              />
            </div>
            <input
              type="number"
              placeholder='Card Number'
              className='w-[80%] h-[50px] block ml-auto mr-auto mt-[36px] rounded-md placeholder:pl-2 bg-[#F6F6F6] placeholder:text-[16px] outline-[#40BFFF] pl-2 text-[#272D4E] roboto font-normal text-[16px]'
            />

            <div className='flex mt-[27px] justify-start pl-10'>
              <input
                type="checkbox"
                name=""
                id=""
                defaultChecked
              />
              <h3 className='sans font-normal text-[14px] text-[#999999] mb-0 pl-[10px]'>Save this credit card</h3>
            </div>

            <div className='flex items-center h-[76px] mt-[35px] w-[80%] ml-auto mr-auto'>
              <div className='bgLoadingBlueCard h-full flex items-center justify-center w-1/2 rounded-l-xl relative'>
                <h2 className='sans font-medium text-[14px] mb-0 text-[#ffffff]'>SWEY Coin Wallet</h2>
                <img src={iconLocationMarket} alt="icon Location" className='absolute -top-5 -right-2' />
              </div>
              <div className='h-[76px] flex items-center justify-center text-center bg-[#F5F5F5] w-1/2 rounded-r-xl'>
                <span className='sans font-medium text-[12px] text-[#000000] text-center'>1000 Coin ($5.85)</span>
              </div>
            </div>

            <button
              type='button'
              className='bg-[#33A0FF] mt-[30px] w-[80%] h-[74px] block ml-auto mr-auto rounded-lg sans font-extrabold text-[20px] text-white'
              onClick={() => {
                setModalSplit3(!modalSplit3);
                setModalSplit4(!modalSplit4);
              }}
            >
              Confirm
            </button>
            <span className='block text-center roboto font-normal text-[16px] text-[#000000] mt-1'>10:00</span>

          </div>
        </div>
      </section>
      {/* END VERSION DESKTOP */}

      {/* VERSION MOBILE */}
      <section className='lg:hidden'>
        <NavOfflineUser
          colorSwey='colorNavMobile'
          colorInputMobile='input'
          colorNavMobile='colorNavMobile'
          colorLogin='#272D4E'
          bgCoverMobile='bgCoverMobile'
        />

        <div className='flex justify-between items-center pl-2 pr-2 w-[90%] ml-auto mr-auto'>
          <div>
            <img src={iconArrowLeft} alt="Icon Arrow Left" className='w-[23px] h-[26px]' />
          </div>
          <h2 className='text-[#40BFFF] raleway font-normal text-[32px] mt-[5px]'>Make Payment</h2>
          <div>
            <img src={iconClose} alt="Icon Close" className='w-[26px] h-[29px]' />
          </div>
        </div>

        <div className='flex mt-[5px] justify-center items-center'>
          <div className='bg-[#40BFFF] rounded-full w-[37px] h-[36px] text-center flex items-center justify-center'>
            <h3 className='text-white text-[18px] font-bold items-center justify-center mb-0'>1</h3>
          </div>
          <hr className='bg-black w-2' />
          <div className='bg-[#40BFFF] rounded-full w-[37px] h-[36px] text-center flex items-center justify-center'>
            <h3 className='text-white text-[18px] font-bold mb-0'>2</h3>
          </div>
          <hr className='bg-black w-2' />
          <div className='bg-[#40BFFF] rounded-full w-[37px] h-[36px] text-center flex items-center justify-center'>
            <h3 className='text-white text-[18px] font-bold mb-0'>3</h3>
          </div>
          <hr className='bg-black w-2' />
          <div className='bg-[#DFDEDE] rounded-full w-[37px] h-[36px] text-center flex items-center justify-center'>
            <h3 className='text-white text-[18px] font-bold mb-0'>4</h3>
          </div>
        </div>

        <div className='flex justify-center w-[90%] ml-auto mr-auto text-center mt-[22px]'>
          <NavLink
            to='/paymentcard'
            className='sans font-bold text-[13px] text-[#2B2B2C] border-b sans w-1/2 pb-2 no-underline'
          >
            <h2 className='sans font-bold text-[13px] text-[#2B2B2C]'>Single Card</h2>
          </NavLink>
          <NavLink
            to='/paymentcardsplit'
            className='border-b-2 border-[#0079FF] sans font-bold text-[13px] text-[#808080] sans w-1/2 pb-2 no-underline'>
            <h2
              className='sans font-medium text-[13px] text-[#2B2B2C]'
            >
              Split Payment
            </h2>
          </NavLink>
        </div>

        <div className='flex justify-center items-center'>
          <div className='mt-[37px]'>
            <input
              type="text"
              placeholder='Name on Card'
              className='w-[80%] h-[50px] block m-auto rounded-md placeholder:pl-2 bg-[#F6F6F6] placeholder:text-[16px] outline-[#40BFFF] pl-2 text-[#272D4E] roboto font-normal text-[16px]'
            />
            <div className='flex justify-center pl-2 pr-2 mt-[26px]'>
              <input
                type="number"
                placeholder='Expiry'
                className='w-[35%] h-[50px] block m-auto rounded-md placeholder:pl-2 bg-[#F6F6F6] placeholder:text-[16px] outline-[#40BFFF] pl-2 text-[#272D4E] roboto font-normal text-[16px]'
              />
              <input
                type="number"
                placeholder='CVV'
                className='w-[35%] h-[50px] block m-auto rounded-md placeholder:pl-2 bg-[#F6F6F6] placeholder:text-[16px] outline-[#40BFFF] pl-2 text-[#272D4E] roboto font-normal text-[16px]'
              />
            </div>
            <input
              type="number"
              placeholder='Card Number'
              className='w-[80%] h-[50px] block ml-auto mr-auto mt-[36px] rounded-md placeholder:pl-2 bg-[#F6F6F6] placeholder:text-[16px] outline-[#40BFFF] pl-2 text-[#272D4E] roboto font-normal text-[16px]'
            />

            <div className='flex mt-[27px] justify-center'>
              <input
                type="checkbox"
                name=""
                id=""
                defaultChecked
              />
              <h3 className='sans font-normal text-[14px] text-[#999999] mb-0 pl-[10px]'>Save this credit card</h3>
            </div>
          </div>
        </div>

        <div className='flex items-center h-[76px] mt-[35px] w-[70%] ml-auto mr-auto'>
          <div className='bgLoadingBlueCard h-full flex items-center justify-center w-1/2 rounded-l-xl relative'>
            <h2 className='sans font-medium text-[14px] mb-0 text-[#ffffff]'>SWEY Coin Wallet</h2>
            <img src={iconLocationMarket} alt="icon Location" className='absolute -top-5 -right-2' />
          </div>
          <div className='h-[76px] flex items-center justify-center text-center bg-[#F5F5F5] w-1/2 rounded-r-xl'>
            <span className='sans font-medium text-[12px] text-[#000000] text-center'>1000 Coin ($5.85)</span>
          </div>
        </div>

        <NavLink
          to='/paymentcardthree'
          className='bg-[#33A0FF] mt-[30px] w-[80%] h-[65px] ml-auto mr-auto rounded-lg sans font-extrabold text-[20px] text-white no-underline flex items-center justify-center'
        >
          Confirm
        </NavLink>
        <span className='block text-center text-[16px] text-black'>10:00</span>

      </section>
    </>
  )
}

export default CheckoutPaymentCardSwey