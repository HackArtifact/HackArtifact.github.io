import React, { useContext } from 'react';
import iconBtnMore from '../../assets/icons/iconBtnMore.svg';
import '../../style/style.css';

import { ProductContext } from '../../context/ProductContext';


const ModalSearchFilter = () => {

  const { modalSearchFilter ,setModalSearchFilter } = useContext(ProductContext);

  return (
    <>
      <main className='border-2 w-[60%] ml-auto mr-auto mt-[80px] lg:block hidden bg-white'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <h2 className='sans font-bold text-[24px] text-[#252B42] mt-3 ml-3'>Marketplace Filters</h2>
            <span
              className='cursor-pointer bg-red-500 w-[30px] h-auto text-white rounded-full flex items-center justify-center '
              onClick={() => {
                setModalSearchFilter(!modalSearchFilter);
              }}
            >X</span>
          </div>
          <div className='border-2 p-2'>
            <div className="dropdown show flex justify-center">
              <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Popularity
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </div>

            <div className='grid grid-cols-3 grid-rows-2 gap-2 rounded-xl'>
              <div className='1 col-start-1 col-end-2 row-start-1 row-end-3'>
                {/* search input desktop START */}
                <form className="d-flex d-none d-lg-block" role="search">
                  <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
                </form>
                <div className='border-2'>
                  <ul className="nav flex-column pr-2">
                    <li className="nav-item flex items-center justify-between">
                      <a className="nav-link active text-black" href="#">Accesories</a><span><img src={iconBtnMore} alt="Icon Button More" /></span>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-black" href="#">View all</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-black" href="#">Bags</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link  text-black" href="#">Belts</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link  text-black" href="#">Cosmetics</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link  text-black" href="#">Hats</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-black" href="#">Jewelry</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='2 p-2 border-2'>
                <div className="custom-control custom-radio flex gap-2">
                  <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" defaultChecked />
                  <label className="custom-control-label" htmlFor="customRadio1">Red</label>
                </div>
                <div className="custom-control custom-radio flex gap-2">
                  <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadio2">Blue</label>
                </div>
                <div className="custom-control custom-radio flex gap-2">
                  <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadio2">Brown</label>
                </div>
                <div className="custom-control custom-radio flex gap-2">
                  <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadio2">Orange</label>
                </div>
                <div className="custom-control custom-radio flex gap-2">
                  <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadio2">Yellow</label>
                </div>
                <div className="custom-control custom-radio flex gap-2">
                  <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadio2">Pink</label>
                </div>
              </div>

              <div className='3 border-2 p-2'>
                <label htmlFor="customRange1" className="form-label">Filter by price</label>
                <input type="range" className="form-range" id="customRange1" />
                <div className='flex justify-center gap-2'>
                <div className='w-1/2 border-2 h-19 '>
                  <input type="number" name="" id="" placeholder='1' className='w-full placeholder:pl-4' />
                </div>
                <div className='w-1/2 border-2 h-19'>
                  <input type="number" name="" id="" placeholder='2' className='w-full placeholder:pl-4'/>
                </div>
                </div>
              </div>

              <div className='4 p-2 border-2'>
                <div className="custom-control custom-radio flex gap-2">
                  <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" defaultChecked />
                  <label className="custom-control-label" htmlFor="customRadio1">Extra Large</label>
                </div>
                <div className="custom-control custom-radio flex gap-2">
                  <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadio2">Large</label>
                </div>
                <div className="custom-control custom-radio flex gap-2">
                  <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadio2">Medium</label>
                </div>
                <div className="custom-control custom-radio flex gap-2">
                  <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadio2">Small</label>
                </div>
                <div className="custom-control custom-radio flex gap-2">
                  <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadio2">Extra Small</label>
                </div>
              </div>

              <div className='5 2 p-2 border-2'>
                <div className="custom-control custom-checkbox flex gap-2">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1">Adidas</label>
                </div>
                <div className="custom-control custom-checkbox flex gap-2">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1">Armani</label>
                </div>
                <div className="custom-control custom-checkbox flex gap-2">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1">Calvin Kleis</label>
                </div>
                <div className="custom-control custom-checkbox flex gap-2">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1">Columbia</label>
                </div>
                <div className="custom-control custom-checkbox flex gap-2">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1">Converse</label>
                </div>
                <div className="custom-control custom-checkbox flex gap-2">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1">Dockers</label>
                </div>

                <button type='button' className='w-[247px] h-[60px] text-white btnGradientRight block ml-auto mr-auto mt-4 rounded-full'>Apply</button>
              </div>
            </div>
          </div>
        </div>
        </main>
    </>
  )
}

export default ModalSearchFilter;