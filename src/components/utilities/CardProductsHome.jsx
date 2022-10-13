import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

//components
import { ProductContext } from '../../context/ProductContext';

//styles
import iconShoppingCart from '../../assets/icons/iconShoppingCart.svg';
import iconSaveProduct from '../../assets/icons/iconSaveProduct.svg';
import iconSavedProductFull from '../../assets/images/iconSaved.png';
import iconSaveWhite from '../../assets/icons/iconSaveWhite.svg';
import iconCloseCheckout from '../../assets/icons/iconCloseCheckout.svg';
import iconVerifiedCard from '../../assets/icons/iconVerifiedCard.svg';

const CardProductsHome = ({ 
  amount, 
  width, 
  height, 
  background, 
  colorTitle, 
  colorPrice, 
  hiddeCounter, 
  maxwidth='334px', 
  imageHeight='200px',
}) => {

  //Save products
  const [products, setProducts] = useState([]);

  // Query the API
  useEffect(() => {

    axios.get(`https://api.escuelajs.co/api/v1/products?offset=0&limit=${amount}`)
      .then(({ data }) => setProducts(data))
      .catch(function (error) {
        console.log(error)
      })

  }, [])

  //usecontext
  const { productSelection, savedProducts } = useContext(ProductContext);

  //If hidecounter is true do not show close icon and increment and decrement icons
  let counter = hiddeCounter;


  return (
    <>
      {products.length > 0 && products.map(items => {
        return <div key={items.id} className={`w-[${width}] ml-auto mr-auto`}>
          <div className={`w-[90%] max-w-[${maxwidth}] h-[${height}] ml-auto mr-auto rounded-2xl relative bg-${background} flex items-center mt-4 shadow-2xl`}>

            {/* ITEMS 1 */}
            <div className={counter ? 'hidden'  : 'w-[50px] h-[50px]'}>
              <img 
                src={iconCloseCheckout} 
                alt="Icon Close Checkout" 
                className='h-full w-full' 
              />
            </div>

            {/* ITEM 2 */}
            <div className='relative w-[90%] ml-auto mr-auto'>
              <img 
                src={items.images} 
                alt="Card Products Image" 
                className={`w-full h-full m-auto rounded-4 pt-2`} 
              />
              <img 
                onClick={() => {
                productSelection(items);
                }} 
                src={iconShoppingCart} 
                alt="Icon Shopping Cart" 
                className='absolute top-4 right-1 w-[50px] h-[50px] cursor-pointer' 
              />
              <img src={iconVerifiedCard} alt="Icon Verified Card" className='absolute left-1 top-4 w-[40px] h-[40px]' />

              <div className='flex justify-between items-center pl-1 pr-1 pb-2'>
                <div className='mt-3'>
                  <h3 className={`sans font-semibold text-[14px] text-${colorTitle}`}>{items.title}</h3>
                  <span className={`sans font-semibold text-[20px] text-${colorPrice}`}>${items.price}</span>
                </div>
                <div>
                  <img 
                    onClick={ () => {
                    savedProducts(items);
                    alert('guardado')
                    console.log(items)
                    }} 
                    src={iconSaveProduct}
                    //cambiar icono con clase cuando es pulsado por otra imagen
                    alt="Icon Save Product" 
                    className='w-[25px] h-[28px] cursor-pointer'
                    id='iconSaved'
                  />
                </div>
              </div>
            </div>

            {/* ITEMS 3 */}
            <div className={counter ? 'hidden' : 'flex justify-center gap-4 items-center bg-white rounded-md w-[120px] h-[46px] shadow-2xl ml-2 p-1'}>
              <button 
                type='button' 
                className='text-[#33A0FF]'
              >
                -
              </button>
              <span className='sans font-normal text-[18px] text-[#262626]'>2</span>
              <button 
                type='button' 
                className='text-[#33A0FF]'
              >
                +
              </button>
            </div>
          </div>
        </div>

      })
      }
    </>

  )
}

export default CardProductsHome;