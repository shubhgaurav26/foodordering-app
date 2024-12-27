import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handlePlaceOrder = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating API call
    navigate("/order-confirmation"); // Navigate after order placement
  };

  return (
    <div className="text-center m-6 p-6 bg-pink-50 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-pink-800 mb-6">Your Cart</h1>

      <div className="w-10/12 md:w-6/12 m-auto">
        {cartItems.length > 0 ? (
          <>
            {/* Buttons */}
            <div className="flex justify-center space-x-4 mb-6">
              <button
                aria-label="Clear all items from the cart"
                className="px-6 py-3 text-lg font-semibold text-white bg-pink-500 rounded-lg shadow-md transition-all duration-300 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300"
                onClick={handleClearCart}
                disabled={cartItems.length === 0}
              >
                Clear Cart
              </button>

              <button
                aria-label="Place your order"
                className="px-6 py-3 text-lg font-semibold text-white bg-pink-600 rounded-lg shadow-md transition-all duration-300 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
                onClick={handlePlaceOrder}
                disabled={cartItems.length === 0}
              >
                Place Order
              </button>
            </div>

            {/* Cart Items */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-pink-700 mb-4">Items in Cart</h2>
              <ItemList items={cartItems} showAddButton={false} />
            </div>
          </>
        ) : (
          // Empty Cart Message
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-lg text-pink-800 mb-4 font-serif italic">
              Your cart is empty.
            </h2>
            <p className="text-sm text-pink-600 mb-6 font-mono">
              Add items to your cart to place an order.
            </p>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 text-lg font-semibold text-white bg-pink-500 rounded-lg shadow-md transition-all duration-300 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300"
            >
              Start Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
