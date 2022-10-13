import React, { useState, createContext, useEffect } from 'react';

export const ProductContext = createContext([]);

const ProductProvider = (props) => {

    //state modal for checkout
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [modalSplit1, setModalSplit1] = useState(false);
    const [modalSplit2, setModalSplit2] = useState(false);
    const [modalSplit3, setModalSplit3] = useState(false);
    const [modalSplit4, setModalSplit4] = useState(false);
    const [modalSplit5, setModalSplit5] = useState(false);
    const [modalSearchFilter, setModalSearchFilter] = useState(false)


    // state for the shopping cart
    const [cart, setCart] = useState([]);

    // add product to cart
    const productSelection = ( item, newQuantity )  => {
      const newCart = cart.filter(prod => prod.id !== item.id);
      newCart.push({ ...item, quantity: newQuantity });
      setCart(newCart)  
      console.log('producto agregado al carrito: ',newCart)
    }

    //clear products of cart
    const clear = () => setCart([]);

    //remove product of cart
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    // save products to localstorage
    let  savedLocalStorage = JSON.parse(localStorage.getItem('cart'));
    if(!savedLocalStorage){
      savedLocalStorage = [];
    }

    //state for products saved
    const [saved, setSaved] = useState(savedLocalStorage);

    //refresh when  new products saved
    useEffect( () => {
      if(savedLocalStorage){
        localStorage.setItem('cart', JSON.stringify(saved))
      } else {
        localStorage.setItem('cart', JSON.stringify([]));
      }
    }, [saved]);

    //function add new products saved
    const savedProducts = products => {
      setSaved([ ...saved, products])
    };

    //delete products saved localstorage
    const deleteProducts = id => {
      const newProducts = saved.filter(product => product.id !== id);
      setSaved(newProducts)
    }

    //counter price 
    const handleSumSubtotal = () => {
      const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
      const sum = cart.reduce(reducer, 0);
      return sum;
    }

    // discount price
     const priceFee = 20;

    const handleSumTotal = () => {
      const reducer = (accumulator, currentValue) => accumulator  + currentValue.price;
      const sum = cart.reduce(reducer, 0);
      return sum - priceFee;
    }


    function countdownLogic() {
      let countDownDate = new Date("Nov 16, 2022 15:37:25").getTime();
    
      // Update the count down every 1 second
      let x = setInterval(function () {
        // Get today's date and time
        let now = new Date().getTime();
    
        // Find the distance between now and the count down date
        let distance = countDownDate - now;
    
        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        // Display the result in the element with id="msgFinish"
        // document.getElementById("msgFinish").innerHTML = days + "d " + hours + "h "
        // + minutes + "m " + seconds + "s ";
    
        window.onload = document.getElementById("days").innerText = days;
        window.onload = document.getElementById("hours").innerText = hours;
        window.onload = document.getElementById("minutes").innerText = minutes;
        window.onload = document.getElementById("seconds").innerText = seconds;
    
        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("msgFinish").innerHTML = "EXPIRED";
        }
      }, 1000);
    };

    //busqueda de formulario offline
    const [inputSearch, setInputSearch] = useState('');
    const [stateInputSearch, setStateInputSearch] = useState(false);

  return (
    <ProductContext.Provider
      value={{
        cart,
        setCart,
        productSelection,
        clear,
        removeProduct,
        saved,
        savedProducts,
        deleteProducts,
        handleSumSubtotal,
        handleSumTotal,
        countdownLogic,
        modal1,
        setModal1,
        modal2,
        setModal2,
        modal3,
        setModal3,
        modalSplit1,
        setModalSplit1,
        modalSearchFilter,
        modalSplit2,
        setModalSplit2,
        setModalSearchFilter,
        modalSplit3,
        setModalSplit3,
        modalSplit4,
        setModalSplit4,
        modalSplit5,
        setModalSplit5,
        setInputSearch,
        inputSearch,
        stateInputSearch,
        setStateInputSearch,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;