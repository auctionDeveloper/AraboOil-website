import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { jsonUrls } from '../utils/jsonLinks';

export default function BriquetteObjectivesPage() {
  const { subproduct, objective, city } = useParams();
  const [objectiveMap, setObjectiveMap] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const files = [
          'BriquetteSupplier',
          'BriquetteTrader',
          'BriquetteManufacture',
          'BriquetteImporter',
          'BriquetteDistributer'
        ];
        const keys = ['supplier', 'trader', 'manufacturer', 'importer', 'distributor'];

        const results = await Promise.all(
          files.map(file => fetch(jsonUrls.data.briquette[file]).then(res => res.json()))
        );

        const map = {};
        keys.forEach((key, idx) => {
          map[key] = results[idx];
        });

        setObjectiveMap(map);
      } catch (err) {
        console.error('Failed to load Briquette data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const toSlug = (str) => str?.toLowerCase().replace(/\s+/g, '-');

  if (loading) return <div className="text-center py-10">Loading Briquette data...</div>;

  const dataArray = objectiveMap[objective?.toLowerCase()] || [];
  const data = dataArray.find(
    (item) => toSlug(item.city) === city
  );

  if (!data) return <div className="text-center py-10">Product Not Found</div>;

  const image1 = data.image1 || data.images?.[0];
  const usesimages = data.usesimages || data.images?.[1];
  const metaDesc = data.description?.substring(0, 160);
  const seoURL = `https://fueloil.in/briquette/${subproduct}/${objective}/${city}`;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Helmet>
        <title>{data.title} {objective} in {data.city} | FuelOil.in</title>
        <meta name="description" content={metaDesc} />
        <meta name="keywords" content={`${data.productname}, ${data.city}, Briquette ${objective}, FuelOil`} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:image" content={image1} />
        <meta property="og:url" content={seoURL} />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={metaDesc} />
        <meta name="twitter:image" content={image1} />
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
      <div className="flex flex-col md:flex-row gap-8 mb-12 items-start">
        <div className="md:w-1/2 text-gray-700 leading-relaxed whitespace-pre-line text-justify">
          {data.description}
        </div>
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
        <div className="md:w-1/2 flex justify-center md:justify-start w-full">
          <div className="w-[300px] sm:w-[350px] md:w-[380px]">
            <img
              src={data.usesimages}
              alt="Uses"
              className="rounded-md shadow-md h-[250px] w-full object-contain"
            />
          </div>
        </div>
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
      <div className="flex flex-col md:flex-row gap-8 mb-12 items-start">
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

      {/* 
      <div className="mt-12 border-t pt-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#980000]">Explore Briquette by Objective</h2>
        {Object.entries(objectiveMap).map(([objectiveKey, list]) => (
          <div key={objectiveKey} className="mb-8">
            <h3 className="text-lg font-semibold text-center mb-2 text-gray-800">
              Explore <span className="text-red-600">{objectiveKey}</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-blue-700 text-sm text-center">
              {list.map((item) => (
                <a
                  key={`${objectiveKey}-${item.city}-${item.subproduct}`}
                  href={`/briquette/${toSlug(item.subproduct)}/${objectiveKey.toLowerCase()}/${toSlug(item.city)}`}
                  className="hover:text-red-600 underline transition-colors"
                >
                  {item.city} – {item.subproduct}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      */}
    </div>
  );
}
