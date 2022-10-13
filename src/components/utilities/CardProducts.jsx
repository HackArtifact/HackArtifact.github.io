import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import iconShoppingCart from '../../assets/icons/iconShoppingCart.svg';
import iconSaveProduct from '../../assets/icons/iconSaveProduct.svg';
import iconSaved from '../../assets/images/iconSaved.png';
import iconVerifiedCard from '../../assets/icons/iconVerifiedCard.svg';

import { ProductContext } from '../../context/ProductContext';


const CardProducts = ({ width, background, height }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(13);
  // //key to identify each element
  // const key = `saved-${id}`;
  const [saved, setSaved] = useState(() => {    
    try {
      const save = window.localStorage.getItem('saved')
      return JSON.parse(save)
    } catch (e) {
      return false
    }
  })

  // when scrolling increases the pagination by 13
  let offset = 0;
  useEffect(() => {
    offset += 13;
  }, [page])

  useEffect(() => {

    axios.get(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${page}`)
      .then(({ data }) => setProducts(data))
      .catch(function (error) {
        console.log(error)
      })

    // return () => {
    //   second
    // }
  }, [page])

  // if the icon is saved it will be blue, otherwise it is normal
  const Icon = saved ? iconSaved : iconSaveProduct;


  // save to localstorage
  const setLocalStorage = value => {
    try {
      window.localStorage.setItem('saved', value);
      setSaved(value)
    } catch (e) {
      console.error(e)
    }
  }

    //usecontext
    const { productSelection } = useContext(ProductContext);

  return (
    <>
      {products.length > 0 && products.map(items => {
        return <div key={items.id}>
          <InfiniteScroll
            dataLength={products.length}
            hasMore={true}
            next={() => setPage(prevPage => prevPage + 13)}
            // loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          >
            <div className={`w-${width} h-${height} m-auto rounded-xl relative bg-${background} n${0 + 1} shadow-2xl mb-4`}>
              <img src={items.images} alt="Card Products Image" className='img-fluid m-auto p-2 rounded-3xl' />
              <img 
                src={iconShoppingCart} 
                alt="Icon Shopping Cart" 
                className='absolute top-4 right-4 w-[50px] h-[50px] cursor-pointer' 
                onClick={() => {
                  productSelection(items);
                }} 
              />
              <img src={iconVerifiedCard} alt="Icon Verified Card" className='absolute left-4 top-4 w-[40px] h-[40px]' />
              <div className={`flex justify-between items-center pl-3 pr-3`}>
                <div>
                  <h3 className='sans font-semibold text-[10px] text-[#425466]'>{items.title}</h3>
                  <span className='sans font-semibold text-[20px] text-[#27272E]'>${items.price}</span>
                </div>
                <div>
                  <img onClick={() => setLocalStorage(!saved)} src={Icon} alt="Icon Save Product" className='w-[25px] h-[28px] cursor-pointer' />
                </div>
              </div>

            </div>
          </InfiniteScroll>
        </div>
      })
      }
    </>
  )
}

export default CardProducts;