import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// ✅ MTO Data
import supplierData from '../data/MtoSupplier.json';
import traderData from '../data/MtoTrader.json';
import manufacturerData from '../data/MtoManufacture.json';
import importerData from '../data/MtoImporter.json';
import distributerData from '../data/MtoDistributer.json';

// ✅ White Base Oil Data
import wboSupplierData from '../data/whitebaseoil/WboSupplier.json';
import wboTraderData from '../data/whitebaseoil/WboTrader.json';
import wboManufacturerData from '../data/whitebaseoil/WboManufacture.json';
import wboImporterData from '../data/whitebaseoil/WboImporter.json';
import wboDistributerData from '../data/whitebaseoil/WboDistributer.json';

// ✅ Yellow Base Oil Data
import yboSupplierData from '../data/yellowbaseoil/YboSupplier.json';
import yboTraderData from '../data/yellowbaseoil/YboTrader.json';
import yboManufacturerData from '../data/yellowbaseoil/YboManufacture.json';
import yboImporterData from '../data/yellowbaseoil/YboImporter.json';
import yboDistributerData from '../data/yellowbaseoil/YboDistributer.json';

// ✅ LDO Data
import ldoSupplierData from '../data/ldo/LdoSupplier.json';
import ldoTraderData from '../data/ldo/LdoTrader.json';
import ldoManufacturerData from '../data/ldo/LdoManufacture.json';
import ldoImporterData from '../data/ldo/LdoImporter.json';
import ldoDistributerData from '../data/ldo/LdoDistributer.json';

// ✅ Fuel Oil Data
import fuelSupplierData from '../data/fueloil/FueloilSupplier.json';
import fuelTraderData from '../data/fueloil/FueloilTrader.json';
import fuelManufacturerData from '../data/fueloil/FueloilManufacture.json';
import fuelImporterData from '../data/fueloil/FueloilImporter.json';
import fuelDistributerData from '../data/fueloil/FueloilDistributer.json';

// ✅ Solvent Data
import solventSupplierData from '../data/solvent/SolventSupplier.json';
import solventTraderData from '../data/solvent/SolventTrader.json';
import solventManufacturerData from '../data/solvent/SolventManufacture.json';
import solventImporterData from '../data/solvent/SolventImporter.json';
import solventDistributerData from '../data/solvent/SolventDistributer.json';

// ✅ Biofuel Data
import biofuelSupplierData from '../data/biofuel/BiofuelSupplier.json';
import biofuelTraderData from '../data/biofuel/BiofuelTrader.json';
import biofuelManufacturerData from '../data/biofuel/BiofuelManufacture.json';
import biofuelImporterData from '../data/biofuel/BiofuelImporter.json';
import biofuelDistributerData from '../data/biofuel/BiofuelDistributer.json';

// ✅ Briquette Data
import briquetteSupplierData from '../data/briquette/BriquetteSupplier.json';
import briquetteTraderData from '../data/briquette/BriquetteTrader.json';
import briquetteManufacturerData from '../data/briquette/BriquetteManufacture.json';
import briquetteImporterData from '../data/briquette/BriquetteImporter.json';
import briquetteDistributerData from '../data/briquette/BriquetteDistributer.json';

// ✅ Lamp Oil Data
import lampSupplierData from '../data/lampoil/LampoilSupplier.json';
import lampTraderData from '../data/lampoil/LampoilTrader.json';
import lampManufacturerData from '../data/lampoil/LampoilManufacture.json';
import lampImporterData from '../data/lampoil/LampoilImporter.json';
import lampDistributerData from '../data/lampoil/LampoilDistributer.json';

// ✅ CNSL Resin Data
import cnslSupplierData from '../data/cnslresin/CnslSupplier.json';
import cnslTraderData from '../data/cnslresin/CnslTrader.json';
import cnslManufacturerData from '../data/cnslresin/CnslManufacture.json';
import cnslImporterData from '../data/cnslresin/CnslImporter.json';
import cnslDistributerData from '../data/cnslresin/CnslDistributer.json';

// ✅ Hydrocarbon Data
import hydroSupplierData from '../data/hydrocarbon/HydroCarbonSupplier.json';
import hydroTraderData from '../data/hydrocarbon/HydroCarbonTrader.json';
import hydroManufacturerData from '../data/hydrocarbon/HydroCarbonManufacture.json';
import hydroImporterData from '../data/hydrocarbon/HydroCarbonImporter.json';
import hydroDistributerData from '../data/hydrocarbon/HydrocarbonDistributer.json';


// Utility
function toUrlSlug(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

// 🔁 Objective Map by Category
const objectiveMapByCategory = {
  mto: {
    Supplier: supplierData,
    Trader: traderData,
    Manufacturer: manufacturerData,
    Importer: importerData,
    Distributor: distributerData,
  },
  'white-base-oil': {
    Supplier: wboSupplierData,
    Trader: wboTraderData,
    Manufacturer: wboManufacturerData,
    Importer: wboImporterData,
    Distributor: wboDistributerData,
  },
  'yellow-base-oil': {
    Supplier: yboSupplierData,
    Trader: yboTraderData,
    Manufacturer: yboManufacturerData,
    Importer: yboImporterData,
    Distributor: yboDistributerData,
  },
  ldo: {
    Supplier: ldoSupplierData,
    Trader: ldoTraderData,
    Manufacturer: ldoManufacturerData,
    Importer: ldoImporterData,
    Distributor: ldoDistributerData,
  },
  'fuel-oil': {
    Supplier: fuelSupplierData,
    Trader: fuelTraderData,
    Manufacturer: fuelManufacturerData,
    Importer: fuelImporterData,
    Distributor: fuelDistributerData,
  },
  solvent: {
    Supplier: solventSupplierData,
    Trader: solventTraderData,
    Manufacturer: solventManufacturerData,
    Importer: solventImporterData,
    Distributor: solventDistributerData,
  },
  biofuel: {
    Supplier: biofuelSupplierData,
    Trader: biofuelTraderData,
    Manufacturer: biofuelManufacturerData,
    Importer: biofuelImporterData,
    Distributor: biofuelDistributerData,
  },
    briquette: {
    Supplier: briquetteSupplierData,
    Trader: briquetteTraderData,
    Manufacturer: briquetteManufacturerData,
    Importer: briquetteImporterData,
    Distributor: briquetteDistributerData,
  },  'lamp-oil': {
    Supplier: lampSupplierData,
    Trader: lampTraderData,
    Manufacturer: lampManufacturerData,
    Importer: lampImporterData,
    Distributor: lampDistributerData,
  },
  'cnsl-resin': {
    Supplier: cnslSupplierData,
    Trader: cnslTraderData,
    Manufacturer: cnslManufacturerData,
    Importer: cnslImporterData,
    Distributor: cnslDistributerData,
  },
  hydrocarbon: {
    Supplier: hydroSupplierData,
    Trader: hydroTraderData,
    Manufacturer: hydroManufacturerData,
    Importer: hydroImporterData,
    Distributor: hydroDistributerData,
  },


};

export default function ProductCategoryPage({ data, categorySlug }) {
  if (!data) return <div>Data not found</div>;

  const objectiveMap = objectiveMapByCategory[categorySlug] || {};

  const readableCategory = {
    mto: 'MTO',
    'white-base-oil': 'White Base Oil',
    'yellow-base-oil': 'Yellow Base Oil',
    ldo: 'LDO',
    'fuel-oil': 'Fuel Oil',
    solvent: 'Solvent',
    biofuel: 'Biofuel',
      briquette: 'Briquette',
        'lamp-oil': 'Lamp Oil',
  'cnsl-resin': 'CNSL Resin',
  hydrocarbon: 'Hydrocarbon',


  }[categorySlug] || '';
  // ✅ Get all subproducts (unique)
const allSubproducts = data.subproducts || [];

  return (
    <>
      <Helmet>
        <title>{data.title} | FuelOil.in</title>
        <meta name="description" content={data.description?.substring(0, 160)} />
        <meta name="keywords" content={data.title} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description?.substring(0, 160)} />
        <meta property="og:image" content={data.image} />
      </Helmet>

      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
        <img src={data.image} alt={data.title} className="mb-4 max-w-full rounded-md shadow" />
        <p className="mb-6 text-gray-700">{data.description}</p>

        {data.coa_images && (
          <>
            <h2 className="text-xl font-semibold mb-2">Certificate of Analysis (COA)</h2>
            <img src={data.coa_images} alt={`${data.title} COA`} className="max-w-md mb-6 rounded shadow" />
          </>
        )}
        
    {/* 🔍 Subproduct Cards Section */}
{/* 🔍 Subproduct Cards Section */}
{allSubproducts.length > 0 && (
  <div className="mb-12">
    <h2 className="text-2xl font-bold mb-4 text-center text-[#0c2c53]">
      Explore {readableCategory} Subproducts
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {allSubproducts.map((sub) => {
        const defaultObjective = Object.keys(objectiveMap)[0]?.toLowerCase() || 'supplier';
        const defaultCity = 'mumbai';
        const route = `/${categorySlug}/${toUrlSlug(sub.name)}/${defaultObjective}/${toUrlSlug(defaultCity)}`;

        return (
          <Link
            to={route}
            key={sub.name}
            className="border rounded-xl p-4 shadow hover:shadow-lg hover:scale-[1.02] transition-all duration-200 text-center"
          >
            <img
              src={sub.image || '/placeholder.jpg'}
              alt={sub.name}
              className="w-full h-32 object-contain mb-3 rounded-md"
            />
            <p className="uppercase font-semibold text-sm tracking-wide text-gray-800">{sub.name}</p>
          </Link>
        );
      })}
    </div>
  </div>
)}



        {Object.keys(objectiveMap).length > 0 && (
          <div className="mt-12 border-t pt-6">
            <h2 className="text-2xl font-bold mb-4 text-center text-[#980000]">
              Explore {readableCategory} by Objective
            </h2>

            {Object.entries(objectiveMap).map(([objective, list]) => (
              <div key={objective} className="mb-8">
                <h3 className="text-lg font-semibold text-center mb-2 text-gray-800">
                  Explore <span className="text-red-600">{objective}</span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-blue-700 text-sm text-center">
                  {list.map((item) => (
                    <Link
                      key={`${objective}-${item.city}-${item.subproduct}`}
                      to={`/${categorySlug}/${toUrlSlug(item.subproduct)}/${objective.toLowerCase()}/${toUrlSlug(item.city)}`}
                      className="hover:text-red-600 underline transition-colors"
                    >
                      {item.city} – {item.subproduct}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
