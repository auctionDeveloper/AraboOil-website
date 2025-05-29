import React from 'react';
import { useParams } from 'react-router-dom';
import productData from '../api/product.json'; // your big JSON
import ProductCategoryPage from '../pages/ProductCategoryPage';

// Convert slug like "white-base-oil" to "White Base Oil", "mto" to "MTO"
function slugToKey(slug) {
  const acronyms = ['mto', 'ldo'];
  if (acronyms.includes(slug.toLowerCase())) {
    return slug.toUpperCase();
  }
  return slug
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
