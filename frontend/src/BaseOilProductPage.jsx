import React from 'react';
import { Helmet } from 'react-helmet';

// ✅ Import White Base Oil JSONs
import wboSupplier from './data/whitebaseoil/WboSupplier.json';
import wboTrader from './data/whitebaseoil/WboTrader.json';
import wboManufacturer from './data/whitebaseoil/WboManufacture.json';
import wboImporter from './data/whitebaseoil/WboImporter.json';
import wboDistributer from './data/whitebaseoil/WboDistributer.json';

// ✅ Import Yellow Base Oil JSONs
import yboSupplier from './data/yellowbaseoil/YboSupplier.json';
import yboTrader from './data/yellowbaseoil/YboTrader.json';
import yboManufacturer from './data/yellowbaseoil/YboManufacture.json';
import yboImporter from './data/yellowbaseoil/YboImporter.json';
import yboDistributer from './data/yellowbaseoil/YboDistributer.json';

export default function BaseOilProductPage({ data, categorySlug }) {
  const metaDesc = data.description?.substring(0, 160);
  const basePath = categorySlug === 'yellow-base-oil' ? 'yellow-base-oil' : 'white-base-oil';
  const seoURL = `https://fueloil.in/product/${basePath}/${data.slug}`;

  const objectiveMap =
    categorySlug === 'yellow-base-oil'
      ? {
          Supplier: yboSupplier,
          Trader: yboTrader,
          Manufacturer: yboManufacturer,
          Importer: yboImporter,
          Distributor: yboDistributer,
        }
      : {
          Supplier: wboSupplier,
          Trader: wboTrader,
          Manufacturer: wboManufacturer,
          Importer: wboImporter,
          Distributor: wboDistributer,
        };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Helmet>
        <title>{data.title} | Arabo Oil</title>
        <meta name="description" content={metaDesc} />
        <meta name="keywords" content={`${data.productname}, ${data.city}, Base Oil, Arabo Oil`} />
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

      {/* Images */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-8">
        {data.images?.map((img, idx) => (
          <img key={idx} src={img} alt="Base Oil" className="rounded-md object-cover h-32 w-full" />
        ))}
      </div>

      {/* Title + Subtitle */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{data.title}</h1>
        {data.subtitle && <h2 className="text-xl text-red-700 font-semibold">({data.subtitle})</h2>}
      </div>

      {/* Description + Main Image */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2 text-gray-700 leading-relaxed whitespace-pre-line">{data.description}</div>
        <div className="md:w-1/2 flex justify-center">
          <img src={data.image1} alt="Main Visual" className="rounded-md shadow-md max-w-[300px]" />
        </div>
      </div>

      {/* COA */}
      <div className="mb-12 text-center">
        <h3 className="text-2xl font-semibold mb-4">Certificate of Analysis (COA)</h3>
        <p className="text-sm mb-4">PRODUCT NAME: <b>{data.productname}</b></p>
        <img src={data.coa_images} alt="COA" className="rounded-lg max-w-xl mx-auto shadow-md" />
      </div>

      {/* Uses */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="flex justify-center md:w-1/2">
          <img src={data.usesimages} alt="Uses" className="rounded-md w-[250px] shadow-md object-contain" />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">Uses of <span className="text-red-600">{data.productname}</span></h3>
          <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
            {(Array.isArray(data.usesdescription) ? data.usesdescription : data.usesdescription?.split('\n')).map((item, idx) => (
              <li key={idx} className="mb-2">{item.replace(/^\u2022\s?/, '')}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Area + Map */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">
            Places We Serve <span className="text-red-600">{data.productname}</span> in <span className="text-blue-600">{data.city}</span>
          </h3>
          <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
            {data.areanames?.map((area, idx) => <li key={idx} className="mb-2">{area}</li>)}
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={data.images_map} alt={`${data.city} map`} className="rounded-md shadow-md max-w-md" />
        </div>
      </div>

      {/* Explore by Objective */}
      <div className="mt-12 border-t pt-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#980000]">
          Explore {categorySlug === 'yellow-base-oil' ? 'Yellow' : 'White'} Base Oil by Objective
        </h2>

        {Object.entries(objectiveMap).map(([objective, list]) => (
          <div key={objective} className="mb-8">
            <h3 className="text-lg font-semibold text-center mb-2 text-gray-800">
              Explore <span className="text-red-600">{objective}</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-blue-700 text-sm text-center">
              {list.map((item) => (
                <a
                  key={`${objective}-${item.city}-${item.subproduct}`}
                  href={`/${basePath}/${item.subproduct.toLowerCase().replace(/\s+/g, '-')}/${objective.toLowerCase()}/${item.city.toLowerCase().replace(/\s+/g, '-')}`}
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
