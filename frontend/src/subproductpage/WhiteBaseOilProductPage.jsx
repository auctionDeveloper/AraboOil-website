import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import BaseOilLayout from '../BaseOilLayout';

const BASE = "https://raw.githubusercontent.com/auctionDeveloper/Fueloil-json-data/main/data/whitebaseoil/";

const objectiveFiles = {
  Supplier: "WboSupplier.json",
  Trader: "WboTrader.json",
  Manufacturer: "WboManufacture.json",
  Importer: "WboImporter.json",
  Distributor: "WboDistributer.json",
};

export default function WhiteBaseOilProductPage({ data }) {
  const [objectiveMap, setObjectiveMap] = useState({});
  const [loading, setLoading] = useState(true);

  const metaDesc = data.description?.substring(0, 160);
  const seoURL = `https://fueloil.in/product/white-base-oil/${data.slug}`;

  useEffect(() => {
    const fetchObjectives = async () => {
      setLoading(true);
      const map = {};
      for (const [key, file] of Object.entries(objectiveFiles)) {
        try {
          const res = await fetch(`${BASE}${file}`);
          const json = await res.json();
          map[key] = json;
        } catch (err) {
          console.error(`Failed to fetch ${key}:`, err);
          map[key] = [];
        }
      }
      setObjectiveMap(map);
      setLoading(false);
    };

    fetchObjectives();
  }, []);

  return (
    <>
      <Helmet>
        <title>{data.title} | Arabo Oil</title>
        <meta name="description" content={metaDesc} />
        <meta name="keywords" content={`${data.productname}, ${data.city}, White Base Oil, Arabo Oil`} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:image" content={data.image1} />
        <meta property="og:url" content={seoURL} />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={metaDesc} />
        <meta name="twitter:image" content={data.image1} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={seoURL} />
      </Helmet>

      <BaseOilLayout
        data={data}
        metaDesc={metaDesc}
        seoURL={seoURL}
        objectiveMap={objectiveMap}
        loading={loading}
        basePath="white-base-oil"
        categoryLabel="White"
      />
    </>
  );
}
