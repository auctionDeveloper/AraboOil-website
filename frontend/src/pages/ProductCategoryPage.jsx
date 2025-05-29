import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function toUrlSlug(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export default function ProductCategoryPage({ data, categorySlug }) {
  if (!data) return <div>Data not found</div>;

  return (
    <>
      <Helmet>
        <title>{data.title} | Arabo Oil</title>
        <meta name="description" content={data.description.substring(0, 160)} />
        <meta name="keywords" content={data.title} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description.substring(0, 160)} />
        <meta property="og:image" content={data.image} />
      </Helmet>

      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-2">{data.title}</h1>

        <img
          src={data.image}
          alt={data.title}
          className="mb-4 max-w-full"
        />

        <p className="mb-6">{data.description}</p>

        <h2 className="text-xl font-semibold mb-2">Certificate of Analysis (COA)</h2>
        <img
          src={data.coa_images}
          alt={`${data.title} COA`}
          className="max-w-md mb-6"
        />

        {data.subproducts && data.subproducts.length > 0 && (
          <>
            <h2 className="text-xl font-semibold mb-4">Subproducts</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {data.subproducts.map((subprod, idx) => {
                const productUrl = `/product/${categorySlug}/${toUrlSlug(subprod.name)}`;
                return (
                  <Link
                    to={productUrl}
                    key={idx}
                    className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 block"
                  >
                    <img
                      src={subprod.image}
                      alt={subprod.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-3">
                      <h3 className="text-lg font-medium text-center">{subprod.name}</h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}
