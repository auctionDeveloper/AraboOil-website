// ✅ WhiteBaseOilPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

// White Base Oil JSON imports
import wboSupplier from '../data/whitebaseoil/WboSupplier.json';
import wboTrader from '../data/whitebaseoil/WboTrader.json';
import wboManufacturer from '../data/whitebaseoil/WboManufacture.json';
import wboImporter from '../data/whitebaseoil/WboImporter.json';
import wboDistributer from '../data/whitebaseoil/WboDistributer.json';

export default function WhiteBaseOilProductPage({ data }) {
  const metaDesc = data.description?.substring(0, 160);
  const seoURL = `https://fueloil.in/product/white-base-oil/${data.slug}`;
  const objectiveMap = {
    Supplier: wboSupplier,
    Trader: wboTrader,
    Manufacturer: wboManufacturer,
    Importer: wboImporter,
    Distributor: wboDistributer,
  };

  return (
    <BaseOilLayout
      data={data}
      metaDesc={metaDesc}
      seoURL={seoURL}
      objectiveMap={objectiveMap}
      basePath="white-base-oil"
      categoryLabel="White"
    />
  );
}