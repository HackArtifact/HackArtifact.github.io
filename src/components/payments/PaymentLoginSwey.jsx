import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

//usecontext
import { ProductContext } from '../../context/ProductContext';

//components
import NavOfflineUser from '../utilities/NavOfflineUser';

//files
import iconArrowLeft from '../../assets/icons/iconArrowLeft.svg';
import iconClose from '../../assets/icons/iconClose.svg';
import { Link } from 'react-router-dom';

const CheckoutPaymentLoginSwey = () => {

  const {modalSplit1, setModalSplit1, modalSplit2 ,setModalSplit2 ,modalSplit3, setModalSplit3  } = useContext(ProductContext);

  return (
    <>
      {/* VERSION DESKTOP */}
      <section className='bg-white w-[60%]  ml-auto mr-auto shadow-2xl mt-[42px] hidden lg:block rounded-xl pl-4 pr-4 pb-4'>
      <div className='flex justify-between items-center pl-2 pr-2 pt-[43px]'>
          <div>
            <img
              src={iconArrowLeft}
              alt="Icon Arrow Left"
              className='w-[23px] h-[26px] cursor-pointer'
              onClick={() => {
                setModalSplit2(!modalSplit2);
                setModalSplit1(!modalSplit1);
              }}
            />
          </div>
          <h2 className='text-[#40BFFF] raleway font-normal text-[32px] mt-[5px]'>Make Payment</h2>
          <div>
            <img
              src={iconClose}
              alt="Icon Close"
              className='w-[26px] h-[29px] cursor-pointer'
              onClick={() => {
                setModalSplit2(!modalSplit2);
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
          <div className='bg-[#DFDEDE] rounded-full w-[37px] h-[36px] text-center flex items-center justify-center'>
            <h3 className='text-white text-[18px] font-bold mb-0'>3</h3>
          </div>
            <hr className='bg-black w-2' />
          <div className='bg-[#DFDEDE] rounded-full w-[37px] h-[36px] text-center flex items-center justify-center'>
            <h3 className='text-white text-[18px] font-bold mb-0'>4</h3>
          </div>
        </div>

        <div className='w-[50%] ml-auto mr-auto mt-[60px] shadow-2xl border-2 p-4 rounded-2xl'>
          <input
            type="email"
            placeholder='Email'
            className='w-[90%] h-[50px] block m-auto rounded-md placeholder:pl-2 bg-[#F6F6F6] placeholder:text-[16px] outline-[#40BFFF] pl-2 text-[#272D4E] roboto font-normal text-[16px]'
          />
          <span className='roboto font-normal text-[18px] text-[#94A2B3] block text-center mt-[7px] mb-[7px]'>or</span>
          <input
            type="number"
            placeholder='Number'
            className='w-[90%] h-[50px] block m-auto rounded-md placeholder:pl-2 bg-[#F6F6F6] placeholder:text-[16px] outline-[#40BFFF] pl-2 text-[#272D4E] roboto font-normal text-[16px]'
          />
          <span className='roboto font-normal text-[18px] text-[#94A2B3] block text-center mt-[7px] mb-[7px]'>or</span>
          <input
            type="text"
            placeholder='Swéy Account'
            className='w-[90%] h-[50px] block m-auto rounded-md placeholder:pl-2 bg-[#F6F6F6] placeholder:text-[16px] outline-[#40BFFF] pl-2 text-[#272D4E] roboto font-normal text-[16px]'
          />
          <a href="#" className='sans font-medium text-[12px] text-[#0079FF] block text-center no-underline mt-[7px] mb-[7px]'>Copy payment link</a>
        
        <div className='w-[90%] ml-auto mr-auto h-[76px]'>
          <button 
            type='button' 
            className='bgLoadingBlueCard h-full mt-[13px] w-full rounded-xl text-white font-bold roboto'
            onClick={() => {
              setModalSplit2(!modalSplit2);
              setModalSplit3(!modalSplit3);
            }}
          >
            Share
          </button>
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
          <div className='bg-[#DFDEDE] rounded-full w-[37px] h-[36px] text-center flex items-center justify-center'>
            <h3 className='text-white text-[18px] font-bold mb-0'>3</h3>
          </div>
            <hr className='bg-black w-2' />
          <div className='bg-[#DFDEDE] rounded-full w-[37px] h-[36px] text-center flex items-center justify-center'>
            <h3 className='text-white text-[18px] font-bold mb-0'>4</h3>
          </div>
        </div>
        
        <div className='w-[90%] ml-auto mr-auto mt-[60px] shadow-2xl border-2 p-4 rounded-2xl'>
          <input
            type="email"
            placeholder='Email'
            className='w-[100%] h-[50px] block m-auto rounded-md placeholder:pl-2 bg-[#F6F6F6] placeholder:text-[16px] outline-[#40BFFF] pl-2 text-[#272D4E] roboto font-normal text-[16px]'
          />
          <span className='roboto font-normal text-[18px] text-[#94A2B3] block text-center mt-[7px] mb-[7px]'>or</span>
          <input
            type="number"
            placeholder='Number'
            className='w-[100%] h-[50px] block m-auto rounded-md placeholder:pl-2 bg-[#F6F6F6] placeholder:text-[16px] outline-[#40BFFF] pl-2 text-[#272D4E] roboto font-normal text-[16px]'
          />
          <span className='roboto font-normal text-[18px] text-[#94A2B3] block text-center mt-[7px] mb-[7px]'>or</span>
          <input
            type="text"
            placeholder='Swéy Account'
            className='w-[100%] h-[50px] block m-auto rounded-md placeholder:pl-2 bg-[#F6F6F6] placeholder:text-[16px] outline-[#40BFFF] pl-2 text-[#272D4E] roboto font-normal text-[16px]'
          />
          <a href="#" className='sans font-medium text-[12px] text-[#0079FF] block text-center no-underline mt-[7px] mb-[7px]'>Copy payment link</a>
        
        <div className='w-[70%] mt-[23px] ml-auto mr-auto h-[53px]'>
          <NavLink
            className='bgLoadingBlueCard h-full w-full rounded-lg text-white font-bold roboto no-underline flex items-center justify-center'
          >
            Share
          </NavLink>
        </div>
        </div>
        
        <NavLink
            to='/paymentcardswey'
            className='bgLoadingBlueCard h-[70px] w-[80%] ml-auto mr-auto mt-[58px] rounded-lg text-white font-bold roboto no-underline flex items-center justify-center'
          >
            Confirm
          </NavLink>
      </section>
    </>
  )
}

export default CheckoutPaymentLoginSwey