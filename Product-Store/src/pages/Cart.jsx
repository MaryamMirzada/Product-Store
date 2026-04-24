import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from "../features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // 🟡 Empty state
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-gray-500">
        <h2 className="text-2xl">🛒 Your cart is empty</h2>
        <p className="mt-2">Start adding some products</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold text-red-600 mb-4">Shopping Cart</h1>

      {/* Clear button */}
      <button
        onClick={() => dispatch(clearCart())}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded mb-5 transition"
      >
        Clear Cart
      </button>

      {/* Items */}
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            {/* Info */}
            <div className="flex items-center gap-4">
              <img src={item.image} className="h-20 w-20 object-contain" />
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-red-600 font-bold">${item.price}</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* Quantity */}
              <div className="flex items-center border rounded">
                <button
                  onClick={() => dispatch(decreaseQty(item.id))}
                  className="px-3 py-1 text-red-600 hover:bg-red-100"
                >
                  -
                </button>

                <span className="px-3">{item.quantity}</span>

                <button
                  onClick={() => dispatch(increaseQty(item.id))}
                  className="px-3 py-1 text-red-600 hover:bg-red-100"
                >
                  +
                </button>
              </div>

              {/* Remove */}
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-600 hover:text-red-800 font-medium"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-8 text-right">
        <h2 className="text-2xl font-bold text-red-600">
          Total: ${totalPrice.toFixed(2)}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
