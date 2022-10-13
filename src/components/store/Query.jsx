import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Query = () => {
  const [state, setState] = useState([])

  useEffect(() => {

    axios.get('https://api.escuelajs.co/api/v1/products')
      .then(function (response) {
        setState(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })

    // return () => {
    //   second
    // }
  }, [])

  return (
    <>
      {state.length > 0 && state.map(items => {
        return <>
          {/* grid 2 x 2 */}
          <div key={items.id} className='grid grid-cols-2 grid-row-2 mt-[29px]'>
            <img src={items.images[0]} alt='' className='' />
            <img src={items.images[0]} alt='' className='' />
            <img src={items.images[0]} alt='' className='' />
            <img src='' alt='' className='' width='200px' />
          </div>

          <div className='mt-[7px] shadow-xl w-[90%] m-auto'>
            <img src={items.images[0]} alt='' className='' />
          </div>

          {/* grid 2 x 2 */}
          <div className='grid grid-cols-2 grid-row-2 mt-[23px]'>
            <img src={items.images[0]} alt='' className='' />
            <img src={items.images[0]} alt='' className='' />
            <img src={items.images[0]} alt='' className='' />
            <img src={items.images[0]} alt='' className='' />
          </div>

          <div className='mt-[7px] shadow-xl w-[90%] m-auto'>
            <img src={items.images[0]} alt='' className='' />
          </div>
          <div className='shadow-xl w-[90%] ml-auto mr-auto mt-3'>
            <img src={items.images[0]} alt='' className='' />
          </div>

          {/* grid 2 x 3 */}
          <div className='mt-[35px] grid grid-cols-2 grid-row-3 place-items-center'>
            <img src={items.images[0]} alt='' className='' />
            <img src={items.images[0]} alt='' className='' />
            <img src={items.images[0]} alt='' className='' />
            <img src={items.images[0]} alt='' className='' />
            <img src={items.images[0]} alt='' className='' />
            <img src={items.images[0]} alt='' className='' />
          </div>
        </>
      })
      }
    </>
  )
}

export default Query