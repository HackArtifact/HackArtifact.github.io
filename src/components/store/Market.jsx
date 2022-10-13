import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';

//components
import CardProductsHome from '../utilities/CardProductsHome';
import NavOfflineUser from '../utilities/NavOfflineUser';
import CardProducts from '../utilities/CardProducts';
import Footer from '../utilities/Footer';

//styles
import '../../style/style.css';

//files
import logoSweyLoading from '../../assets/images/logoSweyLoading.png';
import iconArrowBottom from '../../assets/icons/iconArrowBottom.svg';
import iconPointBlueMarketBottom from '../../assets/icons/iconPointBlueMarketBottom.svg';
import iconPointBlueMobile from '../../assets/icons/iconPointBlueMobile.svg';
import iconMenu from '../../assets/icons/iconMenu.svg';
import logoSwey from '../../assets/icons/logoSwey.svg';
import iconPointBlueMarket from '../../assets/icons/iconPointBlueMarket.svg';
import iconShoppingCart from '../../assets/icons/iconShoppingCart.svg';
import iconSearch from '../../assets/icons/iconSearch.svg';
import iconMenuDark from '../../assets/icons/iconMenuDark.svg';


const Market = () => {
  const [menu, setMenu] = useState(false);
  const IconMenu = menu ? iconMenuDark : iconMenu;
  const { setInputSearch , stateInputSearch} = useContext(ProductContext);

  return (
    <>
      <main className='bgColorMain' >

        <div>
        <NavOfflineUser 
          colorSwey='colorNavMobile'
          colorNav='colorNavMobile' 
          colorInputDesktop='input' 
          loginDesktop='#272D4E' 
          colorInputMobile='input'
          colorNavMobile='colorNavMobile'
          colorLogin='#272D4E' 
        />

          <section className='search'>
            <div className='lg:flex justify-between items-center xl:justify-around gap-20'>
              <div 
                className='flex flex-col items-start justify-center mt-10 w-[90%] lg:w-[50%]'
              >
                <h2 
                  className='hidden lg:block sans font-medium text-[25px] text-[#272D43] pl-3 lg:pl-8 lg:text-[40px] xl:text-[70px]'
                >
                  <span 
                    className='font-bold'
                  >
                    Swéy:
                  </span> <br /> Shopping, made <br /> simple.
                </h2>
                <h2 
                  className='lg:hidden sans font-bold text-[25px] text-[#272D43] pl-3 lg:pl-8 lg:text-[35px] xl:text-[70px]'
                >
                  Swéy: Shopping, <br /> 
                  made simple.
                </h2>
                <p className='roboto font-normal text-[13px] text-[#94A2B3] pl-3 lg:pl-8 lg:text-[18px] xl:text-[25px]'>CAUTION: Shopping on Swéy is addictive</p>
                <div className='w-[90%] ml-auto mr-auto '>
                  <form 
                  onSubmit={ e => {
                    e.preventDefault();
                    // if(e.keyCode === 13 ){
                    //   alert('hola')
                    // };
                    console.log(e.target.search.value);
                    setInputSearch(e.target.search.value);
                    console.log('Busqueda desde market');
                    window.location.href = '/swey/#/productsearchresult'
                  }}
                    className="lg:hidden relative" 
                    role="search"
                  >
                    <input 
                      className="form-control lg:mt-4 ml-auto mr-auto placeholder:text-center rounded input bg-info bg-opacity-25 text-colorNavMobile w-[90%] h-[44px] rounded-pill ps-5 placeholder:fw-normal" 
                      type="search" 
                      placeholder="search the store" 
                      aria-label="Search" 
                      name='search'
                    />
                    <img 
                      src={iconSearch} 
                      alt="Icon Search" 
                      className='absolute left-2 top-[calc(50%_-_12px)]' 
                    />
                    <img 
                      src={iconPointBlueMobile} 
                      alt="Icon Point Blue Mobile" 
                      className='absolute -z-10 right-0 -top-28' 
                    />
                  </form>

                  {/* button GET THE APP DESKTOP*/}
                  <div className='h-[131px] flex-col justify-center items-start  hidden lg:flex '>
                    <button type='button' className='btnGradientRight rounded-pill roboto font-medium text-[18px] text-white fw-bolder w-[267px] h-[72px] ml-3 xl:ml-1'>Get the app</button>
                    <div className='flex items-center gap-2 mt-[23px] ml-4 xl:ml-2'>
                    <span className='roboto font-normal text-[18px] text-[#94A2B3]'>or</span>
                    <a href="#" className='sans font-bold text-[22px] no-underline text-[#299EF3]'>Meet Swéy ›</a>
                    </div>
                  </div>
                  <form 
                   onSubmit={ e => {
                    e.preventDefault();
                    // if(e.keyCode === 13 ){
                    //   alert('hola')
                    // };
                    console.log(e.target.search.value);
                    setInputSearch(e.target.search.value);
                    console.log('Busqueda desde market');
                    window.location.href = '/swey/#/productsearchresult'
                  }}
                    className="hidden lg:block relative mt-4 lg:ml-2 xl:w-[50%]" 
                    role="search"
                  >
                    <input 
                      className="form-control ml-auto mr-auto ps-5 bg-input h-12 w-1/2 rounded-pill placeholder:text-center placeholder:text-[#299ef373] lg:pl-8" 
                      type="search" 
                      placeholder="Search the store" 
                      aria-label="Search" 
                      name='search'
                    />
                    <img 
                      src={iconSearch} 
                      alt="Icon Search" 
                      className='absolute left-2 top-[calc(50%_-_12px)]' 
                    />
                  </form>
                </div>
              </div>

              {/* component card product mobile */}
              <div className=' mt-[79px] float-right lg:hidden'>
                {/* <CardProducts width='[400px]' background='#7854F7' /> */}
                <CardProductsHome 
                  amount={1} 
                  hiddeCounter={true} 
                  background='card-market' 
                  colorTitle='title-card-market' 
                  colorPrice='price-card-market' 
                />
              </div>

              {/* desktop */}
              <div className='mt-[79px]  hidden lg:grid grid-cols-2 grid-rows-2 gap-4 relative w-[50%]'>
                <CardProductsHome 
                  amount={4} 
                  background='card-market' 
                  hiddeCounter={true} 
                  colorTitle='title-card-market' 
                  colorPrice='price-card-market'
                  width='90%'
                />
                <img 
                  src={iconPointBlueMarket} 
                  alt="Icon Point Blue" 
                  className='absolute -z-10 -top-10' 
                />
              </div>
            </div>


            {/* check inputs */}
            <section className='flex justify-center pt-[14px] clear-both lg:hidden'>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="flexRadioDefault" 
                  id="flexRadioDefault1" 
                />
                <label className="form-check-label" htmlform="flexRadioDefault1"></label>
              </div>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="flexRadioDefault" 
                  id="flexRadioDefault2" 
                  defaultChecked 
                />
                <label className="form-check-label" htmlform="flexRadioDefault2"></label>
              </div>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="flexRadioDefault" 
                  id="flexRadioDefault3" 
                />
                <label className="form-check-label" htmlformm="flexRadioDefault3"></label>
              </div>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="flexRadioDefault" 
                  id="flexRadioDefault4"
                 />
                <label className="form-check-label" htmlformm="flexRadioDefault4"></label>
              </div>
            </section>
            {/* button GET THE APP mobile*/}
            <div className='h-[131px] flex flex-column justify-center items-center mt-[45px] lg:hidden'>
              <button 
                type='button' 
                className='btnGradientRight rounded-pill roboto font-medium text-[18px] text-white fw-bolder w-[267px] h-[72px]'
              >
                GET THE APP
              </button>
              <span className='roboto font-normal text-[18px] text-[#94A2B3]'>or</span>
              <a href="#" className='roboto font-bold text-[22px] no-underline text-[#299EF3]'>Meet Swéy ›</a>
            </div>
          </section>
        </div>

      </main>

        <section className='mt-[96px] lg:hidden'>
          <div className='flex justify-center items-center'>
            <h2 className='sans font-normal text-[22px] text-center tracking-widest'>Recommended For You</h2>
            <img 
              src={iconArrowBottom} 
              alt="Icon Arrow Bottom" 
              className='pb-2' 
            />
          </div>
          <div className='grid grid-cols-2'>
            <CardProducts  
            />
          </div>

          {/* <div>
            <CardProductsHome 
              amount={1} 
              hiddeCounter={true} 
            />
          </div>

          <div className='grid grid-cols-2 grid-rows-2'>
            <CardProductsHome 
              amount={4} 
              hiddeCounter={true} 
            />
          </div>

          <div>
            <CardProductsHome 
              amount={1} 
              hiddeCounter={true} 
            />
          </div>

          <div>
            <CardProductsHome 
              amount={1} 
              hiddeCounter={true} 
              />
          </div>

          <div className='grid grid-cols-2 grid-rows-2'>
            <CardProductsHome 
              amount={6} 
              hiddeCounter={true} 
            />
          </div> */}

          <div className='flex justify-center items-center mt-[69px]'>
            <img 
              src={logoSweyLoading} 
              alt="Logo Swey loading" 
              className='img-fluid' 
            />
          </div>
        </section>

        
        {/* recommended version desktop */}
        <section className='mt-[100px] hidden lg:block'>
          <div className='flex justify-start items-center pl-6 xl:pl-16 pb-4'>
            <h2 className='sans font-normal text-[22px] text-center xl:text-[30px]'>Recommended For You</h2>
            <img 
              src={iconArrowBottom} 
              alt="Icon Arrow Bottom" 
              className='pb-2' 
            />
          </div>
          
          <div className='grid grid-cols-4'>
            <CardProducts background='white' width='75'/>
          </div>


        </section>

        <div className='lg:flex justify-center items-center mt-[220px] hidden relative'>
            <img 
              src={logoSweyLoading} 
              alt="Logo Swey loading" 
              className='img-fluid' 
            />
            <img 
              src={iconPointBlueMarketBottom} 
              alt="Icon Point Blue Market" 
              className='absolute left-0 -z-10 bottom-0 h-[250px]' 
            />
        </div>

        {/* version desktop footer */}
        <footer className='hidden lg:flex justify-center items-center mt-[51px] lg:pb-4 border-t-2 rounded-t-2xl border-red-500 shadow-3xl p-2'>
          <Footer 
            hideSocial={false} 
          />
        </footer>

        {/* version mobile footer */}
        <footer className='pb-3 pt-3 lg:hidden'>
          <div className='flex justify-center text-center roboto font-normal'>
            <h2 
              className='text-[12px] text-[#272D4E]'
            >COPYRIGHT SWÉY - 
            <span>
              <a 
                href="#" 
                className='text-[#272D4E]'
              >
                TERMS & CONDITIONS PRIVACY POLICY
              </a>
            </span>
            </h2>
          </div>
        </footer>
    </>
  )
}

export default Market;