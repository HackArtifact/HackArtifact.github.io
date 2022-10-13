import React, { Fragment, useContext } from 'react';
import { Card } from 'react-bootstrap';
import { ProductContext } from '../../context/ProductContext';
import iconShoppingCart from '../../assets/icons/iconShoppingCart.svg';
import iconCloseCheckout from '../../assets/icons/iconCloseCheckout.svg';


const CartShopping = () => {

  const { cart, removeProduct } = useContext(ProductContext);

  return (
    <Fragment>
      {cart.map(items => (
        <div key={items.id} className='relative w-[90%] ml-auto mr-auto'>

          <div className={`w-[90%] h-[90%] ml-auto mr-auto rounded-2xl relative bg-[#ffffff] shadow-2xl flex items-center mt-4`}>

            {/* ITEMS 1 */}
            <div className='w-[50px] h-[50px]'>
              <img onClick={() => removeProduct(items.id)} src={iconCloseCheckout} alt="Icon Close Checkout" className='h-full w-full cursor-pointer' />
            </div>

            <div className='relative w-[90%] ml-auto mr-auto'>
              <img src={items.images} alt="Card Products Image" className='w-full h-[imageHeight] m-auto rounded-4 pt-2' />
              <img src={iconShoppingCart} alt="Icon Shopping Cart" className='absolute top-3 right-1 w-[38px] h-[38px] cursor-pointer' />
              <div className='flex justify-between items-center pl-1 pr-1 pb-2'>
                <div className='mt-3'>
                  <h3 className='sans font-semibold text-[14px] text-[#000000]'>{items.title}</h3>
                  <span className='sans font-semibold text-[20px] text-[#000000]'>${items.price}</span>
                </div>
                {/* <div>
             <img onClick={() => setLocalStorage(!saved)} src={Icon} alt="Icon Save Product" className='w-[25px] h-[28px] cursor-pointer' />
           </div> */}
              </div>
            </div>


            {/* ITEMS 3 */}
            <div className='flex justify-center gap-4 items-center bg-white rounded-md w-[120px] h-[46px] shadow-2xl'>
              <button type='button' className='text-[#33A0FF]'>-</button>
              <span className='sans font-normal text-[18px] text-[#262626]'>2</span>
              <button type='button' className='text-[#33A0FF]'>+</button>
            </div>

          </div>
        </div>
      ))}
    </Fragment>
  )

}
export default CartShopping;