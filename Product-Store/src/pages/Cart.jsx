import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from "../features/cart/cartSlice";
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const { state } = useContext(ThemeContext);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // EMPTY STATE
  if (items.length === 0) {
    return (
      <div
        className={`flex flex-col items-center justify-center h-[70vh] ${
          state.darkMode ? "bg-black text-gray-300" : "text-gray-500"
        }`}
      >
        <h2 className="text-2xl font-semibold">🛒 Cart is Empty</h2>
        <p className="mt-2 text-sm">Start adding products to see them here</p>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen px-4 lg:px-20 py-10 transition-all duration-300 ${
        state.darkMode ? "bg-black text-white" : "bg-gray-50 text-black"
      }`}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-red-600">Shopping Cart</h1>

        <button
          onClick={() => dispatch(clearCart())}
          className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition"
        >
          Clear Cart
        </button>
      </div>

      {/* CART ITEMS */}
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-xl shadow hover:shadow-lg transition ${
              state.darkMode
                ? "bg-gray-900 border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
          >
            {/* LEFT SIDE */}
            <div className="flex items-center gap-4 w-full md:w-auto">
              <img
                src={item.image}
                className="h-20 w-20 object-contain rounded"
              />

              <div>
                <h2 className="font-semibold line-clamp-1">{item.title}</h2>

                <p className="text-red-600 font-bold mt-1">${item.price}</p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4">
              {/* QTY CONTROL */}
              <div
                className={`flex items-center rounded-md overflow-hidden border ${
                  state.darkMode ? "border-gray-600" : "border-gray-300"
                }`}
              >
                <button
                  onClick={() => dispatch(decreaseQty(item.id))}
                  className="px-3 py-1 hover:bg-red-100 text-red-600"
                >
                  -
                </button>

                <span className="px-4 text-sm font-semibold">
                  {item.quantity}
                </span>

                <button
                  onClick={() => dispatch(increaseQty(item.id))}
                  className="px-3 py-1 hover:bg-red-100 text-red-600"
                >
                  +
                </button>
              </div>

              {/* REMOVE */}
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-sm text-red-500 hover:text-red-700 transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* TOTAL BOX */}
      <div className="mt-10 flex justify-end">
        <div
          className={`w-full md:w-80 p-5 rounded-xl shadow-md ${
            state.darkMode ? "bg-gray-900" : "bg-white"
          }`}
        >
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2 text-sm">
            <span>Total Items</span>
            <span>{items.length}</span>
          </div>

          <div className="flex justify-between mb-4 text-sm">
            <span>Total Price</span>
            <span className="text-red-600 font-bold">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
