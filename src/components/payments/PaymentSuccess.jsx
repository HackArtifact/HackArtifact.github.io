import React, { useContext} from 'react';
import { NavLink } from 'react-router-dom';

//usecontext
import { ProductContext } from '../../context/ProductContext';

//components
import NavOfflineUser from '../utilities/NavOfflineUser';

//files
import iconArrowLeft from '../../assets/icons/iconArrowLeft.svg';
import iconClose from '../../assets/icons/iconClose.svg';
import iconSuccess from '../../assets/icons/iconSuccess.svg';

const CheckoutPaymentSuccess = () => {

  const {modal2, modal3, setModal2, setModal3 } = useContext(ProductContext);

  return (
    <>
      {/* VERSION DESKTOP */}
      <section className='w-[60%] shadow-2xl mt-[42px] hidden lg:block rounded-xl pl-4 pr-4 bg-white ml-auto mr-auto pb-4'>
        <div className='flex justify-between items-center pl-2 pr-2 pt-[43px]'>
          <div>
            <img 
              src={iconArrowLeft} 
              alt="Icon Arrow Left"
              className='cursor-pointer'
              onClick={() => {
                setModal3(!modal3)
                setModal2(!modal2)
              }}
            />
          </div>
          <h2 className='text-[#40BFFF] raleway font-normal text-[32px] mt-[5px]'>Make Payment</h2>
          <div>
            <img 
              src={iconClose} 
              alt="Icon Close"
              className='cursor-pointer'
              onClick={() => setModal3(!modal3)}
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
          <div className='bg-[#40BFFF] rounded-full w-[37px] h-[36px] text-center flex items-center justify-center'>
            <h3 className='text-white text-[18px] font-bold mb-0'>3</h3>
          </div>
        </div>

        <div className='mt-[65px] w-[90%] ml-auto mr-auto flex flex-col items-center'>
          <img src={iconSuccess} alt="Icon Success" />
          <h2 className=' sans font-bold text-[24px] text-[#223263]'>Success</h2>

          <NavLink
            onClick={() => {
              setModal3(!modal3);
            }}
            to='/home'
            className='bg-[#33A0FF] mt-[49px] w-[30%] h-[70px] ml-auto mr-auto border-2 rounded-xl sans font-extrabold text-[24px] text-white flex items-center justify-center no-underline'
          >Complete</NavLink>
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
            <div className='bg-[#40BFFF] rounded-full w-[37px] h-[36px] text-center flex items-center justify-center'>
            <h3 className='text-white text-[18px] font-bold mb-0'>3</h3>
            </div>
          </div>

          <div className='mt-[65px] w-[90%] ml-auto mr-auto flex flex-col items-center'>
          <img src={iconSuccess} alt="Icon Success" />
          <h2 className=' sans font-bold text-[24px] text-[#223263]'>Success</h2>

          <NavLink
            to='/home'
            className='bg-[#33A0FF] mt-[49px] w-[90%] h-[70px] ml-auto mr-auto border-2 rounded-xl sans font-extrabold text-[24px] text-white flex items-center justify-center no-underline'
          >Complete</NavLink>
        </div>

      </section>
    </>
  )
}

export default CheckoutPaymentSuccess