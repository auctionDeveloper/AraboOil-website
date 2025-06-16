import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Homepage from '../pages/Homepage';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import Product from '../pages/Product';
import ProductCategoryPage from '../pages/ProductCategoryPage';

// Dynamic Pages
import MtoProductPage from '../MtoProductPage';
import LDOProductPage from '../subproductpage/LDOProductPage';
import FuelOilProductPage from '../subproductpage/FuelOilProductPage';
import BiofuelProductPage from '../subproductpage/BioFuelProductPage';
import SolventProductPage from '../subproductpage/SolventProductPage';
import BriquetteProductPage from '../subproductpage/BriquetteProductPage';
import CNSLProductPage from '../subproductpage/CNSLProductPage';
import LampOilProductPage from '../subproductpage/LampOilProductPage';
import HydrocarbonProductPage from '../subproductpage/HydrocarbonProductPage';

// Objective Pages
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
import CnslResinObjectivesPage from '../pages/CnslResinObjectivesPage';
import HydrocarbonObjectivesPage from '../pages/HydrocarbonObjectivesPage';
import LampOilObjectivesPage from '../pages/LampOilObjectives';
import ProductsLinks from '../component/ProductsLinks';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const BASE_URL = "https://raw.githubusercontent.com/auctionDeveloper/Fueloil-json-data/main/api";

const fileMap = {
  'fuel-oil': 'fueloil',
  'white-base-oil': 'whitebaseoil',
  'yellow-base-oil': 'yellowbaseoil',
  'lamp-oil': 'lampoil',
  'cnsl-resin': 'cnslresin',
  'light-diesel-oil': 'ldo'
};

function slugToKey(slug) {
  const cleanSlug = slug.replace(/[()]/g, '').toLowerCase();
  const specialMap = {
    'ldo': 'LDO',
    'cnsl-resin': 'CNSL Resin',
    'white-base-oil': 'White Base Oil',
    'yellow-base-oil': 'Yellow Base Oil',
    'mto': 'MTO',
    'fueloil': 'Fuel Oil',
    'fuel-oil': 'Fuel Oil'
  };
  return specialMap[cleanSlug] || cleanSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function CategoryPageLoader() {
  const { category } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const slugToProductKey = (slug) => {
    const map = {
      'mto': 'MTO',
      'ldo': 'LDO',
      'white-base-oil': 'White Base Oil',
      'yellow-base-oil': 'Yellow Base Oil',
      'fuel-oil': 'Fuel Oil',
      'fueloil': 'Fuel Oil',
      'biofuel': 'Bio Fuel',
      'solvent': 'Solvent',
      'briquette': 'Briquette',
      'lamp-oil': 'Lamp Oil',
      'lampoil': 'Lamp Oil',
      'cnsl-resin': 'CNSL Resin',
      'cnslresin': 'CNSL Resin',
      'hydrocarbon': 'Hydrocarbon',
    };
    return map[slug] || slug;
  };

  useEffect(() => {
    async function fetchCategoryData() {
      try {
        const response = await fetch(`https://raw.githubusercontent.com/auctionDeveloper/Fueloil-json-data/main/api/product.json?nocache=${Date.now()}`);
        const result = await response.json();
        const key = slugToProductKey(category);
        const fetchedData = result.product[key];
        setData(fetchedData || null);
      } catch (err) {
        console.error("Error fetching category data:", err);
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    fetchCategoryData();
  }, [category]);

  if (loading) return <div className="p-4">Loading category...</div>;
  if (!data) return <div className="p-4 text-red-600">Category not found</div>;
  return <ProductCategoryPage data={data} categorySlug={category} />;
}

function ProductPage() {
  const { category, productName } = useParams();
  const slug = decodeURIComponent(productName).toLowerCase();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const normalized = fileMap[category] || category;
        const response = await fetch(`${BASE_URL}/${normalized}.json?nocache=${Date.now()}`);
        const result = await response.json();
        const key = Object.keys(result)[0];
        const entry = Object.entries(result[key]).find(
          ([, value]) => (value.slug || '').toLowerCase() === slug
        );
        setData(entry ? entry[1] : null);
      } catch (err) {
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [category, slug]);

  if (loading) return <div className="p-4">Loading...</div>;
  if (!data) return <div className="p-4 text-red-600">Product not found</div>;

  switch (category) {
    case 'mto': return <MtoProductPage data={data} />;
    case 'white-base-oil': return <WhiteBaseOilProductPage data={data} />;
    case 'yellow-base-oil': return <YellowBaseOilProductPage data={data} />;
    case 'ldo': return <LDOProductPage data={data} />;
    case 'fuel-oil':
    case 'fueloil': return <FuelOilProductPage data={data} />;
    case 'biofuel': return <BiofuelProductPage data={data} />;
    case 'solvent': return <SolventProductPage data={data} />;
    case 'briquette': return <BriquetteProductPage data={data} />;
    case 'cnsl-resin':
    case 'cnslresin': return <CNSLProductPage data={data} />;
    case 'lamp-oil':
    case 'lampoil': return <LampOilProductPage data={data} />;
    case 'hydrocarbon': return <HydrocarbonProductPage data={data} />;
    default: return <div>Product not found</div>;
  }
}

export default function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mto/:objective/:city" element={<MtoObjectivesPage />} />
        <Route path="/white-base-oil/:objective/:city" element={<WhiteBaseOilObjectivesPage />} />
        <Route path="/yellow-base-oil/:objective/:city" element={<YellowBaseOilObjectivesPage />} />
        <Route path="/ldo/:objective/:city" element={<LdoObjectivesPage />} />
        <Route path="/fuel-oil/:objective/:city" element={<FuelOilObjectivesPage />} />
        <Route path="/fueloil/:objective/:city" element={<FuelOilObjectivesPage />} />
        <Route path="/biofuel/:objective/:city" element={<BiofuelObjectivesPage />} />
        <Route path="/solvent/:objective/:city" element={<SolventObjectivesPage />} />
        <Route path="/briquette/:objective/:city" element={<BriquetteObjectivesPage />} />
        <Route path="/cnslresin/:objective/:city" element={<CnslResinObjectivesPage />} />
        <Route path="/cnsl-resin/:objective/:city" element={<CnslResinObjectivesPage />} />
        <Route path="/lamp-oil/:objective/:city" element={<LampOilObjectivesPage />} />
        <Route path="/lampoil/:objective/:city" element={<LampOilObjectivesPage />} />
        <Route path="/hydrocarbon/:objective/:city" element={<HydrocarbonObjectivesPage />} />
        <Route path="/product/:category" element={<CategoryPageLoader />} />
        <Route path="/product/:category/:productName" element={<ProductPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<div>🚫 404 – Page not found</div>} />
      </Routes>
      <ProductsLinks />
      <Footer />
    </>
  );
}
