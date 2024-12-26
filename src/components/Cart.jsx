import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList"; // Assuming you have the ItemList component for rendering cart items

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items); // Fetch cart items from Redux store
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart()); // Dispatch action to clear cart
    };

    return (
        <div className="container mx-auto my-8 p-4">
            {/* Title */}
            <h1 className="text-3xl font-bold text-center text-pink-900 mb-4">Your Cart</h1>

            {/* Cart Items or Empty Cart Message */}
            <div className="w-full max-w-6xl mx-auto">
                {/* Clear Cart Button */}
                <button
                    className="w-full md:w-1/4 p-2 mb-4 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>

                {/* If no items, display empty cart message */}
                {cartItems.length === 0 ? (
                    <div className="text-center text-lg text-gray-500">
                        <p>Your cart is empty. Add some items to the cart.</p>
                    </div>
                ) : (
                    <div>
                        {/* Cart Items */}
                        <ItemList items={cartItems} showAddButton={false} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
