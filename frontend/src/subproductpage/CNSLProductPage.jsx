import React from 'react';

export default function CNSLProductPage({ data }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* Image Gallery */}
      {data.images?.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8">
          {data.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={data.title || "CNSL Resin Product"}
              className="rounded-md object-cover h-32 w-full"
            />
          ))}
        </div>
      )}

      {/* Title & Description */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{data.title}</h1>
        {data.subtitle && (
          <h2 className="text-xl text-gray-600 italic mb-4">{data.subtitle}</h2>
        )}
        <p className="text-gray-700 max-w-3xl mx-auto whitespace-pre-line">
          {data.description}
        </p>
      </div>

      {/* Main Image */}
      {data.image1 && (
        <div className="flex justify-center mb-10">
          <img
            src={data.image1}
            alt="Main CNSL Resin"
            className="rounded-lg max-h-96 object-contain"
          />
        </div>
      )}

      {/* Certificate of Analysis */}
      {data.coa_images && (
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-4">
            Certificate of Analysis (COA)
          </h3>
          <p className="text-center text-sm mb-4">
            PRODUCT NAME: <span className="font-bold">{data.productname}</span>
          </p>
          <div className="flex justify-center">
            <img
              src={data.coa_images}
              alt="COA"
              className="rounded-lg max-w-full h-auto"
            />
          </div>
        </div>
      )}

      {/* Uses Section */}
      {(data.usesimages || data.usesdescription) && (
        <div className="md:flex items-center gap-6 mb-12">
          {data.usesimages && (
            <img
              src={data.usesimages}
              alt="CNSL Resin Uses"
              className="w-full md:w-1/2 rounded-md mb-4 md:mb-0"
            />
          )}
          <ul className="list-disc pl-5 text-gray-700">
            {Array.isArray(data.usesdescription)
              ? data.usesdescription.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))
              : data.usesdescription
                  ?.split('\n')
                  .map((item, idx) => (
                    <li key={idx}>{item.replace(/^\u2022\s?/, '')}</li>
                  ))}
          </ul>
        </div>
      )}

      {/* Locations & Map */}
      {(data.city || data.areanames?.length > 0 || data.images_map) && (
        <div className="md:flex items-start gap-6 mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h4 className="text-xl font-bold mb-2">
              Places We Serve <span className="text-red-600">{data.productname}</span>
              {data.city && <> in <span className="text-blue-600">{data.city}</span></>}
            </h4>
            <ul className="list-disc pl-5 text-gray-700">
              {data.areanames?.map((area, idx) => (
                <li key={idx}>{area}</li>
              ))}
            </ul>
          </div>
          {data.images_map && (
            <div className="md:w-1/2">
              <img
                src={data.images_map}
                alt="Map"
                className="rounded-md w-full"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
