import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const fetchProduct = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });

  // 🔄 Loading Skeleton
  if (isLoading) {
    return (
      <div className="p-10 grid md:grid-cols-2 gap-10 animate-pulse">
        <div className="h-80 bg-gray-200 rounded"></div>
        <div>
          <div className="h-6 bg-gray-200 w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 w-full mb-2"></div>
          <div className="h-4 bg-gray-200 w-5/6 mb-2"></div>
          <div className="h-4 bg-gray-200 w-2/3"></div>
        </div>
      </div>
    );
  }

  if (error)
    return (
      <h2 className="p-10 text-red-600 text-xl">Error loading product ❌</h2>
    );

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        <div className="bg-white rounded-xl shadow p-6 flex justify-center">
          <img
            src={data.image}
            className="h-80 object-contain hover:scale-105 transition"
          />
        </div>

   
        <div>
          <h1 className="text-3xl font-bold mb-3">{data.title}</h1>

          <p className="text-gray-600 leading-relaxed">{data.description}</p>

          <h2 className="text-2xl font-bold text-red-600 mt-5">
            ${data.price}
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Category: {data.category}
          </p>
          <button
            onClick={() => dispatch(addToCart(data))}
            className="mt-6 w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition shadow"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
