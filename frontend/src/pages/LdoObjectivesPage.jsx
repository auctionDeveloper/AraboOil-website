import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

// ✅ Import all LDO objective data
import supplierData from '../data/ldo/LdoSupplier.json';
import traderData from '../data/ldo/LdoTrader.json';
import manufacturerData from '../data/ldo/LdoManufacture.json';
import importerData from '../data/ldo/LdoImporter.json';
import distributerData from '../data/ldo/LdoDistributer.json';

const objectiveMap = {
  supplier: supplierData,
  trader: traderData,
  manufacturer: manufacturerData,
  importer: importerData,
  distributor: distributerData,
};

export default function LdoObjectivesPage() {
  const { subproduct, objective, city } = useParams();
  const dataArray = objectiveMap[objective.toLowerCase()] || [];

  const data = dataArray.find(
    (item) =>
      item.subproduct.toLowerCase().replace(/\s+/g, '-') === subproduct &&
      item.city.toLowerCase().replace(/\s+/g, '-') === city
  );

  if (!data) return <div className="text-center py-10">Product Not Found</div>;

  const metaDesc = data.description?.substring(0, 160);
  const seoURL = `https://fueloil.in/ldo/${subproduct}/${objective}/${city}`;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Helmet>
        <title>{data.title} {objective} in {data.city} | FuelOil.in</title>
        <meta name="description" content={metaDesc} />
        <meta name="keywords" content={`${data.productname}, ${data.city}, LDO ${objective}, Arabo Oil`} />
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

      {/* Image Gallery */}
     
      {/* Render All Sections (Images, COA, Uses, Areas) */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-8">
        {data.images.map((img, idx) => (
          <img key={idx} src={img} alt={`Image ${idx + 1}`} className="rounded-md object-cover h-32 w-full" />
        ))}
      </div>

       <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#0c2c53]">{data.title}</h1>
        <h2 className="text-xl text-red-700 font-semibold mt-1">({data.subtitle})</h2>
      </div>

      {/* 🔍 Description + Main Image */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2 text-gray-700 leading-relaxed whitespace-pre-line">{data.description}</div>
        <div className="md:w-1/2 flex justify-center">
          <img src={data.image1} alt="Main MTO" className="rounded-md shadow-md max-w-[300px]" />
        </div>
      </div>


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

      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="flex justify-center md:w-1/2">
          <img src={data.usesimages} alt="Uses" className="rounded-md w-[250px] shadow-md object-contain" />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">Applications of <span className="text-red-600">{data.productname}</span></h3>
          <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
            {data.usesdescription.map((use, idx) => (
              <li key={idx} className="mb-2">{use}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">Serving <span className="text-blue-600">{data.city}</span></h3>
          <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
            {data.areanames.map((area, idx) => (
              <li key={idx} className="mb-2">{area}</li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={data.images_map} alt={`${data.city} Map`} className="rounded-md shadow-md max-w-md" />
        </div>
      </div>

      {/* 🔍 Objective-wise Links */}
      <div className="mt-12 border-t pt-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#980000]">Explore LDO by Objective</h2>

        {Object.entries(objectiveMap).map(([objective, list]) => (
          <div key={objective} className="mb-8">
            <h3 className="text-lg font-semibold text-center mb-2 text-gray-800">
              Explore <span className="text-red-600">{objective}</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-blue-700 text-sm text-center">
              {list.map((item) => (
                <a
                  key={`${objective}-${item.city}-${item.subproduct}`}
                  href={`/ldo/${item.subproduct.toLowerCase().replace(/\s+/g, '-')}/${objective.toLowerCase()}/${item.city.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-red-600 underline transition-colors"
                >
                  {item.city} – {item.subproduct}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
