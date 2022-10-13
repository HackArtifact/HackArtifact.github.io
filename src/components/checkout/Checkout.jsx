import React, { useState, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

//components
import CheckoutPriceTotal from '../utilities/CheckoutPriceTotal';
import CardProductsHome from '../utilities/CardProductsHome';
import Footer from '../utilities/Footer';
import CartShopping from '../cartshopping/CartShopping';
import CartSaved from '../cartSaved/CartSaved';
import NavOfflineUser from '../utilities/NavOfflineUser';
import Modal from '../modal/Modal';
import CheckoutPaymentsData from '../payments/PaymentsData';
import CheckoutPaymentCard from '../payments/PaymentCard';
import CheckoutPaymentSuccess from '../payments/PaymentSuccess';
import PaymentCardSplit from '../payments/PaymentCardSplit';
import CheckoutPaymentLoginSwey from '../payments/PaymentLoginSwey';
import CheckouPaymentCardSwey from '../payments/PaymentCardSwey';
import CheckoutPaymentCard3 from '../payments/PaymentCard3';
import CheckoutPaymentSweySuccess from '../payments/PaymentSweySuccess';

//usecontext
import { ProductContext } from '../../context/ProductContext';

//styles
import '../../style/style.css';

//files
import cardMastercard from '../../assets/images/cardMastercad.png';
import logoSweyLoading from '../../assets/images/logoSweyLoading.png';
import cardVisa from '../../assets/images/cardVisa.png';
import pointBlueCheckout from '../../assets/images/pointBlueCheckout.png';
import pointBlueCheckoutBottomLeft from '../../assets/images/pointBlueCheckoutBottomLeft.png';
import pointBlueCheckoutBottomRight from '../../assets/images/pointBlueCheckoutBottomRight.png';
import iconMenu from '../../assets/icons/iconMenu.svg';
import iconMenuDark from '../../assets/icons/iconMenuDark.svg';
import iconCheckCheckout from '../../assets/icons/iconCheckCheckout.svg';
import iconInfoCheckout from '../../assets/icons/iconInfoCheckout.svg';
import iconArrowRightCheckout from '../../assets/icons/iconArrowRightCheckout.svg';

const Checkout = () => {
  const [menu, setMenu] = useState(false);
  const [showPayment, setShowPayment] = useState(0)

  const IconMenu = menu ? iconMenuDark : iconMenu;

  const { 
    clear, 
    cart, 
    saved, 
    handleSumSubtotal, 
    handleSumTotal, 
    modal1, 
    modal2, 
    modal3, 
    setModal1, 
    modalSplit1,
    modalSplit2,
    modalSplit3,
    modalSplit4,
    modalSplit5
  } = useContext(ProductContext);

  const titulo = cart.length === 0 ? 'No selected products' : 'Your Cart';

  const titulParaGuardados = saved.length === 0 ? 'You have no saved products!' : null;

  if(cart.length > 0){
    let price = 0
    cart.forEach(items => price + items.price)
    console.log(price)
  }
  return (
    <>
      <main className='bgColorMain'>
      <NavOfflineUser 
        colorNav='colorNavMobile'
        colorInputDesktop='input'
        colorSwey='colorNavMobile'
        loginDesktop='#272D4E'
        colorNavMobile='colorNavMobile'
        colorLogin='#272D4E'
        colorInputMobile='input'
      />

        <section className='mt-[19px] lg:hidden'>
          <div className='cart'>
            <div className='flex w-[80%] m-auto'>
              <h2 className='sans font-bold text-[13px] text-[#2B2B2C] border-b-2 border-sky-500 w-1/2 text-center'>Cart</h2>
              <h2 className='sans font-bold text-[13px] text-[#2B2B2C] border-b-2 w-1/2 text-center'><NavLink to="/checkoutsaved" className='no-underline text-inherit'>Saved</NavLink></h2>
            </div>
            <div className='flex items-center mt-[32px]'>
              <h2 className='mb-0 sans font-bold text-[25px] text-[#272D4E] pl-8 lg:pl-[39px] lg:text-[60px] '>Your Cart</h2>
              <img src={iconArrowRightCheckout} alt="Icon Arrow Right Checkout" />
            </div>
            <CardProductsHome amount={2} background='#FFFFFF' />
          </div>
          <div className='bgslide w-[90%] h-[10px] rounded-full ml-auto mr-auto mt-[10px] border-2'>
            <div className='w-[30%] h-full bg-[#009EF8] rounded-full'></div>
          </div>
          <a href="#" className='block text-center sans font-bold text-[22px] text-[#299EF3] no-underline mt-[9px] mb-2'>View More ›</a>
          <CheckoutPriceTotal />
          <div className='mt-[19px] lg:pl-[39px]'>
            <h2 className='sans font-bold text-[50px] text-[#272D4E] pl-8'>Your Cart</h2>
            <CardProductsHome amount={1}/>
            <CardProductsHome amount={1}/>
            <CardProductsHome amount={1}/>
            <CardProductsHome amount={1}/>
            <CardProductsHome amount={1}/>
          </div>
          <div className='mt-[31px]'>
            <CheckoutPriceTotal />
          </div>

          {/* SECTION SAVED */}
          <div className='saved'>

          </div>
        </section>

        {/* section desktop */}
        <section className='hidden lg:flex'>
          {/* **********************ITEM 1 */}
          <div className='itemLeft w-1/2 text-center'>
            <h2 className='sans font-bold text-[85px] text-[#272D4E] mt-[26px] lg:text-[60px]'>{titulo}</h2>
            <div className='overflow-y-scroll overflow-x-hidden w-[80%] h-[600px] bg-white rounded-2xl ml-8 m-auto scrollbar scrollbar-thumb-[#33A0FF] scrollbar-track-gray-100'>
              <CartShopping /> 
            </div>
          </div>

          <div className='itemRight w-1/2 mt-[100px] relative'>
            <img src={pointBlueCheckout} alt="Point Blue Checkout" className='absolute right-0 top-0 -z-10' />
            <div className='flex justify-center items-center gap-2 w-[60%] h-[111px] ml-auto mr-auto bg-[#F1FCFF] rounded-full'>
              <div className='w-[100px]'>
                <img src={iconCheckCheckout} alt="Icon Check" className='w-74px h-[74px]' />
              </div>

              <div>
                <p className='roboto font-normal text-[18px] text-[#545454] text-center'>
                All Purchases that are made via Swéy Payment systems on Swéy platfroms are protected by Buyer Prtection
                </p>
              </div>
              <div className='w-[230px] flex flex-col items-center'>
                <img src={iconInfoCheckout} alt="Icon Info Checkout" className='w-[30px] h-[30px]' />
                <a href="#" className='roboto font-bold text-[18px] text-[#299EF3]'>More Info ›</a>
              </div>
            </div>

            <section className='flex items-center justify-center gap-2 mt-4'>
            <div className='bg-white w-1/2 h-auto rounded-xl pl-2 pr-2 pt-2 shadow-2xl'>
              <div className='flex justify-between items-center'>
                <h3 className='poppins font-normal text-[18px] text-[#262626]'>Subtotal</h3>
                <span className='poppins font-normal text-[18px] text-[#262626]'>$ {handleSumSubtotal()}</span>
              </div>
              <div className='flex justify-between items-center pt-[23px]'>
                <h3 className='poppins font-normal text-[18px] text-[#262626]'>Shipping fee</h3>
                <span className='poppins font-normal text-[18px] text-[#262626]'>$ {cart.length > 0 ? 20 : 0}</span>
              </div>
              <div className='flex justify-between items-center pt-[23px]'>
                <h3 className='poppins font-normal text-[18px] text-[#262626]'>Coupon</h3>
                <input type="text" className='w-[50%]' placeholder='Type Here' />
              </div>
              <hr className='w-[90%] m-auto mt-1' />
              <div className='flex justify-between items-center pt-[23px]'>
                <h3 className='poppins font-extrabold text-[18px] text-[#22262A]'>TOTAL</h3>
                <span className='poppins font-normal text-[18px] text-[#262626]'>$ {cart.length > 0 ? handleSumTotal() : 0}</span>
              </div>
              <button 
                type='button' 
                className='bg-[#33A0FF] mt-[60px] mb-3 w-[80%] h-[50px] block ml-auto mr-auto rounded-lg sans font-extrabold text-[20px] text-white'
                onClick={() => setModal1(!modal1)}
              >
                Check Out
              </button>
              {modal1 && 
                <Modal>
                  <CheckoutPaymentsData />
                </Modal>
              }

              {modal2 &&
                <Modal>
                  <CheckoutPaymentCard />
                </Modal>
              }

              {modal3 &&
                <Modal>
                  <CheckoutPaymentSuccess />
                </Modal>
              }

              { modalSplit1 &&
                <Modal>
                  <PaymentCardSplit />
                </Modal>
              }

              { modalSplit2 &&
                <Modal>
                  <CheckoutPaymentLoginSwey />
                </Modal>
              }

              {modalSplit3 &&
                <Modal>
                  <CheckouPaymentCardSwey />
                </Modal>
              }

              {modalSplit4 &&
                <Modal>
                  <CheckoutPaymentCard3 />
                </Modal>
              }

              {modalSplit5 &&
                <Modal>
                  <CheckoutPaymentSweySuccess />
                </Modal>
              }
            </div>

            <div className='bg-white w-1/2 h-auto rounded-xl pl-2 pr-2 mr-3 pt-2 shadow-2xl'>
              <div className='flex justify-between items-center'>
                <h3 className='sans font-bold text-[16px] text-[#000000]'>Payments methods</h3>
                <span className='sans font-bold text-[12px] text-[#4C6FFF]'><a href="#" className='no-underline'>Edit</a></span>
              </div>
              <div className='bg-white flex items-center mt-[20px]'>
                <div>
                  <img src={cardMastercard} alt="Card Mastercard" />
                </div>
                <div className='pl-2'>
                  <h2 className='sans font-normal text-[16px] text-[#27272E]'>Mastercard: 5432</h2>
                  <h3 className='sans font-normal text-[16px] text-[#425466]'>Exp. date: <span className='font-bold'>12/20</span></h3>
                </div>
              </div>
              <div className='bg-white flex items-center mt-[20px]'>
                <div>
                  <img src={cardVisa} alt="Card VISA" />
                </div>
                <div className='pl-2'>
                  <h2 className='sans font-normal text-[16px] text-[#27272E]'>Mastercard: 5432</h2>
                  <h3 className='sans font-normal text-[16px] text-[#425466]'>Exp. date: <span className='font-bold'>12/20</span></h3>
                </div>
              </div>

              <button type='button' className='bg-[#4C6FFF] mt-[60px] mb-3 w-[80%] h-[50px] block ml-auto mr-auto rounded-lg sans font-extrabold text-[20px] text-white'>Show More</button>
            </div>
            </section>

            <section className='flex justify-center items-center gap-4 mt-[54px]'>
              <div>
                <button type='button' className='btnGradientRight w-[262px] h-[72px] text-white roboto font-medium text-[18px] rounded-pill'>Go shopping?</button>
              </div>
              <div>
                <span className='roboto font-bold text-[18px] text-[#94A2B3]'>or</span>
                <span className='pl-2'>
                  <a 
                    onClick={() => clear()} 
                    className='no-underline text-[#299EF3] roboto font-bold text-[22px] cursor-pointer'
                  >
                    Clear Cart ›
                  </a>
                </span>
              </div>
            </section>
            
          </div>
        </section>

        <div className='hidden lg:block w-[90%] h-[5px] bgCheckout ml-auto mr-auto rounded-xl mt-[284px]'></div>

        <section className='hidden lg:block'>
          <h2 className='mt-[12px] sans font-bold text-[70px] text-[#272D4E] pl-8 xl:pl-20 relative'>Your Saved Looks</h2>
          <img src={pointBlueCheckoutBottomLeft} alt="Point Blue Checkout" className='absolute left-0 -z-10' />
          <div className='grid grid-cols-4 gap-4 mt-[49px]'>
            {saved.length > 0 ? <CartSaved /> : <h2 className='w-[700px] pl-5 ml-10'>¡ You have no saved products !</h2>}
            
          </div>
          <div className='flex justify-center items-center mt-[82px]'>
            <button type='button' className='btnGradientRight w-[262px] h-[72px] text-white roboto font-medium text-[18px] rounded-pill'>Go shopping?</button>
          </div>
          <div className='flex justify-center items-center pt-[97px]'>
            <img src={logoSweyLoading} alt="Logo Swey Loading" />
          </div>
        </section>

        <footer className='mt-[45px] rounded-t-xl border-t-2 border-red-600 p-2 lg:hidden'>
          <Footer hideSocial={true} />
        </footer>

      </main>
    </>
  )
}

export default Checkout;