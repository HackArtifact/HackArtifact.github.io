import React, { useContext} from 'react'
import { NavLink } from 'react-router-dom';

//usecontext
import { ProductContext } from '../../context/ProductContext';

//components
import NavOfflineUser from '../utilities/NavOfflineUser';

//files
import iconArrowLeft from '../../assets/icons/iconArrowLeft.svg';
import iconClose from '../../assets/icons/iconClose.svg';
import iconSuccess from '../../assets/icons/iconSuccess.svg';


const CheckoutPaymentSweySuccess = () => {

  const {modalSplit4, setModalSplit4, modalSplit5, setModalSplit5 } = useContext(ProductContext);

  return (
    <>
      {/* VERSION DESKTOP */}
      <section className='bg-white w-[60%] ml-auto mr-auto mt-[42px] shadow-2xl rounded-xl pl-4 pr-4 pb-4 pt-[43px] hidden lg:block'>
        
      <div className='flex justify-between items-center pl-2 pr-2'>
          <div>
            <img 
              src={iconArrowLeft} 
              alt="Icon Arrow Left" 
              className='w-[23px] h-[26px] cursor-pointer'
              onClick={() => {
                setModalSplit5(!modalSplit5);
                setModalSplit4(!modalSplit4);
              }}
            />
          </div>
          <h2 className='text-[#40BFFF] raleway font-normal text-[32px] mt-[5px]'>Make Payment</h2>
          <div>
            <img 
              src={iconClose} 
              alt="Icon Close" 
              className='w-[26px] h-[29px] cursor-pointer'
              onClick={() => {
                setModalSplit5(!modalSplit5);
              }} 
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
            <hr className='bg-black w-2' />
          <div className='bg-[#40BFFF] rounded-full w-[37px] h-[36px] text-center flex items-center justify-center'>
            <h3 className='text-white text-[18px] font-bold mb-0'>4</h3>
          </div>
        </div>

        <div className='mt-[65px] flex flex-col items-center justify-center'>
          <img src={iconSuccess} alt="Icon Success" />
          <h2 className=' sans font-bold text-[24px] text-[#223263]'>Success</h2>
          <button 
            type='button' 
            className='bg-[#33A0FF] mt-[49px] w-[30%] h-[70px] block ml-auto mr-auto border-2 rounded-xl sans font-extrabold text-[24px] text-white'
            onClick={() => setModalSplit5(!modalSplit5)}
          >Complete
          </button>
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
            <hr className='bg-black w-2' />
          <div className='bg-[#40BFFF] rounded-full w-[37px] h-[36px] text-center flex items-center justify-center'>
            <h3 className='text-white text-[18px] font-bold mb-0'>4</h3>
          </div>
        </div>

        <div className='mt-[65px] flex flex-col items-center justify-center'>
          <img src={iconSuccess} alt="Icon Success" />
          <h2 className=' sans font-bold text-[24px] text-[#223263]'>Success</h2>
          <NavLink
            to='/home'
            className='bg-[#33A0FF] w-[90%] mt-[50px] h-[70px] ml-auto mr-auto border-2 rounded-xl sans font-extrabold text-[24px] text-white no-underline flex items-center justify-center'
          >
            Complete
          </NavLink>
        </div>
      </section>
    </>
  )
}

export default CheckoutPaymentSweySuccess;