import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function toUrlSlug(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

const BASE_URL = "https://raw.githubusercontent.com/auctionDeveloper/Fueloil-json-data/main/data";

export default function ProductCategoryPage({ data, categorySlug }) {
  const [objectiveMap, setObjectiveMap] = useState({});
  const [loading, setLoading] = useState(true);

  const readableCategory = {
    'mto': 'MTO',
    'white-base-oil': 'White Base Oil',
    'yellow-base-oil': 'Yellow Base Oil',
    ldo: 'LDO',
    'fuel-oil': 'Fuel Oil',
    'fueloil': 'Fuel Oil',
    solvent: 'Solvent',
    biofuel: 'Biofuel',
    briquette: 'Briquette',
    'lamp-oil': 'Lamp Oil',
    'cnsl-resin': 'CNSL Resin',
    hydrocarbon: 'Hydrocarbon',
  }[categorySlug] || '';

  const allSubproducts = data?.subproducts || [];

  useEffect(() => {
    async function fetchAllObjectives() {
      try {
        const objectives = ['Supplier', 'Trader', 'Manufacture', 'Importer', 'Distributer'];
        const categoryFolder = categorySlug.replace(/-/g, '');
        const readable = readableCategory.charAt(0).toUpperCase() + readableCategory.slice(1).toLowerCase();

        const newMap = {};

        await Promise.all(objectives.map(async (obj) => {
          const fileName = `${readable}${obj}.json`;
          const fileUrl = `${BASE_URL}/${categoryFolder}/${fileName}?nocache=${Date.now()}`;

          try {
            const res = await fetch(fileUrl);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const json = await res.json();
            newMap[obj] = json;
          } catch (err) {
            console.error(`❌ Failed to fetch ${fileUrl}`, err.message);
          }
        }));

        setObjectiveMap(newMap);
      } catch (err) {
        console.error("Failed to load objective data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchAllObjectives();
  }, [categorySlug]);

  if (!data) return <div>Data not found</div>;
  if (loading) return <div className="p-6">Loading objectives...</div>;

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

        {allSubproducts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-center text-[#0c2c53]">Explore {readableCategory} Subproducts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {allSubproducts.map((sub) => {
                const route = `/product/${categorySlug}/${toUrlSlug(sub.name)}`;
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
      </div>
    </>
  );
}
