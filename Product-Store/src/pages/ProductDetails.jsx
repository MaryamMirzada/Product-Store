import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const fetchProduct = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

const ProductDetails = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });

  if (isLoading) return <h2 className="p-5">Loading...</h2>;
  if (error) return <h2 className="p-5 text-red-500">Error loading product</h2>;

  return (
    <div className="p-10 flex gap-10">
      <img src={data.image} className="h-80" />

      <div>
        <h1 className="text-3xl font-bold">{data.title}</h1>
        <p className="text-gray-600 mt-2">{data.description}</p>

        <h2 className="text-xl font-bold mt-4">${data.price}</h2>

        <p className="mt-2">Category: {data.category}</p>

        <button className="bg-blue-500 text-white px-4 py-2 mt-5 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;