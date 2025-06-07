import React from 'react';
import { useParams } from 'react-router-dom';
import productData from '../api/product.json';
import ProductCategoryPage from '../pages/ProductCategoryPage';

function slugToKey(slug) {
  const cleanSlug = slug.replace(/[()]/g, '').toLowerCase();

  const specialMap = {
    'ldo': 'LDO',
    'cnsl-resin': 'CNSL Resin',
    'white-base-oil': 'White Base Oil',
    'yellow-base-oil': 'Yellow Base Oil',
    'mto': 'MTO',
  };

  if (specialMap[cleanSlug]) {
    return specialMap[cleanSlug];
  }

  return cleanSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function CategoryPageLoader() {
  const { category } = useParams();

  if (!category) return <div>Category param missing</div>;

  const lookupKey = slugToKey(category);

  const data = productData.product[lookupKey];

  if (!data) return <div>Category "{lookupKey}" not found</div>;

  return <ProductCategoryPage data={data} categorySlug={category} />;
}
