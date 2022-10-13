import React from 'react';
import CardProducts from './CardProducts';
import iconCloseCheckout from '../../assets/icons/iconCloseCheckout.svg';

const CheckoutCard = () => {
  return (
    <>
      <div className='flex justify-between items-center gap-1 pl-1 pr-1'>
        <div>
          <img src={iconCloseCheckout} alt="Icon Close Checkout" />
        </div>
        <div>
          <CardProducts  />
        </div>
        <div>
          <div className='flex justify-center gap-4 items-center bg-white rounded-md w-[124px] h-[46px]'>
            <button type='button' className='text-[#33A0FF]'>-</button>
            <span className='sans font-normal text-[18px] text-[#262626]'>2</span>
            <button type='button' className='text-[#33A0FF]'>+</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutCard;