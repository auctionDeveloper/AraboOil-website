import React from 'react';
import { Link } from 'react-router-dom';

// Import all product images
import MTO from '../assets/mto.png';
import YellowBaseOil from '../assets/baseoil.png';
import WhiteBaseOil from '../assets/whitebaseoil.png';
import LDO from '../assets/ldo.png';
import FuelOil from '../assets/fueloil.png';
import BioFuel from '../assets/biofuel.png';
import Solvent from '../assets/solvent.png';
import Briquette from '../assets/beriqutte.png';
import CNSLResin from '../assets/cnslresin.png';
import LampOil from '../assets/lampoil.png';
import Hydrocarbon from '../assets/hydrocarbon.png';

// Product list
const products = [
  { name: "Mineral Turpentine Oil (MTO)", image: MTO, path: "/product/mto" },
  { name: "Yellow Base Oil", image: YellowBaseOil, path: "/product/yellow-base-oil" },
  { name: "White Base Oil", image: WhiteBaseOil, path: "/product/white-base-oil" },
  { name: "Light Diesel Oil (LDO)", image: LDO, path: "/product/ldo" },
  { name: "Furnace Oil / Fuel Oil", image: FuelOil, path: "/product/fuel-oil" },
  { name: "Bio Fuel", image: BioFuel, path: "/product/biofuel" },
  { name: "Solvent", image: Solvent, path: "/product/solvent" },
  { name: "Briquette", image: Briquette, path: "/product/briquette" },
  { name: "CNSL Resin", image: CNSLResin, path: "/product/cnsl-resin" },
  { name: "Lamp Oil", image: LampOil, path: "/product/lamp-oil" },
  { name: "Hydrocarbon", image: Hydrocarbon, path: "/product/hydrocarbon" },
];

export default function Product() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-10">
        Our <span className="text-red-700">Products</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md p-5 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
          >
              <Link
                to={product.path}
              >   
              <div className="w-[300px] h-[280px] mx-auto flex items-center justify-center">
  <img
    src={product.image}
    alt={product.name}
    loading="lazy"
    className="object-contain w-full h-full"
  />
</div>

</Link> 
            <h3 className="text-md font-semibold mt-4">{product.name}</h3>
            <div className="mt-4 flex justify-center gap-4">
              <button className="bg-red-700 text-white px-4 py-1 text-sm rounded-full hover:bg-red-800">
                Enquiry Now
              </button>
              <Link
                to={product.path}
                className="border border-red-700 text-red-700 px-4 py-1 text-sm rounded-full hover:bg-red-50"
              >
                View More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
