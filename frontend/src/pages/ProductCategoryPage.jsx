export default function ProductCategoryPage({ data }) {
  if (!data) return <div>Data not found</div>;

  return (
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

      {/* You can add imagesofmtosubproct or any other section if needed */}
    </div>
  );
}
