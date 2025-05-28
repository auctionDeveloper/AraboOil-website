import React from 'react';
import { useParams } from 'react-router-dom';
import productData from '../api/product.json'; // your full JSON
import ProductCategoryPage from '../pages/ProductCategoryPage';

export default function CategoryPageLoader() {
  const { category } = useParams(); // 'mto' or 'baseoil'

  // Normalize category for lookup: convert "baseoil" to "Base Oil"
  let lookupKey = category.toLowerCase() === 'baseoil' ? 'Base Oil' : category.toUpperCase();

  const data = productData.product[lookupKey];

  if (!data) {
    return <div>Category not found</div>;
  }

  return <ProductCategoryPage data={data} />;
}
