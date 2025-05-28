export default function ProductTemplate({ data }) {
  if (!data) return <div>Product not found</div>;

  return (
    <div className="product-template p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <img
        src={data.image}
        alt={data.title}
        className="w-full max-w-sm mb-4 object-contain"
      />
      <p className="mb-6">{data.description}</p>

      <h2 className="text-xl font-semibold mb-2">Certificate of Analysis (COA)</h2>
      <img
        src={data.coa_images}
        alt={`${data.title} COA`}
        className="w-full max-w-md object-contain"
      />
    </div>
  );
}
