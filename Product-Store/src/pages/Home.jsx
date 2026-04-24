import { useProducts } from "../hook/useProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

const Home = () => {
  const { data, isLoading, error } = useProducts();
  const dispatch = useDispatch();

  // 🟣 Context Settings
  const { state } = useContext(SettingsContext);

  if (isLoading) {
    return <h2 className="p-5 text-xl">Loading products...</h2>;
  }

  if (error) {
    return <h2 className="p-5 text-red-500">Something went wrong!</h2>;
  }

  return (
    <div
      className={
        state.view === "grid"
          ? "grid grid-cols-1 md:grid-cols-3 gap-4 p-5"
          : "flex flex-col gap-4 p-5"
      }
    >
      {data.map((product) => (
        <div key={product.id} className="border p-3 rounded shadow bg-white">
          <img src={product.image} className="h-40 mx-auto" />

          <h2 className="font-bold mt-2">{product.title}</h2>
          <p>${product.price}</p>

          {/* 🛒 Add to Cart */}
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-blue-500 text-white px-3 py-1 mt-3 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
