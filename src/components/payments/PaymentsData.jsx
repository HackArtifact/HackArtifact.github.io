import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

//components
import NavOfflineUser from '../utilities/NavOfflineUser';

//styles
import '../../style/style.css';

//usecontext
import { ProductContext } from '../../context/ProductContext';

//files
import iconArrowLeft from '../../assets/icons/iconArrowLeft.svg';
import iconClose from '../../assets/icons/iconClose.svg';
import iconCreditCard from '../../assets/icons/iconCreditCard.svg';
import iconPaypal from '../../assets/icons/iconPaypal.svg';
import Lock from '../../assets/icons/Lock.svg';

const CheckoutPaymentsData = () => {

  const {
    modal1,
    modal2,
    setModal1,
    setModal2 
  } = useContext(ProductContext);

  return (
    <>
      <section className='h-auto w-screen '>

        {/* VERSION DESKTOP */}
        <section className='bg-white w-[60%] ml-auto mr-auto shadow-2xl mt-[42px] hidden lg:block rounded-xl'>
          <div className='flex justify-between items-center pl-2 pr-2 mt-[50px] lg:pl-4 lg:pr-4 pt-4'>
            <div>
              <img
                src={iconArrowLeft}
                alt="Icon Arrow Left"
                className='cursor-pointer'
                onClick={() => setModal1(!modal1)}
              />
            </div>
            <h2 className='text-[#40BFFF] raleway font-semibold text-[32px]'>Make Payment</h2>
            <div>
              <img
                src={iconClose}
                alt="Icon Close"
                className='cursor-pointer'
                onClick={() => setModal1(!modal1)}
              />
            </div>
          </div>

          <div className='flex mt-[5px] justify-center items-center'>
            <div className='bg-[#40BFFF] rounded-full w-[37px] h-[36px] text-center flex items-center justify-center'>
              <h3 className='text-white text-[18px] font-bold items-center justify-center mb-0'>1</h3>
            </div>
            <hr className='bg-black w-2' />
            <div className='bg-[#DFDEDE] rounded-full w-[37px] h-[36px] text-center flex items-center justify-center'>
              <h3 className='text-white text-[18px] font-bold mb-0'>2</h3>
            </div>
            <hr className='bg-black w-2' />
            <div className='bg-[#DFDEDE] rounded-full w-[37px] h-[36px] text-center flex items-center justify-center'>
              <h3 className='text-white text-[18px] font-bold mb-0'>3</h3>
            </div>
          </div>

          {/* **************************** */}
          <div className='mt-[30px] w-[90%] h-auto ml-auto mr-auto flex flex-col gap-2'>
            <div className='flex justify-center gap-4 w-full'>

              <div className='w-1/2'>
                <input
                  type="text"
                  placeholder='First Name'
                  className='outline-[#40BFFF] text-[#272D4E] rounded-xl h-[49px] w-full placeholder:pl-2 bg-[#F6F6F6] pl-2 roboto placeholder:roboto placeholder:text-[16px] text-[16px] mt-[14px]'
                />
                <input
                  type="email"
                  placeholder='Email Address'
                  className='outline-[#40BFFF] text-[#272D4E] rounded-xl h-[49px] w-full placeholder:pl-2 bg-[#F6F6F6] pl-2 roboto placeholder:roboto placeholder:text-[16px] text-[16px] mt-[14px]'
                />
                <div className='mt-[20px] text-center w-[90%] ml-auto mr-auto'>
                  <div className='flex items-center justify-start gap-2'>
                    <h2 className='sans font-semibold xl:text-[18px] lg:text-[15px] text-[#40BFFF] mb-0'>Select Method Of Payment</h2>
                    <img src={Lock} alt="icon Lock" />
                  </div>
                  <span className='roboto font-normal text-[14px] text-[#94A2B3] text-left block'>Encrypted by Swéy</span>
                  <div className='flex flex-col gap-2'>
                    <div className='inputfirst flex justify-between items-center bg-[#EBF0FF] h-[56px] pl-2 pr-2'>
                      <div className='flex items-center'>
                        <img
                          src={iconCreditCard}
                          alt="Icon Credi Card"
                        />
                        <h3 className='pl-2 text-[12px] font-bold mb-0'>Credit Card Or Debit</h3>
                      </div>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        defaultChecked />
                    </div>

                    <div className='inputsecond flex justify-between pl-2 pr-2'>
                      <div className='flex items-center'>
                        <img
                          src={iconPaypal}
                          alt="Icon Paypal"
                        />
                        <h3 className='pl-2 text-[12px] font-bold mb-0'>Paypal</h3>
                      </div>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                </div>

              </div>

              <div className='w-1/2'>
                <input
                  type="text"
                  placeholder='Last Name'
                  className='outline-[#40BFFF] text-[#272D4E] rounded-xl h-[49px] w-full placeholder:pl-2 bg-[#F6F6F6] pl-2 roboto placeholder:roboto placeholder:text-[16px] text-[16px] mt-[14px]'
                />
                <h2 className='roboto font-normal text-[16px] text-[#999999] mb-0 pl-4 mt-[18px]'>Address for Delivery</h2>
                <input
                  type="text"
                  placeholder='Street & Street number'
                  className='outline-[#40BFFF] text-[#272D4E] rounded-xl h-[49px] w-full placeholder:pl-2 bg-[#F6F6F6] pl-2 roboto placeholder:roboto placeholder:text-[16px] text-[16px] border-b-2'
                />
                <input
                  type="text"
                  placeholder='Neighborhood'
                  className='outline-[#40BFFF] text-[#272D4E] rounded-xl h-[49px] w-full placeholder:pl-2 bg-[#F6F6F6] pl-2 roboto placeholder:roboto placeholder:text-[16px] text-[16px] border-b-2'
                />
                <input
                  type="text"
                  placeholder='City'
                  className='outline-[#40BFFF] text-[#272D4E] rounded-xl h-[49px] w-full placeholder:pl-2 bg-[#F6F6F6] pl-2 roboto placeholder:roboto placeholder:text-[16px] text-[16px] border-b-2'
                />
                <input
                  ype="text"
                  placeholder='Province'
                  className='outline-[#40BFFF] text-[#272D4E] rounded-xl h-[49px] w-full placeholder:pl-2 bg-[#F6F6F6] pl-2 roboto placeholder:roboto placeholder:text-[16px] text-[16px] border-b-2'
                />
                <input
                  type="number"
                  placeholder='Mobile Phone'
                  className='outline-[#40BFFF] text-[#272D4E] rounded-xl h-[49px] w-full placeholder:pl-2 bg-[#F6F6F6] pl-2 roboto placeholder:roboto placeholder:text-[16px] text-[16px] border-b-2 mt-[16px]'
                />
              </div>
            </div>
            <NavLink
              onClick={() => {
                setModal1(!modal1);
                setModal2(!modal2);
              }}
              className='mt-[36px] mb-4 w-[30%] h-[60px] ml-auto mr-auto  btnGradientRight rounded-md text-white font-bold flex justify-center items-center no-underline'
            >Go to Payment
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
            <div className='bg-[#DFDEDE] rounded-full w-[37px] h-[36px] text-center flex items-center justify-center'>
              <h3 className='text-white text-[18px] font-bold mb-0'>2</h3>
            </div>
            <hr className='bg-black w-2' />
            <div className='bg-[#DFDEDE] rounded-full w-[37px] h-[36px] text-center flex items-center justify-center'>
            <h3 className='text-white text-[18px] font-bold mb-0'>3</h3>
            </div>
          </div>

          <div className='w-[90%] ml-auto mr-auto mt-[30px]'>
            <input 
              type="text"
              placeholder='First Name'
              className='outline-gray-500 rounded-xl h-[49px] w-full placeholder:pl-2 bg-[#F6F6F6] pl-2 roboto placeholder:roboto placeholder:text-[16px] text-[16px] mt-[14px]'
            />
            <input 
              type="text"
              placeholder='Last Name'
              className='outline-gray-500 rounded-xl h-[49px] w-full placeholder:pl-2 bg-[#F6F6F6] pl-2 roboto placeholder:roboto placeholder:text-[16px] text-[16px] mt-[14px]'
            />
            <input 
              type="email"
              placeholder='Email Address'
              className='outline-gray-500 rounded-xl h-[49px] w-full placeholder:pl-2 bg-[#F6F6F6] pl-2 roboto placeholder:roboto placeholder:text-[16px] text-[16px] mt-[14px]'
            />
            <input 
              type="email"
              placeholder='Address for Delivery'
              className='outline-gray-500 rounded-xl h-[49px] w-full placeholder:pl-2 bg-[#F6F6F6] pl-2 roboto placeholder:roboto placeholder:text-[16px] text-[16px] mt-[14px]'
            />
            <input 
              type="number"
              placeholder='Mobile Phone'
              className='outline-gray-500 rounded-xl h-[49px] w-full placeholder:pl-2 bg-[#F6F6F6] pl-2 roboto placeholder:roboto placeholder:text-[16px] text-[16px] mt-[14px]'
            />
            <h2 className='roboto font-semibold text-[20px] text-[#40BFFF] text-center mt-[14px]'>Select Method Of Payment</h2>

            <div>
              <div className='flex justify-between items-center bg-[#EBF0FF] w-full rounded-sm h-[66px]'>
                <div className='flex items-center'>
                  <img src={iconCreditCard} alt="Icon credit card" className='pl-2' />
                  <h3 className='roboto font-bold text-[12px] text-[#223263] mb-0 pl-2'>Credit Card Or Debit</h3>
                </div>
                <div>
                  <input className='mr-2' type="checkbox" name="" id="" defaultChecked />
                </div>
              </div>

              <div className='flex justify-between items-center bg-white w-full rounded-sm h-[66px]'>
              <div className='flex items-center'>
                  <img src={iconPaypal} alt="Icon Paypal" className='pl-2' />
                  <h3 className='roboto font-bold text-[12px] text-[#223263] mb-0 pl-2'>Paypal</h3>
                </div>
                <div>
                  <input className='mr-2' type="checkbox" name="" id="" />
                </div>
              </div>
            </div>

            <div className='bg-[#33A0FF] h-[50px] mt-[46px] w-[90%] ml-auto mr-auto rounded-md flex items-center justify-center'>
              <NavLink
                to='/paymentcard'
                className='roboto font-extrabold text-[20px] no-underline text-white'
              >
                Go to Payment
              </NavLink>
            </div>
          </div>
        </section>
        {/* end mobile version */}
      </section>
    </>
  )
}

export default CheckoutPaymentsData;