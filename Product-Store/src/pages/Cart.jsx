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

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">Cart</h1>

      <button
        onClick={() => dispatch(clearCart())}
        className="bg-red-500 text-white px-3 py-1 mt-3"
      >
        Clear Cart
      </button>

      {items.map((item) => (
        <div key={item.id} className="border p-3 my-3">
          <h2>{item.title}</h2>
          <p>${item.price}</p>

          <div className="flex gap-2">
            <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          </div>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="text-red-600"
          >
            Remove
          </button>
        </div>
      ))}

      <h2 className="text-xl font-bold mt-5">
        Total: ${totalPrice.toFixed(2)}
      </h2>
    </div>
  );
};

export default Cart;
