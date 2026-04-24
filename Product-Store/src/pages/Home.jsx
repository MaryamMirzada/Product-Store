import { useProducts } from "../hooks/useProducts";

const Home = () => {
  const { data, isLoading, error } = useProducts();

  if (isLoading) {
    return <h2 className="p-5 text-xl">Loading products...</h2>;
  }

  if (error) {
    return <h2 className="p-5 text-red-500">Something went wrong!</h2>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
      {data.map((product) => (
        <div key={product.id} className="border p-3 rounded shadow">
          <img src={product.image} className="h-40 mx-auto" />
          <h2 className="font-bold mt-2">{product.title}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
