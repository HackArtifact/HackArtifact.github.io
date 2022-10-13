import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom';

//usecontext
import { ProductContext } from '../../context/ProductContext';

//components
import NavOfflineUser from '../utilities/NavOfflineUser';

//FILES
import iconMenu from '../../assets/icons/iconMenu.svg';
import logoSwey from '../../assets/icons/logoSwey.svg';
import iconMenuDark from '../../assets/icons/iconMenuDark.svg';
import iconSearch from '../../assets/icons/iconSearch.svg';
import iconArrowLeft from '../../assets/icons/iconArrowLeft.svg';
import iconClose from '../../assets/icons/iconClose.svg';
import iconVerifiedHome from '../../assets/icons/iconVerifiedHome.svg';


const PaymentCardSplit = () => {
  const [menu, setMenu] = useState(false);
  const IconMenu = menu ? iconMenuDark : iconMenu;
  const { 
    modal1,
    setModal1,
    modal2, 
    setModal2, 
    modalSplit1, 
    setModalSplit1,
    modalSplit2,
    setModalSplit2, 
  } = useContext(ProductContext);

  return (
    <>
      {/* VERSION DESKTOP */}
      <section className='bg-white w-[60%] ml-auto mr-auto mt-[42px] shadow-2xl rounded-xl pl-4 pr-4 pb-4 hidden lg:block'>
        <div className='flex justify-between items-center pl-2 pr-2 pt-2'>
          <div>
            <img 
              src={iconArrowLeft} 
              alt="Icon Arrow Left" 
              className='w-[23px] h-[26px] cursor-pointer' 
              onClick={() => {
                setModalSplit1(!modalSplit1);
                setModal1(!modal1);
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
                setModalSplit1(!modalSplit1);
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


      <div className='mt-[38px]'>
      <div className='flex justify-center w-[90%] ml-auto mr-auto text-center'>
        <NavLink 
          className='sans font-bold text-[13px] text-[#808080] sans w-1/3 border-b pb-2 no-underline'>
          <h2 
            className='sans font-bold text-[13px] text-[#808080]'
            onClick={() => {
              setModalSplit1(!modalSplit1);
              setModal2(!modal2);
            }}
          >
            Single Card
          </h2>
        </NavLink>
        <NavLink to='/paymentcardsplit' className='border-b-2 border-[#0079FF] sans font-bold text-[13px] text-[#2B2B2C] sans w-1/3 pb-2 no-underline'><h2 className='sans font-bold text-[13px] text-[#2B2B2C]'>Split Pay</h2></NavLink>
      </div>

      <div className='w-[40%] ml-auto mr-auto mt-[20px]'>
        <h2 className='sans font-medium text-[14px] text-[#000000]'>Total amount</h2>
        <div className='bg-[#F5F5F5] h-[97px] flex items-center justify-center mt-[18px]'>
          <span className='sans font-bold  text-[22px] text-[#000000]'>$144,15 + <span className='sans font-bold text-[22px] text-[#0079FF]'>$15</span> = $165</span>
        </div>
          <hr className='border-1' />
      </div>

      <div className='flex justify-center items-center gap-2 w-[70%] ml-auto mr-auto'>
        <div className="item1 w-1/2 flex flex-col gap-5">
          <div>
            <h2 className='roboto font-normal text-[16px] text-[#999999] pl-2 mb-0'>Card 1</h2>
            <div className='bg-[#F6F6F6] h-[54px] flex items-center rounded-xl'>
              <h3 className='sans font-medium text-[28px] text-[#0079FF] pl-2 mb-0'>$150</h3>
            </div>
          </div>
          <div className='mt-3'>
            <h2 className='roboto font-normal text-[16px] text-[#999999] pl-2 mb-0'>Card 2</h2>
            <div className='bg-[#F6F6F6] h-[54px] flex items-center rounded-xl'>
              <h3 className='sans font-medium text-[28px] text-[#B229F3] pl-2 mb-0'>$15</h3>
            </div>
          </div>
        </div>
        <div className="item2 w-1/2">
          <div className='flex justify-between items-center'>
            <div>
              <h2 className='sans font-bold text-[15px] text-[#000000] mb-0'>Your Card</h2>
            </div>
            <div>
              <a href="#" className='sans font-medium text-[12px] text-[#0079FF] no-underline'>+ Add Card</a>
            </div>
          </div>
          <span className='roboto block text-normal text-[14px] text-[#999999]'>Click and drag to adjust payment ratio</span>

          <div className='border-2 rounded-xl'>
            <div className='bgLoadingBlueCard h-[84px] flex items-center rounded-l-xl w-1/2'>
              <img src={iconVerifiedHome} alt="Icon Verified Home" className='pl-2 w-[32px] h-[32px]' />
            </div>
          </div>
          <span className='sans font-medium text-[12px] text-[#00AD23] block text-center'>(49,49%)</span>
          <hr className='border-1' />

          <div className='border-2 rounded-xl'>
            <div className='bgLoadingPurpleCard h-[84px] flex items-center rounded-l-xl w-1/2'>
              <img src={iconVerifiedHome} alt="Icon Verified Home" className='pl-2 w-[32px] h-[32px]' />
            </div>
          </div>
          <span className='sans font-medium text-[12px] text-[#00AD23] block text-center' >(50,51%)</span>
          
        </div>
      </div>
      
      <button 
        type='button' 
        className='bg-[#33A0FF] mt-[20px] w-[30%] h-[50px] block ml-auto mr-auto rounded-lg sans font-extrabold text-[20px] text-white'
        onClick={() => {
          setModalSplit1(!modalSplit1);
          setModalSplit2(!modalSplit2);
        }}
      >
        Confirm
      </button>

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

        <div className='mt-[38px]'>
          <div className='flex justify-center w-[90%] ml-auto mr-auto text-center'>
            <NavLink
              to='/paymentcard'
              className='sans font-bold text-[13px] text-[#808080] border-b sans w-1/2 pb-2 no-underline'>
              <h2
                className='sans font-bold text-[13px] text-[#808080] mb-0'
              >
                Single Card
              </h2>
            </NavLink>
            <NavLink to='/paymentcardsplit' className='border-b-2 border-[#0079FF] sans font-bold text-[13px] text-[#2B2B2C] sans w-1/2 pb-2 no-underline'><h2 className='sans font-bold text-[13px] text-[#2B2B2C]'>Split Payment</h2></NavLink>
          </div>
        </div>    

        <div className="item2 w-[90%] ml-auto mr-auto mt-2">
          <div className='flex justify-between items-center'>
            <div>
              <h2 className='sans font-bold text-[15px] text-[#000000] mb-0'>Your Card</h2>
            </div>
            <div>
              <a href="#" className='sans font-medium text-[12px] text-[#0079FF] no-underline'>+ Add Card</a>
            </div>
          </div>
            <h2 className='roboto font-normal text-[16px] text-[#999999] pl-2 mb-0 mt-2'>Card 1</h2>
            <div className='w-[30%] h-[54px] ml-2'>
              <input type="number" placeholder='amount' className='w-full h-full bg-[#F6F6F6] outline-none placeholder:text-center rounded-xl' />
            </div>

          <div className='border-2 rounded-xl mt-2'>
            <div className='bgLoadingBlueCard h-[84px] flex items-center rounded-l-xl w-1/2'>
              <img src={iconVerifiedHome} alt="Icon Verified Home" className='pl-2 w-[32px] h-[32px]' />
            </div>
          </div>
          <span className='sans font-medium text-[12px] text-[#00AD23] block text-center'>Paying $197.50 (49,49%)</span>
          <hr className='border-1 w-[60%] ml-auto mr-auto' />

          <h2 className='roboto font-normal text-[16px] text-[#999999] pl-2 mb-0'>Card 2</h2>
          <div className='w-[30%] h-[54px] ml-2'>
            <input type="number" placeholder='amount' className='w-full h-full bg-[#F6F6F6] outline-none placeholder:text-center rounded-xl' />
          </div>
          <div className='border-2 rounded-xl mt-2'>
            <div className='bgLoadingBlueCard h-[84px] flex items-center rounded-l-xl w-1/2'>
              <img src={iconVerifiedHome} alt="Icon Verified Home" className='pl-2 w-[32px] h-[32px]' />
            </div>
          </div>
          <span className='sans font-medium text-[12px] text-[#00AD23] block text-center' >Paying $201.50 (50,51%)</span>
        </div>

        <NavLink
          to='/paymentloginswey'
          className='bg-[#33A0FF] mt-[40px] w-[90%] h-[50px] ml-auto mr-auto rounded-lg sans font-extrabold text-[20px] text-white no-underline flex items-center justify-center'
        >
          Confirm
        </NavLink>

      </section>
    </>
  )
}

export default PaymentCardSplit;