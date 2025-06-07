// ✅ YellowBaseOilPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
// If it's in the same folder
import BaseOilLayout from '../BaseOilLayout';

// OR if it's in a layouts folder
// import BaseOilLayout from '../layouts/BaseOilLayout';

// Yellow Base Oil JSON imports
import yboSupplier from '../data/yellowbaseoil/YboSupplier.json';
import yboTrader from '../data/yellowbaseoil/YboTrader.json';
import yboManufacturer from '../data/yellowbaseoil/YboManufacture.json';
import yboImporter from '../data/yellowbaseoil/YboImporter.json';
import yboDistributer from '../data/yellowbaseoil/YboDistributer.json';

export default function YellowBaseOilProductPage({ data }) {
  const metaDesc = data.description?.substring(0, 160);
  const seoURL = `https://fueloil.in/product/yellow-base-oil/${data.slug}`;
  const objectiveMap = {
    Supplier: yboSupplier,
    Trader: yboTrader,
    Manufacturer: yboManufacturer,
    Importer: yboImporter,
    Distributor: yboDistributer,
  };

  return (
    <BaseOilLayout
      data={data}
      metaDesc={metaDesc}
      seoURL={seoURL}
      objectiveMap={objectiveMap}
      basePath="yellow-base-oil"
      categoryLabel="Yellow"
    />
  );
}
