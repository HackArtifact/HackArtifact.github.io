import React from 'react'
import { NavLink } from 'react-router-dom'

const CheckoutPriceTotal = () => {
  return (
    <>
      <div className='w-[90%] h-[277px] rounded-xl bg-white shadow-xl ml-auto mr-auto flex flex-col items-center pt-[18px] pb-[18px]'>
        <div className='w-[90%] ml-auto mr-auto flex justify-between items-center'>
          <h3 className='sans font-normal text-[14px] text-[#262626] mb-0'>Subtotal</h3>
          <span className='sans font-normal text-[14px] text-[#262626]'>$ 998</span>
        </div>
        <div className='w-[90%] ml-auto mr-auto flex justify-between items-center pt-[19px]'>
          <h3 className='sans font-normal text-[14px] text-[#262626] mb-0'>Shipping free</h3>
          <span className='sans font-normal text-[14px] text-[#262626]'>$ 20</span>
        </div>
        <div className='w-[90%] ml-auto mr-auto flex justify-between items-center pt-[19px]'>
          <h3 className='sans font-normal text-[14px] text-[#262626] mb-0'>Coupon</h3>
          <input type="text" className='w-[135px] h-[25px] bg-[#0500ff14] rounded-full p-2' />
        </div>
        <hr className='w-[90%] m-auto border-1' />
        <div className='w-[90%] ml-auto mr-auto flex justify-between items-center pt-[39px]'>
          <h3 className='sans font-medium text-[20px] text-[#22262A]'>TOTAL</h3>
          <span className='sans font-medium text-[20px] text-[#22262A]'>$ 1018</span>
        </div>
        <NavLink
          to='/paymentcard'
          className='w-[90%] no-underline flex items-center justify-center h-[48px] ml-auto mr-auto bg-[#33A0FF] text-white font-medium text-[18px] rounded-md mt-[9px] sans'
        >Check out</NavLink>
      </div>
    </>
  )
}

export default CheckoutPriceTotal