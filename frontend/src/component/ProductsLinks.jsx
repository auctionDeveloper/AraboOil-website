import React from 'react';
import { Link } from 'react-router-dom';
import { FaLink } from 'react-icons/fa';

const categories = [
  { path: 'mto', label: 'MTO' },
  { path: 'white-base-oil', label: 'White Base Oil' },
  { path: 'yellow-base-oil', label: 'Yellow Base Oil' },
  { path: 'ldo', label: 'LDO (Light Diesel Oil)' },
  { path: 'fuel-oil', label: 'Fuel Oil' },
  { path: 'biofuel', label: 'Biofuel' },
  { path: 'solvent', label: 'Solvent' },
  { path: 'briquette', label: 'Briquette' },
  { path: 'cnsl-resin', label: 'CNSL Resin' },
  { path: 'lamp-oil', label: 'Lamp Oil' },
  { path: 'hydrocarbon', label: 'Hydrocarbon' },
];

const objectives = ['Supplier', 'Trader', 'Manufacturer'];
const cities = [
  'Mumbai', 'Navi Mumbai', 'Thane', 'Palghar', 'Raigad', 'Panvel',
  'Pune', 'Nashik', 'Aurangabad', 'Kolhapur', 'Goa', 'Hubli',
  'Belgaum', 'Tumkur', 'Bengaluru', 'Silvassa', 'Vapi', 'Surat',
  'Ahmedabad', 'Dhule'
];

function toSlug(str) {
  return str.toLowerCase().replace(/\s+/g, '-');
}

function generateLinks(limit = 100) {
  const links = [];
  const usedKeys = new Set();

  outer: for (const city of cities) {
    for (const objective of objectives) {
      for (const category of categories) {
        const key = `${category.path}-${objective}-${city}`;
        if (!usedKeys.has(key)) {
          links.push({
            url: `/${category.path}/${toSlug(objective)}/${toSlug(city)}`,
            text: `${category.label} ${objective.toLowerCase()} in ${city}`
          });
          usedKeys.add(key);
        }
        if (links.length >= limit) break outer;
      }
    }
  }

  return links;
}

export default function ProductsLinks() {
  const allLinks = generateLinks(100);
  const columns = [[], [], [], []]; // 4 columns

  allLinks.forEach((link, index) => {
    columns[index % 4].push(link);
  });

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Explore Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {columns.map((col, i) => (
          <div key={i} className="space-y-2">
            {col.map((link, j) => (
              <Link key={j} to={link.url} className="flex items-center gap-2 text-blue-600 hover:underline text-sm">
                <FaLink /> {link.text}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
