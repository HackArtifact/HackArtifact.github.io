import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

//components
import CountScreen from './components/countScreen/CountScreen';
import Home from './components/home/Home';
import Market from './components/store/Market';
import ProductSearchResult from './components/store/ProductSearchResult';
import ModalSearchFilter from './components/store/ModalSearchFilter';
import InfoProductSearch from './components/store/InfoProductSearch';
import Login from './components/login/Login';
import SignUp from './components/login/SignUp';
import Checkout from './components/checkout/Checkout';
import CheckoutSaved from './components/checkout/CheckoutSaved';
import PaymentsData from './components/payments/PaymentsData';
import PaymentCard from './components/payments/PaymentCard';
import PaymentCardSplit from './components/payments/PaymentCardSplit';
import PaymentSuccess from './components/payments/PaymentSuccess';
import PaymentCardSwey from './components/payments/PaymentCardSwey';
import PaymentLoginSwey from './components/payments/PaymentLoginSwey';
import PaymentCard3 from './components/payments/PaymentCard3';
import PaymentSweySuccess from './components/payments/PaymentSweySuccess';
import InfoProductSearchDescription from './components/store/InfoProductSearchDescription';

//usecontext
import ProductProvider from './context/ProductContext';

function App() {

  return (
    <ProductProvider>
      <HashRouter>
        <Routes>
          <Route path='/' element={<CountScreen />} />
          <Route path='/home' element={<Home />} />
          <Route path='/market' element={<Market />} />
          <Route path='/productsearchresult' element={<ProductSearchResult />} />
          <Route path='/modalsearchfilter' element={<ModalSearchFilter />} />
          <Route path='/infoproductsearch' element={<InfoProductSearch />} />
          <Route path='/infoproductsearchdescription' element={<InfoProductSearchDescription />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/checkoutsaved' element={<CheckoutSaved />} />
          <Route path='/paymentdata' element={<PaymentsData />} />
          <Route path='/paymentcard' element={<PaymentCard />} />
          <Route path='/paymentsuccess' element={<PaymentSuccess />} />
          <Route path='/paymentcardsplit' element={<PaymentCardSplit />} />
          <Route path='/paymentcardswey' element={<PaymentCardSwey />} />
          <Route path='/paymentloginswey' element={<PaymentLoginSwey />} />
          <Route path='/paymentcardthree' element={<PaymentCard3 />} />
          <Route path='/paymentsweysuccess' element={<PaymentSweySuccess />} />
          <Route path='*' element={<h2>404 Page not found</h2>} />
        </Routes>
      </HashRouter>
    </ProductProvider>
  );
};

export default App;