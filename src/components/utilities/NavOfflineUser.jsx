import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

//styles
import '../../style/style.css';

//usecontext
import { ProductContext } from '../../context/ProductContext';

//components
import ProductSearchResult from '../store/ProductSearchResult';

//files
import logoSwey from '../../assets/icons/logoSwey.svg';
import iconMenu from '../../assets/icons/iconMenu.svg';
import iconMenuDark from '../../assets/icons/iconMenuDark.svg';
import iconSearch from '../../assets/icons/iconSearch.svg';
import iconSearchWhite from '../../assets/icons/iconsearchwhite.svg';
import iconCartLoaded from '../../assets/icons/iconCartLoaded.svg';
import iconProfileLogin from '../../assets/images/iconProfileLoggedin.png';

const NavOfflineUser = ({ 
  colorSwey, 
  iconWhite, 
  iconSearchMobileWhite, 
  colorNav, 
  colorNavMobile, 
  colorInputDesktop, 
  colorLogin, 
  colorInputMobile, 
  loginDesktop,
  hiddeInput,
  bgCoverMobile,
  colorTextInputMobile,
  colorTextInputDesktop
}) => {
  const [menu, setMenu] = useState(false);
  const IconMenu = menu ? iconMenuDark : iconMenu;
  let iconsearch = iconWhite ? iconSearchWhite : iconSearch;
  let iconsearchmobile = iconSearchMobileWhite ? iconSearchWhite : iconSearch;


  const { cart, setInputSearch, setStateInputSearch, stateInputSearch } = useContext(ProductContext);

  const navigation = cart.length === 0;



  return (
    <>
      <nav 
        className={menu ? 
          `navbar navbar-expand-lg bg-[#C4D3FF] lg:w-[100%] ml-auto mr-auto ps-2 pe-2 rounded-b-3xl shadow-2xl` 
                        : 
          `navbar navbar-expand-lg ps-2 pe-2 lg:w-[100%] ml-auto mr-auto bg-${bgCoverMobile}`}
      >
        <div className="container-fluid p-0">
          <div className='flex items-center w-[140px] xml:w-[170px] xml:pl-10'>
            <NavLink 
              to='/home'>
                <img 
                  src={logoSwey} 
                  alt="Logo Swey" 
                  className='navbar-brand me-0 mb-1' 
                />
            </NavLink>
            <NavLink 
              to='/home' 
              className={`no-underline ${colorSwey}`}
            >
              <h1
                className={menu ?
                  'mb-0 roboto font-black text-[21px] text-[#000000] pl-2'
                  :
                  `mb-0 roboto font-black text-[21px] text-${colorSwey} pl-2`}
              > S W É Y
              </h1>
            </NavLink>
          </div>

          <button 
            className="navbar-toggler shadow-none border-0" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <img 
              onClick={() => setMenu(!menu)} 
              src={IconMenu} 
              alt="Icon Menu" 
              className='' />
          </button>

          {/* desktop nav */}
          <ul 
            className={`navbar-nav mb-2 mb-lg-0 d-none d-lg-flex justify-center flex-wrap lg:w-[380px] xl:w-auto xxl:ml-10 xml:ml-10`}
          >
            <li className="nav-item">
              <a 
                className={`nav-link text-${colorNav} fw-bold roboto`} 
                aria-current="page" 
              >
                Sell
              </a>
            </li>
            <li className="nav-item">
              <NavLink 
                to='/market' 
                className={`nav-link text-${colorNav} fw-bold roboto`} 
              >
                Marketplace
              </NavLink>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link text-${colorNav} fw-bold roboto`} 
              >
                Community
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link text-${colorNav} fw-bold roboto`} 
              >
                Join Swéy
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link text-${colorNav} fw-bold roboto`} 
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link text-${colorNav} fw-bold roboto`} 
              >
                Resources
              </a>
            </li>
          </ul>

          <div 
            className="collapse navbar-collapse justify-content-end align-items-center" 
            id="navbarSupportedContent"
          >
           { hiddeInput ? '' 
                        :
            <form 
            onSubmit={ e => {
              e.preventDefault();
              // if(e.keyCode === 13 ){
              //   alert('hola')
              // };
              console.log(e.target.search.value);
              setInputSearch(e.target.search.value);
              console.log('Busqueda offline');
              window.location.href = '/swey/#/productsearchresult'
            }}
              className="mobile d-flex d-lg-none mt-3 relative" 
              role="search"
            >
              <input 
                className={`form-control m-auto ps-5 bg-${colorInputMobile} w-75 h-12 text-${colorTextInputMobile} rounded-pill placeholder:text-right `
              } 
                type="search" 
                placeholder="Search the store" 
                aria-label="Search"
                name='search'
              />
                <img 
                  src={iconsearchmobile} 
                  alt="Icon Search" 
                  className='absolute left-[calc(20%_-_12px)] top-[calc(50%_-_12px)]' 
                />
            </form>}

            {/* mobile nav */}
            <ul className="navbar-nav text-center mb-2 mb-lg-0 d-lg-none">
              <li className="nav-item">
                <a className={`nav-link text-${colorNavMobile} fw-normal roboto`}>
                  Sell
                </a>
              </li>
              <li className='nav-item'>
                <NavLink 
                 to='/market'
                 className={`nav-link text-${colorNavMobile} fw-normal roboto`}
                >
                  Marketplace
                </NavLink>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link text-${colorNavMobile} fw-normal roboto`} 

                >
                  Community
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link text-${colorNavMobile} fw-normal roboto`} 

                >
                  Join Swéy
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link text-${colorNavMobile} fw-normal roboto`} 

                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link text-${colorNavMobile} fw-normal roboto`} 

                >
                  Resources
                </a>
              </li>
            </ul>

            {navigation ?
              <>
                {/* login and get started mobile */}
                <div className='flex justify-center items-center gap-4 w-[90%] mr-auto ml-10 pl-15 d-lg-none xl-gap-4'>
                  <NavLink 
                    to='/login' 
                    className={`no-underline roboto font-medium text-[18px] text-[${colorLogin}]`}
                  >
                    Log In
                  </NavLink>
                  <NavLink 
                    to='/home' 
                    className='bg-[#7854F7] w-[120px] h-[47px] roboto font-medium text-[18px] text-[#ffffff] no-underline mb-0 flex justify-center items-center rounded-md'
                  >
                    Get Started
                  </NavLink>
                </div>

                <div className='flex justify-content-end relative'>
                  {hiddeInput ? ''
                              :
                              <form 
                              onSubmit={ e => {
                                e.preventDefault();
                                // if(e.keyCode === 13 ){
                                //   alert('hola')
                                // };
                                console.log(e.target.search.value);
                                setInputSearch(e.target.search.value);
                                console.log('Busqueda offline');
                                window.location.href = '/swey/#/productsearchresult'
                              }}
                              className="d-none d-lg-flex" 
                              role="search"
                            >
                              <input 
                                className={`form-control bg-${colorInputDesktop}  placeholder:text-[#a8b153] text-${colorTextInputDesktop} rounded-pill placeholder:text-center border-0 ps-5 xl:mr-3 lg:w-[300px]xl:w-[300px] placeholder:roboto`} 
                                type="search" 
                                placeholder="Search the store" 
                                aria-label="Search"
                                name='search'
                                
                              />
                              <img 
                                src={iconsearch} 
                                alt="Icon Search" 
                                className='absolute left-[calc(5%_-_12px)] top-[calc(50%_-_12px)]' 
                              />
                            </form>        
                  }

                  {/* login and get started desktop */}
                  <div className='d-none d-lg-flex align-items-center gap-3 '>
                    <NavLink 
                      to='/login' 
                      className={`text-[${loginDesktop}] no-underline roboto font-medium text-[18px]  w-[60px] xl:w-[60px]`}
                    >
                      Log In
                    </NavLink>
                    <NavLink 
                      to='/home' 
                      className='bg-[#7854F7] w-[120px] h-[47px] roboto font-medium text-[18px] text-[#ffffff] no-underline mb-0 flex justify-center items-center rounded-md xml:mr-5 xxl:mr-20'
                    >
                      Get Started
                    </NavLink>
                  </div>
                </div>
              </>

              :

              <>
                {/* login and get started mobile */}
                <div className='flex justify-center items-center w-[100%] mr-auto ml-auto xl-gap-4 lg:hidden'>
                  <NavLink 
                    to='/checkout' 
                    className='text-[#272D4E] no-underline roboto font-medium text-[18px] lg:text-white relative'
                  >
                    <img 
                      src={iconCartLoaded} 
                      alt="Icon Cart" 
                      className='w-[51px] h-[51px] pb-2' 
                    />
                     <span className="position-absolute top-0 left-2  translate-middle badge rounded-pill bg-danger">
                      {cart.length > 0 ? cart.length : ''}
                      <span className="visually-hidden">unread messages</span>
                  </span>
                  </NavLink>
                  <NavLink 
                    to='/login'
                  >
                    <img 
                      src={iconProfileLogin} 
                      alt="Icon Profile" 
                      className='w-[94px] h-[94px]' 
                    />
                  </NavLink>
                 
                </div>

                <div className='flex justify-content-end relative'>
                  <form 
                    className="d-none d-lg-flex" 
                    role="search"
                    onSubmit={ e => {
                      e.preventDefault();
                      // if(e.keyCode === 13 ){
                      //   alert('hola')
                      // };
                      console.log(e.target.search.value);
                      setInputSearch(e.target.search.value);
                      console.log('Busqueda offline');
                      window.location.href = '/swey/#/productsearchresult'
                    }}
                  >
                    <input 
                      className={`form-control bg-${colorInputDesktop}  placeholder:text-[#a8b153] text-${colorTextInputDesktop} rounded-pill placeholder:text-center border-0 ps-5 xl:mr-3 lg:w-[300px]xl:w-[300px] placeholder:roboto`}
                      type="search" 
                      placeholder="Search the store" 
                      aria-label="Search"
                      name='search' 
                    />
                    <img 
                      src={iconSearch} 
                      alt="Icon Search" 
                      className='absolute left-[calc(5%_-_12px)] top-[calc(50%_-_12px)]' 
                    />
                  </form>

                  {/* login and get started desktop */}
                  <div className='hidden lg:flex items-center mt-2 relative'>
                    <NavLink 
                      to='/checkout'
                      title='Checkout' 
                    >
                      <img 
                        src={iconCartLoaded} 
                        alt="Icon Cart" 
                        className='w-[44px] h-[44px] pb-2' 
                      />
                    </NavLink>
                    <NavLink 
                      to='/login'
                      title='Login'
                    >
                      
                        <img 
                          src={iconProfileLogin} 
                          alt="Icon Profile" 
                          className='w-[54px] h-[54px]' 
                        />
                    </NavLink>
                    <span className="position-absolute top-0 left-0  translate-middle badge rounded-pill bg-danger">
                      {cart.length > 0 ? cart.length : ''}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </div>
                </div>
              </>
            }

          </div>
        </div>
      </nav>
    </>
  );
};

export default NavOfflineUser;