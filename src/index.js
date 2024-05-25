import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import PrivateRout from './pages/routes/PrivateRoute';




import { Home, Product, Products, AboutPage, ContactPage, Cart, Login, Register, Checkout, PageNotFound } from "./pages"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} /> */}

        {/* <Route path="/" element={<PrivateRout component= {Home} />} /> */}
        <Route path="/product" element={<PrivateRout component= {Products} />} />
        <Route path="/product/:id" element={<PrivateRout component= {Product} />} />
        <Route path="/about" element={<PrivateRout component= {AboutPage} />} />
        <Route path="/contact" element={<PrivateRout component= {ContactPage} />} />
        <Route path="/cart" element={<PrivateRout component= {Cart} />} />
        {/* <Route path="/register" element={<PrivateRout component= {Register} />} /> */}
        <Route path="/checkout" element={<PrivateRout component= {Checkout} />} />
        <Route path="*" element={<PrivateRout component= {PageNotFound} />} />



        {/* <Route path="/product/*" element={<PageNotFound />} /> */}
      
      </Routes>
    </Provider>
  </BrowserRouter>
);