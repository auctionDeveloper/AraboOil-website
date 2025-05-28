// routes.jsx
import React from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import MtoProductPage from '../MtoProductPage';
import data from '../api/mto.json';
import Homepage from '../pages/Homepage';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import Product from '../pages/Product';

function ProductPage() {
  const { category, productName } = useParams();

  const formattedName = productName.charAt(0).toUpperCase() + productName.slice(1);
  let productData = null;

  if (category.toLowerCase() === 'mto') {
    productData = data.MTO[formattedName];
  }

  if (!productData) return <div>Product not found</div>;

  return <MtoProductPage data={productData} />;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path="/" element={<Navigate to="/product/mto/thiner" replace />} />
      <Route path="/product/:category/:productName" element={<ProductPage />} />
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/product' element={<Product/>}/>
    </Routes>
  );
}
