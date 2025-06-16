function CategoryPageLoader() {
  const { category } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategoryData() {
      try {
        const response = await fetch(`${BASE_URL}/product.json`);
        const result = await response.json();
        const key = slugToKey(category);
        const fetchedData = result.product[key] || null;
        setData(fetchedData);
      } catch (err) {
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    fetchCategoryData();
  }, [category]);

  if (loading) return <div className="p-4">Loading category...</div>;
  if (!data) return <div className="p-4 text-red-600">Category not found</div>;
  return <ProductCategoryPage data={data} categorySlug={category} />;
}
