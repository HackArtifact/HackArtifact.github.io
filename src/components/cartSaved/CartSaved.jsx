import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import iconCloseCheckout from '../../assets/icons/iconCloseCheckout.svg';


const CartSaved = () => {
  const { saved, deleteProducts } = useContext(ProductContext);

  return (
    <>
      {saved.length > 0 && saved.map(items => {
        return (
           <div key={items.id}>
            <div className='relative w-[90%] ml-auto mr-auto '>
              <img src={items.images} alt="Card Products Image" className='w-full h-[imageHeight] m-auto rounded-4 pt-2' />
              <img onClick={() => deleteProducts(items.id)} src={iconCloseCheckout} alt="Icon Shopping Cart" className='absolute top-3 right-1 w-[38px] h-[38px] cursor-pointer' />
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
           </div>
        );
      })}
    </>
  )
}

export default CartSaved