import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

//usecontext
import { ProductContext } from '../../context/ProductContext';

//components
import NavOfflineUser from '../utilities/NavOfflineUser';

//files
import iconArrowLeft from '../../assets/icons/iconArrowLeft.svg';
import iconClose from '../../assets/icons/iconClose.svg';
import logoSweyGreen from '../../assets/icons/logoSweyGreen.svg';
import logoSweyGray from '../../assets/icons/logoSweyGray.svg';
import iconLoading from '../../assets/icons/iconLoading.svg';

const CheckoutPaymentCard3 = () => {

  const {modalSplit3, setModalSplit3,  modalSplit4, setModalSplit4, modalSplit5, setModalSplit5 } = useContext(ProductContext);

  return (
    <>
      {/* VERSION DESKTOP */}
      <section className='bg-white w-[60%]  ml-auto mr-auto shadow-2xl mt-[42px] hidden lg:block rounded-xl pl-4 pr-4 pb-4 pt-4'>

        <div className='flex justify-between items-center pl-2 pr-2'>
          <div>
            <img 
              src={iconArrowLeft} 
              alt="Icon Arrow Left" 
              className='w-[23px] h-[26px] cursor-pointer' 
              onClick={() => {
                setModalSplit4(!modalSplit4);
                setModalSplit3(!modalSplit3);
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
                setModalSplit4(!modalSplit4)
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
          <div className='bg-[#40BFFF] rounded-full w-[37px] h-[36px] text-center flex items-center justify-center'>
            <h3 className='text-white text-[18px] font-bold mb-0'>4</h3>
          </div>
        </div>

        <div className='mt-[46px]'>
          <div className='mt-[25px] w-[70%] ml-auto mr-auto'>
            <h2 className='sans font-bold text-[13px] text-[#999999] lg:pl-6 xl:pl-10'>Card 1</h2>
            <div className='flex justify-between items-center w-[90%] m-auto'>
              <div className='w-[60%] h-[84px] bg-[#F5F5F5] rounded-xl'>
                <h2 className='text-[14px] font-black pt-[20px] pl-[26px] mb-0'>Chase Sapphire Visa</h2>
                <span className='block text-right text-[14px] text-black font-bold pr-2'>...2009</span>
              </div>
              <div className='w-[40%] flex justify-center'>
                <img src={logoSweyGreen} alt="Logo Swey Gray" />
              </div>
            </div>
          </div>

          <div className='mt-[25px] w-[70%] ml-auto mr-auto'>
            <h2 className='sans font-bold text-[13px] text-[#999999] lg:pl-6 xl:pl-10'>Card 2</h2>
            <div className='flex justify-between items-center w-[90%] m-auto'>
              <div className='w-[60%] h-[84px] bg-[#F5F5F5] rounded-xl'>
                <h2 className='text-[14px] font-black pt-[20px] pl-[26px] mb-0'>Chase Sapphire Visa</h2>
                <span className='block text-right text-[14px] text-black font-bold pr-2'>...2009</span>
              </div>
              <div className='w-[40%] flex justify-center'>
                <img src={logoSweyGray} alt="Logo Swey Gray" className='ml-10' />
              </div>
              <img src={iconLoading} alt="Icon Loading" />
            </div>
          </div>
        </div>

        <button
          type='button'
          className='bg-[#33A0FF] mt-[58px] w-[30%] h-[70px] block ml-auto mr-auto border-2 rounded-xl sans font-extrabold text-[24px] text-white'
          onClick={() => {
            setModalSplit4(!modalSplit4);
            setModalSplit5(!modalSplit5);
          }}
        >
          Complete
        </button>
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
          <div className='bg-[#40BFFF] rounded-full w-[37px] h-[36px] text-center flex items-center justify-center'>
            <h3 className='text-white text-[18px] font-bold mb-0'>4</h3>
          </div>
        </div>

        <div className='flex justify-center w-[90%] ml-auto mr-auto text-center mt-[22px]'>
          <NavLink
            to='/paymentcard'
            className='sans font-bold text-[13px] text-[#2B2B2C] sans w-1/2 border-b pb-2 no-underline'
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

          <div className='mt-[25px] w-[90%] ml-auto mr-auto'>
            <h2 className='sans font-bold text-[13px] text-[#999999] pl-6'>Card 1</h2>
            <div className='flex justify-between items-center w-[90%] m-auto'>
              <div className='w-[60%] h-[84px] bg-[#F5F5F5] rounded-xl'>
                <h2 className='text-[14px] font-black pt-[20px] pl-[26px] mb-0'>Chase Sapphire Visa</h2>
                <span className='block text-right text-[14px] text-black font-bold pr-2'>...2009</span>
              </div>
              <div className='w-[40%] flex justify-center'>
                <img src={logoSweyGreen} alt="Logo Swey Gray" />
              </div>
            </div>
          </div>

          <div className='mt-[25px] w-[90%] ml-auto mr-auto'>
            <h2 className='sans font-bold text-[13px] text-[#999999] pl-6'>Card 2</h2>
            <div className='flex justify-between items-center w-[90%] m-auto'>
              <div className='w-[60%] h-[84px] bg-[#F5F5F5] rounded-xl'>
                <h2 className='text-[14px] font-black pt-[20px] pl-[26px] mb-0'>Chase Sapphire Visa</h2>
                <span className='block text-right text-[14px] text-black font-bold pr-2'>...2009</span>
              </div>
              <div className='w-[40%] flex justify-center'>
                <img src={logoSweyGray} alt="Logo Swey Gray" className='ml-10' />
              </div>
              <img src={iconLoading} alt="Icon Loading" />
            </div>
          </div>

          <NavLink
            to='/paymentsweysuccess'
            className='bg-[#33A0FF] mt-[158px] w-[90%] h-[65px] ml-auto mr-auto border-2 rounded-xl sans font-extrabold text-[24px] text-white no-underline flex items-center justify-center'
          >
            Confirm
          </NavLink>
          <span className='block text-[#000000] text-center text-[16px] roboto'>10:00</span>

      </section>
    </>
  )
}

export default CheckoutPaymentCard3