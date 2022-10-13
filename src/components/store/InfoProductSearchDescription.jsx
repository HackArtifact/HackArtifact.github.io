import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import NavOfflineUser from '../utilities/NavOfflineUser';
import CardProducts from '../utilities/CardProducts';
import CardSponsord from '../utilities/CardSponsord';
import '../../style/style.css';
import cardProducts from '../../assets/images/cardProducts.png';
import logoSweyLoading from '../../assets/images/logoSweyLoading.png';
import profileVerified from '../../assets/images/profileVerified.png';
import iconArrowLeft from '../../assets/icons/iconArrowLeft.svg';
import iconArrowBottom from '../../assets/icons/iconArrowBottom.svg';
import iconVerified from '../../assets/icons/iconVerified.svg';
import iconEmail from '../../assets/icons/iconEmail.svg';
import iconInfo from '../../assets/icons/iconInfo.svg';
import iconMenu from '../../assets/icons/iconMenu.svg';
import logoSwey from '../../assets/icons/logoSwey.svg';
import iconSaveProduct from '../../assets/icons/iconSaveProduct.svg';
import iconSearch from '../../assets/icons/iconSearch.svg';
import iconMenuDark from '../../assets/icons/iconMenuDark.svg';
import iconVerifiedDesktop from '../../assets/icons/iconVerifiedDesktop.svg';

import { ProductContext } from '../../context/ProductContext';

const InfoProductSearchDescription = () => {
  const [menu, setMenu] = useState(false);
  const IconMenu = menu ? iconMenuDark : iconMenu;

  const { inputSearch } = useContext(ProductContext);


  return (
    <>
    <main className='bgColorMain'>

      <NavOfflineUser colorInputMobile='input' colorSwey='colorNavMobile' colorLogin='#272D4E' colorNavMobile='colorNavMobile' />

      <section className='flex justify-between items-center pl-2 pr-2'>
        <div>
          <img src={iconArrowLeft} alt="Icon Arrow Left" />
        </div>
        <div>
          <h2 className='sans font-normal text-[16px] text-[#272D4E]'>'{inputSearch}'</h2>
        </div>
      </section>

      <section className='mt-[12px]'>
        <div className='w-[90%] m-auto lg:hidden'>
          <img src={cardProducts} alt="Card Products image" className='w-full h-full' />
        </div>
        <div className='grid grid-flow-col  w-[90%] h-[50px] m-auto gap-0 lg:hidden'>
          <img src={cardProducts} alt="Card Products image" className='img-fluid w-[100px] h-full' />
          <img src={cardProducts} alt="Card Products image" className='img-fluid w-[100px] h-full' />
          <img src={cardProducts} alt="Card Products image" className='img-fluid w-[100px] h-full' />
          <img src={cardProducts} alt="Card Products image" className='img-fluid w-[100px] h-full' />
          <img src={cardProducts} alt="Card Products image" className='img-fluid w-[100px] h-full' />
          <img src={cardProducts} alt="Card Products image" className='img-fluid w-[100px] h-full' />
        </div>

        <div className='mt-[18px] lg:hidden'>
            <div className='w-[60%] m-auto flex justify-around'>
            <NavLink
              to='/infoproductsearch'
              className='sans text-inherit no-underline font-bold text-[13px] border-b w-1/2 text-center'
            >Options</NavLink>
            <h2 className='sans font-bold text-[13px] border-b-2 border-cyan-600 w-1/2 text-center'>Description</h2>
            </div>
            <div className='bg-white rounded-xl w-[70%] m-auto p-2'>
            <div className='flex justify-between items-center w-full m-auto'>
              <div>
                <h3 className='sans font-semibold text-[16px] text-[#27272E]'>Available Sizes</h3>
              </div>
              <div>
                <span className='w-[40px] block h-[27px] bg-blue-500 rounded-md text-white font-bold text-center'>UK</span>
              </div>
            </div>

            <div className='flex justify-between w-full m-auto'>
              <div>
                <h3 className='sans font-medium text-[14px] text-[#425466] mt-[6px]'>First option</h3>
              </div>
              <div className='mt-[6px]'>
                <span className='w-[40px] block h-[27px] bg-[#E4ECF7] rounded-md text-black font-bold text-center'>23</span>
              </div>
            </div>

            <div className='flex justify-between w-full m-auto'>
              <div>
                <h3 className='sans font-medium text-[14px] text-[#425466] mt-[6px]'>Second option</h3>
              </div>
              <div className='mt-[6px]'>
                <span className='w-[40px] block h-[27px] bg-[#E4ECF7] rounded-md text-black font-bold text-center'>7</span>
              </div>
            </div>

            <div className='flex justify-between w-full m-auto'>
              <div>
                <h3 className='sans font-medium text-[14px] text-[#425466] mt-[6px]'>Third option</h3>
              </div>
              <div className='mt-[6px]'>
                <span className='w-[40px] block h-[27px] bg-[#E4ECF7] rounded-md text-black font-bold text-center'>1</span>
              </div>
            </div>

            <div className='flex justify-between w-full m-auto'>
              <div>
                <h3 className='sans font-semibold text-[14px] text-[#425466] mt-[6px]'>Condition:</h3>
              </div>
              <div className='mt-[6px]'>
                <span className='w-auto block h-[27px] pl-1 pr-1 bg-blue-500 rounded-md text-white font-bold text-center'>8.5/10</span>
              </div>
            </div>
            </div>

          <div className='w-[70%] ml-auto mr-auto bg-white rounded-lg p-2 mt-[7px]'>
          <div className='description'>
            <div className='flex items-center'>
              <img src={profileVerified} alt="Profile Verified Image" className=' w-[46px] h-[46px]' />
              <div>
                <div className='flex'>
                  <img src={iconVerified} alt="Icon Verified" className='w-[18px] h-[18px]' />
                  <h2 className='sans font-normal text-[14px]'>Seller Description</h2>
                </div>
                <h3 className='pl-2 sans font-semibold text-[16px]'>Raphina's Boutique</h3>
              </div>
            </div>
          </div>

          <div>
            <p className='sans font-normal text-[12px] text-[#425466]'>This product is designed for comfortable walks #ModernFashion #Designer</p>
          </div>
          <p className='sans font-semibold text-[14px] text-[#0095FF]'>FREE DELIVERY</p>
          </div>


          <div className='w-[70%] ml-auto mr-auto bg-white rounded-lg p-2 mt-[7px]'>
          <div className='description'>
            <div className='flex items-center'>
              <img src={profileVerified} alt="Profile Verified Image" className=' w-[46px] h-[46px]' />
              <div>
                <div className='flex'>
                  <img src={iconVerified} alt="Icon Verified" className='w-[18px] h-[18px]' />
                  <h2 className='sans font-normal text-[14px]'>Buller Comments</h2>
                </div>
                <h3 className='pl-2 sans font-semibold text-[16px]'>Jules Kounde</h3>
              </div>
            </div>
          </div>

          <div>
            <p className='sans font-normal text-[12px] text-[#425466]'>This product is designed for comfortable walks #ModernFashion #Designer</p>
          </div>
          <p className='sans font-semibold text-[14px] text-[#0095FF]'>Add Comments?</p>
          </div>

          <div className='flex flex-col items-center mt-[15px]'>
          <button type='button' className='w-[70%] h-[73px] text-white font-bold btnGradientRight m-auto rounded-full'>Add to Cart</button>
          <a href="#" className='block mt-[10px] no-underline font-bold text-[20px] text-[#299EF3]'>Buy now ›</a>
        </div>
        </div>


        {/* Desktop */}
        <div className='hidden lg:block'>
          <div>
          <img src={iconVerifiedDesktop} alt="Icon Verified Desktop" />
          </div>
          <div>
            <p>
            All Purchases that are made via Swéy Payment systems on Swéy platfroms are protected by Buyer Protection
            </p>
          </div>
          <div>
            <div>
              <img src={iconInfo} alt="Icon Info" />
            </div>
            <a href="#">More Info ›</a>
          </div>
          <div>
          <button type='button' className='btn btn-secondary'>Add to Cart</button>
          <a href="#">Buy now ›</a>
        </div>
        </div>



        <div className='flex justify-center items-center w-[90%] ml-auto mr-auto mt-[15px]'>
          <div>
            <h2 className='sans text-[22px] text-black font-normal tracking-widest'>More from the seller </h2>
          </div>
          <div>
            <img src={iconArrowBottom} alt="Icon Arrow Bottom" className='pb-2' />
          </div>

        </div>

        {/* grid 2 x 2 */}
        <div className='grid grid-cols-2 grid-row-2'>
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardSponsord />
        </div>

        <div>
          <CardProducts />
        </div>

        {/* grid 2 x 2 */}
        <div className='grid grid-cols-2 grid-row-2'>
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardSponsord />
        </div>
        <div className='text-center'>
        <a href="#" className='no-underline sans font-bold text-[26px]'>View More ›</a>
        </div>
        <div className='flex justify-center items-center mt-[46px]'>
          <h2 className='sans font-normal text-[22px] text-center'>Recommended</h2>
          <img src={iconArrowBottom} alt="Icon Arrow Bottom" className='pb-2' />
        </div>
        <div>
          <CardProducts />
        </div>
        <div>
          <CardProducts />
        </div>

        {/* grid 2 x 3 */}
        <div className='grid grid-cols-2 grid-row-3'>
          <CardProducts />
          <CardSponsord />
          <CardProducts />
          <CardSponsord />
          <CardProducts />
          <CardSponsord />
        </div>

        <div className='flex justify-center items-center mt-[80px]'>
          <img src={logoSweyLoading} alt="Logo Swey loading" className='img-fluid' />
        </div>

        <div className='flex justify-center items-center pb-4 text-center roboto font-normal mt-[51px]'>
        <h2 className='text-[12px] text-[#272D4E]'>COPYRIGHT SWÉY - <span><a href="#" className='text-[#272D4E]'>TERMS & CONDITIONS PRIVACY POLICY</a></span></h2>
      </div>
      </section>
    </main>
  </>
  )
}

export default InfoProductSearchDescription