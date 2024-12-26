// Cart.js  
import { useDispatch, useSelector } from "react-redux";  
import { clearCart } from "../utils/cartSlice";  
import ItemList from "./ItemList";  

const Cart = () => {  
    const cartItems = useSelector((store) => store.cart.items);  
    const dispatch = useDispatch();  

    const handleClearCart = () => {  
        dispatch(clearCart());  
    };  

    return (  
        <div className="text-center m-4 p-4">  
            <h1 className="text-2xl font-bold">Cart</h1>  
            <div className="w-6/12 m-auto">  
                <button  
                    aria-label="Clear all items from the cart"  
                    className="p-2 m-2 bg-black text-white"  
                    onClick={handleClearCart}  
                >  
                    Clear Cart  
                </button>  
                {cartItems.length === 0 ? (  
                    <h1>Cart is empty. Add items to the cart</h1>  
                ) : (  
                    <ItemList items={cartItems} showAddButton={false} />  
                )}  
            </div>  
        </div>  
    );  
};  

export default Cart;