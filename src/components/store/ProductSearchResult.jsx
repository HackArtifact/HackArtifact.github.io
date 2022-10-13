import React, { useContext } from 'react';
import Modal from '../modal/Modal';
import ModalSearchFilter from './ModalSearchFilter';
import logoSweyLoading from '../../assets/images/logoSweyLoading.png';
import iconFilter from '../../assets/icons/iconFilter.svg';
import NavOfflineUser from '../utilities/NavOfflineUser';
import Footer from '../utilities/Footer';
import '../../style/style.css';
import CardProductsHome from '../utilities/CardProductsHome';
import { ProductContext } from '../../context/ProductContext';

const ProductSearchResult = () => {

  const { modalSearchFilter ,setModalSearchFilter, inputSearch } = useContext(ProductContext);

  return (
    <>
      <main className='bgColorMain'>
        <NavOfflineUser 
          colorSwey='black'
          colorInputDesktop='input'
          colorNav='colorNavMobile'
          colorLogin='#272D4E'
          loginDesktop='#272D4E'
          colorInputMobile='input'
          colorNavMobile='colorNavMobile'
        />
        <article>
          <section className='flex flex-col items-center'>
            <h2 className='font-medium text-[12px] lg:text-[20px] text-[#888888] spacing montserrat'>search results</h2>
            <div className='flex justify-center items-center'>
              <span className='sans font-normal text-[26px] lg:text-[60px] text-[#272D4E]'>“{inputSearch}”</span>
              <span>
                <img
                  src={iconFilter} 
                  alt="Icon Filter" 
                  className='img-fluid hidden pt-4 pl-4 lg:block'
                  onClick={() => setModalSearchFilter(!modalSearchFilter)} 
                /></span>
            </div>
       
            
          </section>
        

          {/* Content mobile */}
          {/* grid 2 x 2 */}
        <div className='containerMobile lg:hidden'>
          <div className='grid grid-cols-2 grid-row-2 mt-[29px]'>
            <CardProductsHome amount={4} hiddeCounter={true} />
          </div>

          <div className='mt-[7px] shadow-xl w-[90%] m-auto'>
            <CardProductsHome amount={1} hiddeCounter={true} />
          </div>

          {/* grid 2 x 2 */}
          <div className='grid grid-cols-2 grid-row-2 mt-[29px]'>
            <CardProductsHome amount={4} hiddeCounter={true} />
          </div>

          <div className='mt-[7px] shadow-xl w-[90%] m-auto'>
            <CardProductsHome amount={1} hiddeCounter={true} />
          </div>

          <div className='mt-[7px] shadow-xl w-[90%] m-auto'>
            <CardProductsHome amount={1} hiddeCounter={true} />
          </div>

          {/* grid 2 x 3 */}
          <div className='grid grid-cols-2 grid-row-2 mt-[29px]'>
            <CardProductsHome amount={6} hiddeCounter={true} />
          </div>
          </div>
          {/* Content mobile end */}

          {/* Content desktop */}
          {/* 1 - 2 x 2 */}
          <div className='hidden lg:flex'>
            <div className='mt-[110px] w-[90%] h-full ml-auto mr-auto flex'>
              <CardProductsHome amount={1} hiddeCounter={true} colorPrice='price-card-market' colorTitle='colorNavMobile' background='white' />
            </div>
              <div className='grid grid-cols-2 grid-row-2 mt-[23px]'>
                <CardProductsHome amount={4} hiddeCounter={true} background='white' />
              </div>
          </div>

          <div className='hidden lg:flex gap-5'>
          <div className='w-1/2 grid grid-cols-2 grid-rows-3 gap-2'>
            <CardProductsHome amount={6} hiddeCounter={true} background='white'/>
          </div>
          <div className='w-1/2 '>
            <div className='grid grid-cols-2 grid-rows-1 gap-2 grid-auto-fit'>
              <CardProductsHome amount={2} hiddeCounter={true} background='white'/>
            </div>
            <div className='flex mt-20 relative'> 
              <CardProductsHome amount={1} hiddeCounter={true}  maxwidth='90%' background='white' />
            </div>
          </div>
          </div>

          <div className='lg:flex gap-5 hidden'>
          <div className='w-1/2 '>
            <div className='grid grid-cols-2 grid-rows-1 gap-2 grid-auto-fit'>
              <CardProductsHome amount={2} hiddeCounter={true} background='white'/>
            </div>
            <div className='flex mt-20 relative'> 
              <CardProductsHome amount={1} hiddeCounter={true}  maxwidth='90%' background='white' />
            </div>
          </div>

          <div className='w-1/2 grid grid-cols-2 grid-rows-3 gap-2'>
            <CardProductsHome amount={6} hiddeCounter={true} background='white'/>
          </div>
          </div>

          {/* Content desktop end */}

          <div className='flex justify-center items-center mt-[125px]'>
            <img src={logoSweyLoading} alt="Logo Swey loading" className='img-fluid' />
          </div>

          <div className='flex justify-center pb-4 text-center roboto font-normal mt-[51px] lg:hidden'>
            <h2 className='text-[12px] text-[#272D4E]'>COPYRIGHT SWÉY - <span><a href="#" className='text-[#272D4E]'>TERMS & CONDITIONS PRIVACY POLICY</a></span></h2>
          </div>

          <footer className='hidden lg:block mt-5 mb-4'>
            <Footer />
          </footer>
        </article>
      </main>
      {modalSearchFilter && 
            <Modal>
              <ModalSearchFilter />
            </Modal>
          }
    </>
  )
}

export default ProductSearchResult;