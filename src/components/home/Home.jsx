import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

//components
import CardProductsHome from '../utilities/CardProductsHome';
import NavOfflineUser from '../utilities/NavOfflineUser';

//usecontext
import productContext from '../../App'

//styles
import '../../style/style.css';

//files
import iconTwitter from '../../assets/icons/twitter.svg';
import iconPointRedHome from '../../assets/icons/iconPointRedHome.svg';
import iconSweyCoin from '../../assets/icons/iconSweyCoin.svg';
import iconFacebook from '../../assets/icons/facebook.svg';
import iconRss from '../../assets/icons/rss.svg';
import iconCircleGoldFine from '../../assets/icons/iconCircleGoldfine.svg';
import iconPointRightHome from '../../assets/icons/iconPointRightHome.svg';
import iconInstagram from '../../assets/icons/instagram.svg';
import iconVerifiedHome from '../../assets/icons/iconVerifiedHome.svg';
import iconSupport from '../../assets/icons/iconSupport.svg';
import iconPadLock from '../../assets/icons/iconPadLock.svg';
import iconCircleGold from '../../assets/icons/iconCircleGold.svg';
import iconW from '../../assets/icons/iconW.svg';
import cardVISA from '../../assets/images/cardVISA.png';
import cardAstronaut from '../../assets/images/cardAstronaut.png';
import cardCity from '../../assets/images/cardCity.png';
import cardPeople from '../../assets/images/cardPeople.png';
import textWOLV from '../../assets/images/textWOLV.png';
import logoSweyBlue from '../../assets/images/logoSweyBlue.png';
import cardLions from '../../assets/images/cardLions.png';
import cardHeaderDesktop from '../../assets/images/cardHeaderDesktop.png';
import cardLionsDesktop from '../../assets/images/cardLionsDesktop.png';
import clothesFull from '../../assets/images/clothesFull.png';
import imageSwey from '../../assets/images/imageSwey.png';

const Home = () => {
  const user = useContext(productContext)

  //  document.querySelector("meta[name='theme-color']").setAttribute("content", "#ffffff");
  //   console.log(document.querySelector('head'))

  return (
    <>
    <main className='bgColorMain'>
    <NavOfflineUser colorSwey='colorNavMobile' colorNavMobile='colorNavMobile' colorLogin='#000000' colorNav='colorNavMobile' loginDesktop='#272D4E' colorInputDesktop='input' colorInputMobile='input'  />

      
      {/* <article className='overflow-hidden'> */}
        <section className=' flex  pt-8 lg:pt-0 lg:items-center relative'>
          <div className='w-1/2 lg:flex lg:flex-col lg:justify-center'>
            <h2 className='sans font-medium pl-2 text-[25px] text-[#272D4E] relative lg:text-[70px] md:text-[50px] med:text-[40px] mdnine:text-[60px] xl:pl-14'>
              <span className='font-bold'>Swéy:</span><br />
              your shopping,<br />
              made simple.
            </h2>
            {user && <p>hola</p>}
            <p className='roboto font-normal text-[14px] text-[#94A2B3] pl-2 absolute w-[60%] lg:w-full lg:relative lg:text-[20px] lg:pl-4 med:text-[20px] xl:pl-14'>
              Swéy is the perfect location to sell your products, or shop globally for all your needs
            </p>

            {/* Version desktop go shopping */}
            <section className='hidden lg:flex lg:flex-row lg:pl-3 lg:items-center lg:gap-2 lg:mt-6 xl:pl-14'>
              <NavLink to='/market' className='w-[70%] h-[72px] btnGradientRight rounded-full text-white lg:w-[267px] no-underline flex items-center justify-center' >Go Shopping?</NavLink>
              <span className='text-[18px] roboto font-bold text-[#94A2B3]'>or</span>
              <a href="#" className='roboto text-[22px] text-[#299EF3] font-bold no-underline'>Get to Know us ›</a>
            </section>
            
            {/* end version desktop go shoping */}
          </div>
          
          <div className='w-1/2 mt-8 lg:hidden'>
            <img src={clothesFull} alt="Clothes Cover" className='img-fluid float-right mdnine:w-[80%]' />
          </div>
          <div className='w-1/2 hidden lg:block'>
            <img src={cardHeaderDesktop} alt="Clothes Cover" className='img-fluid' />
          </div>
        </section>
        

        {/* Version mobile go shopping */}
        <section className='flex flex-col items-center clear-both lg:hidden mt-[84px]'>
          <NavLink to='/market' className='w-[266px] h-[72px] btnGradientRight text-white rounded-full lg:w-[267px] no-underline flex justify-center items-center roboto font-medium text-[18px]' >Go Shopping?</NavLink>
          <span className='text-[18px] text-[#94A2B3] pt-2 roboto font-bold '>or</span>
          <a href="#" className='roboto text-[19px] font-bold no-underline text-[#299EF3]'>Get to Know us ›</a>
        </section>
        {/* End Version mobile go shopping */}
    </main>


        <section className='mt-[119px] lg:mt-[167px] '>
          <h2 className='sans text-center font-bold text-[25px] text-[#272D4E] lg:text-[40px]'>
            Your eCommerce <br />made simple
          </h2>
          <button type='button' className='w-[200px] h-[54px] rounded-full block ml-auto mr-auto mt-[10px] btnGradientRight  text-white text-[15px] text-center lg:w-[267px] ;lg:h-[72px] roboto lg:font-medium lg:text-[18px]'>Open Your New Store!</button>

          <section className='hidden lg:flex lg:justify-center w-[90%] m-auto'>
            <div className='w-1/2'>
              <div className='float-left flex flex-col mt-[27px] lg:mt-0'>
                <img src={cardVISA} alt="Card VISA" className='w-[243px] h-[193px] lg:w-[333px] lg:h-[260px]' />
                <a href="#" className='roboto font-bold text-[18px] text-[#299EF3] block text-center no-underline'>Shop Fashion ›</a>
              </div>
              <div className='clear-both float-right flex flex-col items-center mt-[45px] lg:items-end xl:items-center xl:mr-28'>
                <img src={cardAstronaut} alt="Card Astronaut" className='w-[288px] h-[193px] lg:w-[403px] lg:h-[236px] lg:ml-[100px]' />
                <a href="#" className='roboto font-bold text-[18px] text-[#299EF3] block text-center no-underline'>Shop Thrift ›</a>
              </div>
            </div>
            <div className='grid grid-cols-2 grid-rows-2 mr-[50px] mt-[50px] gap-4 w-1/2'>
              <CardProductsHome amount={4} width='350px' height='325px' hiddeCounter={true} />
            </div>
          </section>

          <div className='float-left flex flex-col mt-[27px] lg:mt-0 lg:hidden'>
            <img src={cardVISA} alt="Card VISA" className='w-[243px] h-[193px] lg:w-[433px] lg:h-[360px]' />
            <a href="#" className='roboto font-bold text-[18px] text-[#299EF3] block text-center no-underline'>Shop Fashion ›</a>
          </div>
          <div className='clear-both float-right flex flex-col items-center mt-[45px] lg:float-left lg:hidden'>
            <img src={cardAstronaut} alt="Card Astronaut" className='w-[288px] h-[193px] lg:w-[503px] lg:h-[336px] lg:ml-[100px]' />
            <a href="#" className='roboto font-bold text-[18px] text-[#299EF3] block text-center no-underline'>Shop Thrift ›</a>
          </div>


        {/* card products mobile */}
        <section className='w-[90%] ml-auto mr-auto clear-both pt-[74px] flex flex-col gap-4 lg:hidden relative max-w-[482px]'>
          <CardProductsHome amount={2} hiddeCounter={true} background='light' />
          <img src={iconCircleGold} alt="Icon Circle Gold" className='absolute top-[75%] -right-[1%] w-[70px] lg:hidden' /> 
          <img src={iconCircleGoldFine} alt="Icon Circle Gold" className='absolute top-[75%] -left-[20%] w-[70%] -z-10' />
          <img src={imageSwey} alt="Image Swey" className='absolute top-[380px] right-[50%]  w-[80px] h-[82px] -z-10' />
        </section>

        {/* check inputs */}
        <section className='flex justify-center w-[90%] ml-auto mr-auto mt-[23px] lg:hidden'>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
            <label className="form-check-label" htmlform="flexRadioDefault1"></label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label className="form-check-label" htmlform="flexRadioDefault2"></label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
            <label className="form-check-label" htmlformm="flexRadioDefault3"></label>
          </div>
        </section>

        {/* card city with points right */}
        <div className='relative w-screen ml-auto mr-auto lg:hidden max-w-[70%]'>
          <img src={cardCity} alt="Card City" className='w-[80%] md:w-[50%] h-full ml-auto mr-auto mt-[54px]' />
          <img src={iconPointRightHome} alt="Icon Point right" className='absolute bottom-0 right-0 -z-10' />
          <img src={iconCircleGold} alt="Icon Circle Gold" className='absolute -bottom-[3%] right-[calc(25%_-_50px)] w-[20%]' /> 
        </div>
        </section>

        <section className='mt-[120px] w-[90%] ml-auto mr-auto flex flex-column lg:hidden'>
          <h2 className='text-[#270909] text-left pl-2 sans font-bold text-[22px]'>Shop Without Limits</h2>
          <p className='roboto font-normal text-[12px] text-[#545454]'>
            The Swéy Platform is designed for users to find exactly what they are looking for at the best rates across the internet. The website works with you to match your your desires, help you find sustainable clothing or tech, and help you find sold out items around the world
          </p>
          <NavLink to='/market' className='ml-auto mr-auto mt-[20px] w-[200px] h-[54px] rounded-full bg-[#70C217] text-white roboto font-medium text-[16px] no-underline flex items-center justify-center' >Go To Shop</NavLink>
        </section>


        {/* card city desktop */}
        <section className='hidden lg:flex mt-[120px]'>
          <div className='w-1/2 flex relative'>
            <div className='absolute top-0 -z-10 left-0 xl:left-20'>
              <img src={iconSweyCoin} alt="Icon Swey Coin" className='w-[300px]' />
            </div>
            <div className='absolute -bottom-40 right-0 pr-4 w-[70%]'>
              <h2 className='sans font-bold text-[36px] text-[#2568B4] lg:text-[24px]'>Swéy Coin</h2>
              <p className='roboto font-normal text-[18px] text-justify text-[#545454] lg:text-[14px]'>
                The Swéy Platform features a modern reward system, designed specifically to give you the best possible value. You can accumulate coins by using the store.
                Once you have some coins they will fluctuate in value over time going up and down based on the activity we see on the store. Making Swéy coin a free investment in modern shopping.
              </p>
            </div>
          </div>
          <div className='w-1/2 flex'>
            <section className='mt-[40px] w-1/2 ml-auto mr-auto lg:flex flex-column hidden relative'>
            <img src={iconCircleGold} alt="Icon Circle Gold" className='absolute -top-5 right-[calc(50%_-_60px)] w-[50px]' />
              <h2 className='sans font-bold text-[36px] text-[#2568B4] mb-0 lg:text-[24px]'>Shop<br />Without Limits</h2>
              <p className='roboto font-normal text-[18px] text-[#545454] pt-2 lg:text-[14px]'>
                The Swéy Platform is designed for users to find exactly what they are looking for at the best rates across the internet. The website works with you to match your your desires, help you find sustainable clothing or tech, and help you find sold out items around the world
              </p>
              <button type='button' className='ml-auto mr-auto mt-[20px] w-[200px] h-[54px] rounded-full bg-[#70C217] text-white roboto font-medium text-[16px]'>Go To Shop</button>
            </section>
            <div className='w-1/2 ml-auto mr-auto hidden lg:block relative' >
              <img src={cardCity} alt="Card City" className='img-fluid' />
              <img src={iconPointRedHome} alt="Icon Point Red" className='absolute -bottom-28 right-0 -z-10 xl:-bottom2-20 xl:right-[calc(50%_-_50px)]' />
              <img src={iconCircleGold} alt="Icon Circle Gold" className='absolute -top-14 left-[calc(50%_-_135px)] w-[70px]' /> 
              <img src={imageSwey} alt="Image Swey" className='absolute -top-14 -left-14 w-[174px] h-[202px] -z-10' />
              <img src={iconW} alt="icon W SWEY" className='absolute -top-14 left-10 w-[274px] h-[202px] -z-10' />
              <img src={iconCircleGoldFine} alt="Icon Circle Gold" className='absolute top-24 left-3 w-[150px]' />
            </div>
          </div>
        </section>

        <section className='flex mt-[42px] items-end w-[90%] ml-auto mr-auto lg:mt-[300px] lg:hidden'>
          <div className='left w-1/2'>
            <img src={textWOLV} alt="Text WOLV" className='img-fluid' />
          </div>
          <div className='right w-1/2 relative'>
            <img src={cardPeople} alt="Card People" className='img-fluid' />
            <img src={iconCircleGold} alt="Icon Circle Gold" className='absolute -top-8 right-[calc(50%_-_50px)] md:right-[calc(50%_-_10px)] w-[100px] -z-10' /> 
          </div>
        </section>


        {/* version desktop */}
        <section className='hidden lg:block mt-[300px] w-[90%] h-[700px] ml-auto mr-auto'>
          <h2 className='pl-[100px] sans font-bold text-[45px] text-[#272D4E]'>The Modern Fashion Scene:</h2>
          <div className='flex mt-8'>
            <div className='w-1/2'>
              <img src={cardPeople} alt="Card People" className='w-[400px] h-[600px] m-auto' />
            </div>
            <div className='w-1/2'>
              <img src={textWOLV} alt="Text WOLV" className='img-fluid' />
              <p className='text-justify roboto font-normal text-[14px] text-[#4B6380] mt-4'>
                “Wölv is a streetwear fashion brand launched in South Africa in 2016 by Stefano Cavalieri and Mandla Koyabe. Wölv Clothing has found the perfect blend of timeless contemporary styles, the highest quality fabrics and craftsmanship for everyday essential wear. We at Wölv believe that luxury should be embroidered in your everyday life, which is why with our Lusso collection, comfort and luxury will now become apart of your everyday activity. As a brand, we don’t support fast fashion or any other forms of environmental harm, we create timeless pieces that are made to last years, not seasons. The Lusso collection was made to fit with every outfit, in every season for years to come”.
              </p>
              <div className='flex mt-4'>
                <div className='w-1/2'>
                  <img src={cardLionsDesktop} alt="Card Lions Desktop" />
                </div>
                <div className='w-1/2'>
                  <h3 className='sans font-medium text-[40px] text-[#272D4E] pl-2'>CLEAN CUT THRIFT</h3>
                  <p className='roboto font-normal text-[17px] text-[#4B6380] pl-2'>
                    Clean Cut Thrift is a modern day renewal of the past. Bringing good quality clothing to fashion forward Thrifters. Thrifting is an effective method of being good for the environment, while maintaining modern Fashion Aesthetics at a very affordable price.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>


        <section className='mt-4 w-[90%] ml-auto mr-auto lg:hidden'>
          <p className='text-justify roboto font-normal text-[14px] text-[#4B6380]'>
            “Wölv is a streetwear fashion brand launched in South Africa in 2016 by Stefano Cavalieri and Mandla Koyabe. Wölv Clothing has found the perfect blend of timeless contemporary styles, the highest quality fabrics and craftsmanship for everyday essential wear. We at Wölv believe that luxury should be embroidered in your everyday life, which is why with our Lusso collection, comfort and luxury will now become apart of your everyday activity. As a brand, we don’t support fast fashion or any other forms of environmental harm, we create timeless pieces that are made to last years, not seasons. The Lusso collection was made to fit with every outfit, in every season for years to come”.
          </p>
          <img src={cardLions} alt="Card LIONS" className='img-fluid' />
          <h2 className='text-right sans font-medium text-[25px] text-[#272D4E]'>CLEAN CUT THRIFT</h2>
          <p className='text-justify roboto font-normal text-[14px] text-[#4B6380]'>
            Clean Cut Thrift is a modern day renewal of the past. Bringing good qualit clothing to fashion forward Thrifters. Thrifting is an effective method of being good for the environment, while maintaining modern Fashion Aesthetics at a very affordable price.
          </p>
        </section>
      {/* </article> */}


      {/* footer version desktop */}
      <footer className='hidden lg:block mt-[200px]'>
        <div className='flex items-center justify-center gap-8 bg-[#0079FF] h-[191px] relative'>
          <div>
            <p className='roboto font-medium text-[26px] text-left text-white m-auto pl-16'>
              <span className='font-extrabold'>Swéy:</span>  your shopping... made simple, the best way to <br /> get your store on a Global Platform
            </p>
          </div>
          <dir>
            <button type='button' className='w-[167px] h-[62px]  outline outline-offset-2 outline-2 outline-white text-white font-bold roboto rounded-full'>GET THE APP</button>
          </dir>
          <img src={iconCircleGold} alt="Icon Circle Gold" className='absolute right-28 -bottom-8 w-[80px]' />
        </div>
        <div className='bg-[#5AB0FF] h-[530px]'>
          <div className='flex justify-center items-start gap-5 h-[150px]'>
            <div className='flex items-center gap-2 pt-[50px]'>
              <img src={iconVerifiedHome} alt="Icon Verified" className='w-[41px] h-[41px]' />
              <h3 className='roboto font-normal text-[20px] text-white'>Constant quality checks</h3>
            </div>
            <div className='flex items-center gap-2 pt-[50px]'>
              <img src={iconSupport} alt="Icon Support" className='w-[41px] h-[41px]' />
              <h3 className='roboto font-normal text-[20px] text-white'><span className='font-bold'>Support</span> teams available</h3>
            </div>
            <div className='flex items-center gap-2 pt-[50px]'>
              <img src={iconPadLock} alt="Icon Padlock" className='w-[41px] h-[41px]' />
              <h3 className='roboto font-normal text-[20px] text-white'><span className='font-bold'>Safe & Secure</span> online payment</h3>
            </div>
          </div>

          <div className='flex justify-center mb-[50px]'>
            <img src={logoSweyBlue} alt="Logo Swey Blue" />
          </div>
          <div className='bg-[#ff00e594] h-[.1px] w-[60%] m-auto mt-[100px]' />

          <div className='flex justify-center gap-32 items-start mt-[50px] h-[261px]'>
            <div className='item1'>
              <div>
                <h2 className='font-bold text-[14px] roboto uppercase  text-white'>MEET SWÉY</h2>
                <div className='flex flex-col gap-y-2 text-left roboto text-[12px]'>
                  <a href="#" className='text-white no-underline roboto'>About</a>
                  <a href="#" className='text-white no-underline roboto'>Team</a>
                  <a href="#" className='text-white no-underline roboto'>Work With Us</a>
                  <a href="#" className='text-white no-underline roboto'>Invest in Swéy</a>
                </div>
              </div>
            </div>

            <div>
              <h2 className='font-bold text-[14px] roboto uppercase text-white'>Work with Swéy</h2>
              <div className='flex flex-col gap-y-2 text-left text-[12px]'>
                <a href="#" className='text-white no-underline roboto'>Features</a>
                <a href="#" className='text-white no-underline roboto'>Mobile App</a>
                <a href="#" className='text-white no-underline roboto'>Email Newsletter</a>
              </div>
            </div>

            <div>
              <h2 className='font-bold text-[14px] roboto uppercase text-white'>SHOPPING</h2>
              <div className='flex flex-col gap-y-2 text-left text-[12px]'>
                <a href="#" className='text-white no-underline roboto'>Stores</a>
                <a href="#" className='text-white no-underline roboto'>Shops</a>
              </div>
            </div>

            <div>
              <h2 className='font-bold text-[14px] roboto uppercase text-white'>SUPPORT</h2>
              <div className='flex flex-col text-[12px]'>
                <a href="#" className='text-white no-underline roboto'>Support Policy</a>
              </div>
            </div>
          </div>
        </div>

        <div className='flex items-center bg-white justify-evenly'>
          <div className='bg-white flex justify-center items-center gap-5 h-[100px] pl-10'>
            <a href=""><img src={iconTwitter} alt="Twitter Icon" /></a>
            <a href=""><img src={iconFacebook} alt="Facebook Icon" /></a>
            <a href=""><img src={iconInstagram} alt="Instagram Icon" /></a>
          </div>

          <div className='flex justify-center text-center roboto font-normal'>
            <h2 className='text-[12px] text-[#272D4E]'>COPYRIGHT SWÉY - <span><a href="#" className='text-[#272D4E]'>TERMS & CONDITIONS PRIVACY POLICY</a></span></h2>
          </div>

        </div>

      </footer>



      <footer className='mt-[50px] overflow-hidden lg:hidden'>
        <div className='bg-[#0079FF] text-white p-2 h-[234px] flex flex-column justify-center relative'>
          <div className='absolute -top-0 shadowHome w-full h-full m-auto'></div>
          <h2 className='sans text-[36px] font-bold'><span className='font-bold'>Swéy:</span></h2>
          <p className='sans font-normal text-[27px]'>
            your shopping... made simple, the best way to get your store on a Global Platform
          </p>
        </div>
        <div className='bg-white h-[131px] flex flex-column justify-center items-center'>
          <button type='button' className='w-[207px] h-[72px] outline outline-offset-2 outline-3 outline-blue-500 text-[#0066ff] font-bold roboto rounded-full'>GET THE APP</button>
        </div>

        <div className='bg-[#5AB0FF]'>
          <div className='flex justify-center items-center gap-2 h-[272px]'>
            <div className='flex flex-column justify-center gap-3'>
              <img src={iconVerifiedHome} alt="Icon Verified" className='w-[41px] h-[41px]' />
              <img src={iconSupport} alt="Icon Support" className='w-[41px] h-[41px]' />
              <img src={iconPadLock} alt="Icon Padlock" className='w-[41px] h-[41px]' />
            </div>
            <div className='flex flex-column justify-center gap-4 roboto'>
              <h3 className='roboto font-normal text-[20px] text-white'>Constant quality checks</h3>
              <h3 className='roboto font-normal text-[20px] text-white'><span className='font-bold'>Support</span> teams available</h3>
              <h3 className='roboto font-normal text-[20px] text-white'><span className='font-bold'>Safe & Secure</span> online payment</h3>
            </div>
          </div>
          <div className='bg-[#ff00e594] h-2 w-[90%] ml-auto mr-auto mt-[43px] rounded-full' />

          <div className='flex justify-center gap-4 text-center w-screen text-white mt-[28px]'>
            <div>
              <h2 className='font-bold text-[14px] roboto uppercase'>MEET SWÉY</h2>
              <div className='flex flex-col gap-y-2 text-left roboto text-[12px]'>
                <a href="#" className='text-white no-underline'>About</a>
                <a href="#" className='text-white no-underline'>Team</a>
                <a href="#" className='text-white no-underline'>Work With Us</a>
                <a href="#" className='text-white no-underline'>Invest in Swéy</a>
              </div>
            </div>

            <div>
              <h2 className='font-bold text-[14px] roboto uppercase'>Work with Swéy</h2>
              <div className='flex flex-col gap-y-2 text-left text-[12px]'>
                <a href="#" className='text-white no-underline'>Features</a>
                <a href="#" className='text-white no-underline'>Mobile App</a>
                <a href="#" className='text-white no-underline'>Email Newsletter</a>
              </div>
            </div>

            <div>
              <h2 className='font-bold text-[14px] roboto uppercase'>SHOPPING</h2>
              <div className='flex flex-col gap-y-2 text-left text-[12px]'>
                <a href="#" className='text-white no-underline'>Stores</a>
                <a href="#" className='text-white no-underline'>Shops</a>
              </div>
            </div>
          </div>

          <a href="#" className='mt-[60px] roboto font-normal block text-right pr-4 text-white text-[14px] pb-4 no-underline'>Support Policy</a>
        </div>

        {/* footer */}
        <div className=' lg:flex'>
          <div className='bg-white flex justify-center items-center gap-5 h-[100px]'>
            <a href=""><img src={iconTwitter} alt="Twitter Icon" /></a>
            <a href=""><img src={iconFacebook} alt="Facebook Icon" /></a>
            <a href=""><img src={iconRss} alt="RSS Icon" /></a>
            <a href=""><img src={iconInstagram} alt="Instagram Icon" /></a>
          </div>

          <div className='flex justify-center pb-4 text-center roboto font-normal'>
            <h2 className='text-[12px] text-[#272D4E]'>COPYRIGHT SWÉY -
              <span><a href="#" className='text-[#272D4E]'>TERMS & CONDITIONS PRIVACY POLICY</a></span>
            </h2>
          </div>

        </div>

      </footer>
    </>
  )
}

export default Home;