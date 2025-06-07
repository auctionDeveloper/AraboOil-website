// routes.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {  useParams} from 'react-router-dom';
import Homepage from '../pages/Homepage';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import Product from '../pages/Product';
import CategoryPageLoader from '../component/CategoryPageLoader';

// Product Pages
import MtoProductPage from '../MtoProductPage';
import BaseOilProductPage from '../BaseOilProductPage';
import LDOProductPage from '../subproductpage/LDOProductPage';
import FuelOilProductPage from '../subproductpage/FuelOilProductPage';
import BiofuelProductPage from '../subproductpage/BiofuelProductPage';
import SolventProductPage from '../subproductpage/SolventProductPage';
import BriquetteProductPage from '../subproductpage/BriquetteProductPage';
import CNSLProductPage from '../subproductpage/CNSLProductPage';
import LampOilProductPage from '../subproductpage/LampOilProductPage';
import HydrocarbonProductPage from '../subproductpage/HydrocarbonProductPage';

// Product Data
import mtodata from '../api/mto.json';
import whitebaseoil from '../api/whitebaseoil.json';
import yellowbaseoil from '../api/yellowbaseoil.json';
import ldoData from '../api/ldo.json';
import fuelData from '../api/fueloil.json';
import biofuelData from '../api/biofuel.json';
import solventData from '../api/solvent.json';
import briquetteData from '../api/briquette.json';
import cnslData from '../api/cnslresin.json';
import lampData from '../api/lampoil.json';
import hydrocarbonData from '../api/hydrocarbon.json';
import MtoObjectivesPage from '../pages/MtoObjectivesPage';
import WhiteBaseOilObjectivesPage from '../pages/WhiteBaseOilObjectivesPage';
import YellowBaseOilObjectivesPage from '../pages/YellowBaseOilObjectivesPage';
import WhiteBaseOilProductPage from '../subproductpage/WhiteBaseOilProductPage';
import YellowBaseOilProductPage from '../subproductpage/YellowBaseOilProductPage';
import LdoObjectivesPage from '../pages/LdoObjectivesPage';
import FuelOilObjectivesPage from '../pages/FuelOilObjectivesPage';
import BiofuelObjectivesPage from '../pages/BiofuelObjectivesPage';
import SolventObjectivesPage from '../pages/SolventObjectivesPage';
import BriquetteObjectivesPage from '../pages/BriquetteObjectivesPage';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import CnslResinObjectivesPage from '../pages/CNSLResinObjectivesPage';
import HydrocarbonObjectivesPage from '../pages/HydrocarbonObjectivesPage';
import LampOilObjectivesPage from '../pages/LampOilObjectives';

function ProductPage() {
  const { category, productName } = useParams();
  const slug = decodeURIComponent(productName).toLowerCase();

  const matchSlug = (dataObj, key) => {
    const entries = Object.entries(dataObj[key]);
    return entries.find(([_, value]) => (value.slug || '').toLowerCase() === slug);
  };

  if (category === 'mto') {
    const match = matchSlug(mtodata, 'MTO');
    if (match) return <MtoProductPage data={match[1]} />;
  }

 
if (category === 'white-base-oil') {
  const match = matchSlug(whitebaseoil, 'White Base Oil');
  if (match) return <WhiteBaseOilProductPage data={match[1]} />;
}

if (category === 'yellow-base-oil') {
  const match = matchSlug(yellowbaseoil, 'Yellow Base Oil');
  if (match) return <YellowBaseOilProductPage data={match[1]} />;
}

  if (category === 'ldo') {
    const match = matchSlug(ldoData, 'LDO');
    if (match) return <LDOProductPage data={match[1]} />;
  }

  if (category === 'fuel-oil') {
    const match = matchSlug(fuelData, 'Fuel Oil');
    if (match) return <FuelOilProductPage data={match[1]} />;
  }

  if (category === 'biofuel') {
    const match = matchSlug(biofuelData, 'Biofuel');
    if (match) return <BiofuelProductPage data={match[1]} />;
  }

  if (category === 'solvent') {
    const match = matchSlug(solventData, 'Solvent');
    if (match) return <SolventProductPage data={match[1]} />;
  }

  if (category === 'briquette') {
    const match = matchSlug(briquetteData, 'Briquette');
    if (match) return <BriquetteProductPage data={match[1]} />;
  }

  if (category === 'cnsl-resin') {
    const match = matchSlug(cnslData, 'CNSL Resin');
    if (match) return <CNSLProductPage data={match[1]} />;
  }

  if (category === 'lamp-oil') {
    const match = matchSlug(lampData, 'Lamp Oil');
    if (match) return <LampOilProductPage data={match[1]} />;
  }

  if (category === 'hydrocarbon') {
    const match = matchSlug(hydrocarbonData, 'Hydrocarbon');
    if (match) return <HydrocarbonProductPage data={match[1]} />;
  }
if (category === 'white-base-oil') {
  const match = matchSlug(whitebaseoil, 'White Base Oil');
  if (match) return <BaseOilProductPage data={match[1]} categorySlug="white-base-oil" />;
}

if (category === 'yellow-base-oil') {
  const match = matchSlug(yellowbaseoil, 'Yellow Base Oil');
  if (match) return <BaseOilProductPage data={match[1]} categorySlug="yellow-base-oil" />;
}

  return <div>Product not found</div>;
  
}

export default function AppRoutes() {
  return (
<>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mto/:subproduct/:objective/:city" element={<MtoObjectivesPage />} />
        <Route path="/white-base-oil/:subproduct/:objective/:city" element={<WhiteBaseOilObjectivesPage />} />
        <Route path="/yellow-base-oil/:subproduct/:objective/:city" element={<YellowBaseOilObjectivesPage />} />
        <Route path="/ldo/:subproduct/:objective/:city" element={<LdoObjectivesPage />} />
        <Route path="/fuel-oil/:subproduct/:objective/:city" element={<FuelOilObjectivesPage />} />
        <Route path="/biofuel/:subproduct/:objective/:city" element={<BiofuelObjectivesPage />} />
        <Route path="/solvent/:subproduct/:objective/:city" element={<SolventObjectivesPage />} />
        <Route path="/briquette/:subproduct/:objective/:city" element={<BriquetteObjectivesPage />} />
        <Route path="/cnslresin/:subproduct/:objective/:city" element={<CnslResinObjectivesPage/>} />
        <Route path="/cnsl-resin/:subproduct/:objective/:city" element={<CnslResinObjectivesPage/>} />
         <Route path="/lamp-oil/:subproduct/:objective/:city" element={<LampOilObjectivesPage />} />
          <Route path="/lampoil/:subproduct/:objective/:city" element={<LampOilObjectivesPage />} />
         <Route path="/hydrocarbon/:subproduct/:objective/:city" element={<HydrocarbonObjectivesPage/>} />


        <Route path="/product/:category" element={<CategoryPageLoader />} />
        <Route path="/product/:category/:productName" element={<ProductPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/product" element={<Product />} />
        {/* Optional: <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
  );
}
