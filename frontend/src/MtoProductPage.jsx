import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const BASE = "https://raw.githubusercontent.com/auctionDeveloper/Fueloil-json-data/main/data/mto/";

const objectiveFiles = {
  Supplier: "MtoSupplier.json",
  Trader: "MtoTrader.json",
  Manufacturer: "MtoManufacture.json",
  Importer: "MtoImporter.json",
  Distributor: "MtoDistributer.json",
};

export default function MtoProductPage({ data }) {
  const [objectiveMap, setObjectiveMap] = useState({});
  const [loading, setLoading] = useState(true);

  const metaDesc = data.description?.substring(0, 160);
  const seoURL = `https://fueloil.in/product/mto/${data.slug}`;

  useEffect(() => {
    const fetchObjectives = async () => {
      setLoading(true);
      const newObjectiveMap = {};
      for (const [key, filename] of Object.entries(objectiveFiles)) {
        try {
          const res = await fetch(`${BASE}${filename}`);
          const json = await res.json();
          newObjectiveMap[key] = json;
        } catch (err) {
          console.error(`Error loading ${key}:`, err);
          newObjectiveMap[key] = [];
        }
      }
      setObjectiveMap(newObjectiveMap);
      setLoading(false);
    };

    fetchObjectives();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10">
      <Helmet>
        <title>{data.title} | FuelOil</title>
        <meta name="description" content={metaDesc} />
        <meta name="keywords" content={`${data.productname}, ${data.city}, MTO supplier, Mineral Turpentine Oil, Arabo Oil`} />
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

      {/* Product Images */}
     <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 mb-8">
  {data.images.map((img, idx) => (
    <img
      key={idx}
      src={img}
      alt="MTO"
      className="rounded-md object-cover w-full h-[100px] sm:h-[120px] md:h-[130px]"
    />
  ))}
</div>


      {/* Title + Subtitle */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#0c2c53]">{data.title}</h1>
        <h2 className="text-xl text-red-700 font-semibold mt-1">({data.subtitle})</h2>
      </div>

      {/* Description + Main Image */}
 {/* ✅ Description + Image */}
<div className="flex flex-col md:flex-row gap-8 mb-12 items-start">
  {/* 📄 Description Text */}
  <div className="md:w-1/2 text-gray-700 leading-relaxed whitespace-pre-line text-justify">
    {data.description}
  </div>

  {/* 🧪 Description Image (Right-aligned & full width like others) */}
<div className="md:w-1/2 flex justify-center md:justify-end w-full">
  <div className="w-[300px] sm:w-[350px] md:w-[380px]">
    <img
      src={data.image1}
      alt="Main MTO"
      className="rounded-md shadow-md h-[250px] object-contain w-full"
    />
  </div>
</div>

</div>


      {/* COA Section */}
      <div className="mb-12 text-center px-4 overflow-x-auto">
        <h3 className="text-2xl font-semibold mb-4">Certificate of Analysis (COA)</h3>
        <p className="text-sm mb-4">
          PRODUCT NAME: <b>{data.productname}</b>
        </p>
        <div className="inline-block">
          <img
            src={data.coa_images}
            alt="COA"
            className="rounded-lg max-w-full sm:max-w-lg max-h-[400px] mx-auto shadow-md"
          />
        </div>
      </div>

      {/* Uses Section */}
 <div className="flex flex-col md:flex-row gap-8 mb-12 items-start">
  {/* 🧪 Uses Image - Aligned Left */}
  <div className="md:w-1/2 flex justify-center md:justify-start w-full">
    <div className="w-[300px] sm:w-[350px] md:w-[380px]">
      <img
        src={data.usesimages}
        alt="Uses"
        className="rounded-md shadow-md h-[250px] w-full object-contain"
      />
    </div>
  </div>

  {/* 🧾 Uses Text - Aligned Right */}
  <div className="md:w-1/2 flex justify-center md:justify-end w-full text-gray-700">
    <div className="w-[300px] sm:w-[350px] md:w-[380px]">
      <h3 className="text-2xl font-bold mb-4">
        Uses of <span className="text-red-600">{data.productname}</span>
      </h3>
      <ul className="list-disc pl-5 leading-relaxed text-justify">
        {(Array.isArray(data.usesdescription) ? data.usesdescription : data.usesdescription?.split('\n')).map((item, idx) => (
          <li key={idx} className="mb-2">{item.replace(/^\u2022\s?/, '')}</li>
        ))}
      </ul>
    </div>
  </div>
</div>



      {/* Area Names + Map */}
   {/* ✅ Area Names + Map */}
<div className="flex flex-col md:flex-row gap-8 mb-12 items-start">
  {/* 📍 Area Text */}
  <div className="md:w-1/2 text-gray-700">
    <h3 className="text-2xl font-bold mb-4">
      Places We Serve <span className="text-red-600">{data.productname}</span> in <span className="text-blue-600">{data.city}</span>
    </h3>
    <ul className="list-disc pl-5 leading-relaxed text-justify">
      {data.areanames.map((area, idx) => (
        <li key={idx} className="mb-2">{area}</li>
      ))}
    </ul>
  </div>

  {/* 🗺️ Map Image - NOW aligned right & bigger */}
 <div className="md:w-1/2 flex justify-center md:justify-end w-full">
  <div className="w-[300px] sm:w-[350px] md:w-[380px]">
    <img
      src={data.images_map}
      alt={`${data.city} map`}
      className="rounded-lg shadow-md h-[250px] w-full object-contain"
    />
  </div>
</div>

</div>

    </div>
  );
}
