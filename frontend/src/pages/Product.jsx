import React, { useState } from 'react';
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

// Subproduct data
const subproductOptions = {
  "Mineral Turpentine Oil (MTO)": [
    "Thiner", "Reducer", "Mineral Turpentine Oil", "Paint Thiner", "Industrial Turpentine Oil",
    "Industrial Thiner", "Industrial Solvent", "Industrial Composite Mixture",
    "MTO Petroleum Oil", "Mix aromatic Solvent"
  ],
  "White Base Oil": [
    "BASE OIL N70", "BASE OIL N150", "BASE OIL N220", "BASE OIL N500", "Base oil N100",
    "BASE OIL N60", "WHITE OIL", "2 CST WHITE OIL", "Pharmaceutical Grade Base Oil",
    "High Viscosity White Base Oil", "Cosmetic Grade Base Oil"
  ],
  "Yellow Base Oil": [
    "Base oil SN70", "Base oil SN100", "Base Oil SN150", "Base oil SN250", "Base oil SN500",
    "Base oil SN700", "Industrial Grade Yellow Base Oil", "Lubricating Grade Yellow Base Oil",
    "Low Pour Yellow Base Oil", "Synthetic Yellow Base oil"
  ],
  "Light Diesel Oil (LDO)": [
    "Light Diesel Oil", "Light Fuel Oil", "Eco Blend LDO", "Low Sulphur LDO", "Marine Grade LDO",
    "Industrial Grade LDO", "Low Viscocity Oil", "Light Density Oil", "Boiler LDO", "Hotmix LDO"
  ],
  "Furnace Oil / Fuel Oil": [
    "Fuel oil", "Furnace Oil", "Hight Viscocity Fuel Oil", "Marine Fuel Oil", "Heavy Fuel oil",
    "Resudue Fuel oil", "Industrial Fuel Oil", "Black Fuel oil", "Low Sulphur Fuel oil",
    "Low Sulphur Furnace oil"
  ],
  "Bio Fuel": [
    "Biodiesel", "Biofuel", "Biodiesel B100", "Biodiesel b20", "Biodiesel Methyl Easter",
    "Bioethanol E85", "Bioethanol E100", "Used Cooking Oil Biofuel", "Jatropha-Based Biofuel"
  ],
  "Solvent": [
    "Industrial Solvent", "Aromatic Solvent", "Aliphatic Solvent", "High Flash Solvent",
    "Paint Thinner Solvent", "Rubber Solvent", "Adhesive Solvent", "Pharmaceutical Solvent",
    "Cleaning Solvent", "Extraction Solvent"
  ],
  "Briquette": [
    "Biomass Briquette", "Sawdust Briquette", "Coconut Shell Briquette", "Agro Waste Briquette",
    "Charcoal Briquette", "Rice Husk Briquette", "Coffee Husk Briquette", "Peat Briquette",
    "High-Density Briquette", "Low-Moisture Briquette"
  ],
  "CNSL Resin": [
    "Friction Grade CNSL Resin", "Coating Grade CNSL Resin", "Adhesive Grade CNSL Resin",
    "Modified CNSL Resin", "Phenolic CNSL Resin", "Epoxy Modified CNSL Resin",
    "Polyurethane CNSL Resin", "High-Viscosity CNSL Resin", "Oil-Resistant CNSL Resin",
    "Insulation Grade CNSL Resin"
  ],
  "Lamp Oil": [
    "Clear Lamp Oil", "Odorless Lamp Oil", "Colored Lamp Oil", "Pooja Oil", "Deep oil",
    "Til Oil", "Indoor Lamp Oil", "Scented Lamp Oil", "Long-Burning Lamp Oil",
    "Premium Grade Lamp Oil"
  ],
  "Hydrocarbon": [
    "Light Hydrocarbon", "Heavy Hydrocarbon", "Aromatic Hydrocarbon", "Mix Hdrocarbon oil",
    "10 PPM", "Industrial oil", "Processing oil", "Hydrocarbon oil", "Industrial Hydrocarbon",
    "Solvent-Grade Hydrocarbon"
  ]
};

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
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSubproduct, setSelectedSubproduct] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleEnquiryClick = (product) => {
    setSelectedProduct(product);
    setSelectedSubproduct('');
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
    setSelectedSubproduct('');
  };

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
            <Link to={product.path}>
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
              <button
                onClick={() => handleEnquiryClick(product)}
                className="bg-red-700 text-white px-4 py-1 text-sm rounded-full hover:bg-red-800"
              >
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

      {/* Enquiry Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-xl relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-3 text-xl font-bold"
            >
              ×
            </button>

            <h2 className="text-2xl font-semibold text-red-800 mb-4 text-center">
              Enquiry Form
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 items-center mb-4">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-40 h-40 object-contain rounded-lg"
              />
              <div className="w-full">
                <p className="font-semibold text-center sm:text-left mb-2">
                  {selectedProduct.name}
                </p>

                {submitted ? (
                  <div className="text-center py-10">
                    <h3 className="text-2xl text-green-700 font-bold mb-4">✅ Thank You!</h3>
                    <p className="text-gray-700">Your enquiry has been submitted successfully.</p>
                  </div>
                ) : (
  <form
  onSubmit={(e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("product", selectedProduct.name);
    formData.append("subproduct", selectedSubproduct);

    fetch("https://fueloil.in/enquiry-handler.php", {
      method: "POST",
      body: formData
    })
      .then(res => res.text())
      .then((res) => {
        if (res === "success") {
          setSubmitted(true);
          setTimeout(() => {
            setSubmitted(false);
            handleClose();
          }, 2000);
        } else {
          alert("Submission failed. Try again.");
        }
      })
      .catch(() => {
        alert("Server error.");
      });
  }}
  className="space-y-3"
>
  <div className="flex gap-2">
    {/* Subproduct Select */}
    <select
      required
      name="subproduct"
      value={selectedSubproduct}
      onChange={(e) => setSelectedSubproduct(e.target.value)}
      className="border p-2 w-1/2 rounded"
    >
      <option value="">Select Subproduct</option>
      {subproductOptions[selectedProduct.name]?.map((sub, idx) => (
        <option key={idx} value={sub}>{sub}</option>
      ))}
    </select>

    {/* Quantity Input */}
    <input
      type="number"
      name="quantity"
      placeholder="Quantity"
      className="border p-2 w-1/2 rounded"
      required
    />
  </div>

  <div className="flex gap-2">
    {/* Unit Input */}
    <input
      type="text"
      name="unit"
      placeholder="Measurement Unit"
      className="border p-2 w-1/2 rounded"
      required
    />

    {/* Mobile Number Input */}
    <input
      type="tel"
      name="mobile"
      placeholder="Mobile No."
      className="border p-2 w-1/2 rounded"
      required
    />
  </div>

  <button
    type="submit"
    className="bg-red-800 text-white py-2 px-4 rounded hover:bg-red-700 w-full"
  >
    Submit Enquiry
  </button>
</form>

                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
