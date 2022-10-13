import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

//styles
import '../../style/style.css';

//usecontext
import { ProductContext } from '../../context/ProductContext';

//components
import NavOfflineUser from '../utilities/NavOfflineUser';

//files
import creditCardExample from '../../assets/images/creditCardExample.png';
import iconArrowLeft from '../../assets/icons/iconArrowLeft.svg';
import iconClose from '../../assets/icons/iconClose.svg';
import iconMenu from '../../assets/icons/iconMenu.svg';
import iconMenuDark from '../../assets/icons/iconMenuDark.svg';
import iconLocationMarket from '../../assets/icons/iconLocationMarket.svg';

const CheckoutPaymentCard = () => {
  const [menu, setMenu] = useState(false);
  const IconMenu = menu ? iconMenuDark : iconMenu;
  const {
    modal1, 
    modal2, 
    modal3,
    modalSplit1, 
    setModal1, 
    setModal2, 
    setModal3,
    setModalSplit1, 
  } = useContext(ProductContext);

  return (
    <>
      {/* VERSION DESKTOP */}
      <section className='bg-white w-[60%]  ml-auto mr-auto shadow-2xl mt-[42px] hidden lg:block rounded-xl pl-4 pr-4'>
        <div className='flex justify-between items-center pl-2 pr-2 pt-[43px]'>
          <div>
            <img
              src={iconArrowLeft}
              alt="Icon Arrow Left"
              className='w-[23px] h-[26px] cursor-pointer'
              onClick={() => {
                setModal2(!modal2);
                setModal1(!modal1)
              }}
            />
          </div>
          <h2 className='text-[#40BFFF] raleway font-normal text-[32px] mt-[5px]'>Make Payment</h2>
          <div>
            <img
              src={iconClose}
              alt="Icon Close"
              className='w-[26px] h-[29px] cursor-pointer'
              onClick={() => setModal2(!modal2)}
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
        </div>

        <div className='mt-[22px] pb-2'>
          <div className='flex justify-center w-[90%] ml-auto mr-auto text-center'>
            <NavLink
              to='/paymentcard'
              className='border-b-2 border-[#0079FF] sans font-bold text-[13px] text-[#2B2B2C] sans w-1/3 pb-2 no-underline'
            >
              <h2 className='sans font-bold text-[13px] text-[#2B2B2C]'>Single Card</h2>
            </NavLink>
            <NavLink
              className='sans font-bold text-[13px] text-[#808080] border-b sans w-1/3 pb-2 no-underline'>
              <h2 
                className='sans font-medium text-[13px] text-[#2B2B2C]'
                onClick={() => {
                  setModal2(!modal2);
                  setModalSplit1(!modalSplit1);
                }}
              >
                Split Pay
              </h2>
            </NavLink>
          </div>

          <div className='flex justify-center items-center'>
          <div>
            <img
              src={creditCardExample}
              alt="Credit Cart Example"
              className='hidden lg:block'
            />
          </div>
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
          </div>
          </div>

          <div className='flex justify-around gap-4 items-center mt-[29px] w-[70%] ml-auto mr-auto'>
            <div className='flex items-center h-[76px] w-1/2'>
              <div className='bgLoadingBlueCard h-full flex items-center justify-center w-1/2 rounded-l-xl relative'>
                <h2 className='sans font-medium text-[14px] mb-0 text-[#ffffff]'>SWEY Coin Wallet</h2>
                <img src={iconLocationMarket} alt="icon Location" className='absolute -top-5 -right-2' />
              </div>
              <div className='h-[76px] flex items-center justify-center text-center bg-[#F5F5F5] w-1/2 rounded-r-xl'><span className='sans font-medium text-[12px] text-[#000000] text-center'>1000 Coin ($5.85)</span></div>  
            </div>
            <div className='flex w-1/2'>
            <input
              type="checkbox"
              name=""
              id=""
              defaultChecked
            />
            <h3 className='sans font-normal text-[14px] text-[#999999] mb-0 pl-[10px]'>Save this credit card</h3>
            </div>
          </div>

          <NavLink
            onClick={() => {
              setModal2(!modal2);
              setModal3(!modal3);
            }}
            className='bg-[#33A0FF] mt-[50px] mb-2 w-[30%] h-[50px] ml-auto mr-auto rounded-lg sans font-extrabold text-[20px] text-white no-underline flex items-center justify-center'
          >
            Confirm
          </NavLink>
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
        </div>

        <div className='flex justify-center w-[90%] ml-auto mr-auto text-center mt-[22px]'>
            <NavLink
              to='/paymentcard'
              className='border-b-2 border-[#0079FF] sans font-bold text-[13px] text-[#2B2B2C] sans w-1/2 pb-2 no-underline'
            >
              <h2 className='sans font-bold text-[13px] text-[#2B2B2C]'>Single Card</h2>
            </NavLink>
            <NavLink
              to='/paymentcardsplit'
              className='border-b sans font-bold text-[13px] text-[#808080] sans w-1/3 pb-2 no-underline'>
              <h2
                className='sans font-medium text-[13px] text-[#2B2B2C]'
              >
                Split Pay
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
          </div>
          </div>

          <div className='flex w-[90%] ml-auto mr-auto justify-center mt-[26px]'>
            <input
              type="checkbox"
              name=""
              id=""
              defaultChecked
            />
            <h3 className='sans font-normal text-[14px] text-[#999999] mb-0 pl-[10px]'>Save this credit card</h3>
            </div>

            <NavLink
            to='/paymentsuccess'
            className='bg-[#33A0FF] mt-[190px] mb-2 w-[90%] h-[50px] ml-auto mr-auto rounded-lg sans font-extrabold text-[20px] text-white no-underline flex items-center justify-center'
          >
            Confirm
          </NavLink>

      </section>
    </>
  )
}

export default CheckoutPaymentCard;