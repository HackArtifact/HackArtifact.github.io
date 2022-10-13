import React from 'react';
import NavOnlineUser from '../utilities/NavOnlineUser';

import creditCardExample from '../../assets/images/creditCardExample.png';
import iconArrowLeft from '../../assets/icons/iconArrowLeft.svg';
import iconClose from '../../assets/icons/iconClose.svg';
import iconPositionPayment from '../../assets/icons/iconPositionPayment.svg';

const CheckoutPaymentCard2 = () => {
  return (
    <>
      <NavOnlineUser hiddeBgGradient='true' />

      <section>
      <div className='flex justify-between items-center pl-2 pr-2'>
              <div>
                <img src={iconArrowLeft} alt="Icon Arrow Left" />
              </div>
              <h2 className='text-[#40BFFF] sans font-semibold text-[32px] mt-[5px]'>Make Payment</h2>
              <div>
                <img src={iconClose} alt="Icon Close" />
              </div>
            </div>

            <div className='flex mt-[5px] justify-center items-center gap-2'>
              <div className='bg-[#40BFFF] rounded-full w-[37px] h-[36px] text-center'>
                <h3 className='text-white text-[18px] mb-0 font-bold'>1</h3>
              </div>
              <hr />
              <div className='bg-[#40BFFF] rounded-full w-[37px] h-[36px] text-center'>
                <h3 className='text-white text-[18px] mb-0 font-bold'>2</h3>
              </div>
              <hr />
              <div className='bg-[#DFDEDE] rounded-full w-[37px] h-[36px] text-center'>
                <h3 className='text-white text-[18px] mb-0 font-bold'>3</h3>
              </div>
              <hr />
              <div className='bg-[#DFDEDE] rounded-full w-[37px] h-[36px] text-center'>
                <h3 className='text-white text-[18px] mb-0 font-bold'>4</h3>
              </div>
            </div>

            <div className='mt-[22px]'>
              <h2 className='border-b-2 border-blue-500 sans font-bold text-[13px] text-[#2B2B2C]'>Split Payment</h2>
              <div>
                <img src={creditCardExample} alt="Credit Cart Example" className='hidden lg:block' />
              </div>
              <div className='mt-[37px]'>
                <input type="text" placeholder='Name on Card' className='w-[80%] h-[50px] block m-auto border-2 rounded-xl placeholder:pl-2' />
                <div className='flex justify-center gap-6 mt-[26px]'>
                  <input type="number" placeholder='Expiry' className='w-[35%] h-[50px] border-2 rounded-xl placeholder:pl-2' />
                  <input type="number" placeholder='CVV' className='w-[35%] h-[50px] border-2 rounded-xl placeholder:pl-2' />
                </div>
                <input type="number" placeholder='Card Number' className='w-[80%] h-[50px] block ml-auto mr-auto border-2 rounded-xl placeholder:pl-2 mt-[26px]' />
              </div>

              <div className='flex justify-center items-center mt-[29px]'>
                <input type="checkbox" name="" id="" />
                <h3 className='sans font-normal text-[14px] text-[#999999] mb-0 pl-[10px]'>Save this credit card</h3>
              </div>

              <div className='w-[80%] h-[84px] block ml-auto mr-auto border-2 rounded-xl relative mt-[38px]'>
                <h2 className='absolute top-[calc(50%_-_9px)] pl-1 text-[14px] text-white mb-0 z-10'>SWEY Coin Wallet</h2>
                <div className='w-1/2 h-full btnGradientLeft rounded-l-xl relative'>
                <img src={iconPositionPayment} alt="Icon Position" className='absolute -top-5 -right-2' />
                </div>
              </div>

              <button type='button' className='bg-[#33A0FF] mt-[20px] w-[80%] h-[70px] block ml-auto mr-auto border-2 rounded-xl sans font-extrabold text-[24px] text-white'>Confirm</button>
            </div>


      </section>
    </>
  )
}

export default CheckoutPaymentCard2