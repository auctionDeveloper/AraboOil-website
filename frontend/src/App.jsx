import React from 'react';
import Navbar from './component/Navbar';
import AppRoutes from './route/Approutes';
import ScrollToTop from './component/ScrollToTop';


export default function App() {
  return (
    <>
    <ScrollToTop/>
      <Navbar />
      <AppRoutes />
    </>
  );
}
