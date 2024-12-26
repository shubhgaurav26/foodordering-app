import { LOGO_URL } from "../constants";  
import { useState, useContext } from "react";  
import { Link } from "react-router-dom";  
import { useSelector } from "react-redux";  
import useOnlineStatus from "../utils/useOnlineStatus";  
import UserContext from "../utils/UserContext";  
import { FaHome, FaInfoCircle, FaPhoneAlt, FaShoppingCart } from "react-icons/fa";  

const Header = () => {  
  const [btnNameReact, setBtnNameReact] = useState("Login");  
  const onlineStatus = useOnlineStatus();  
  const { loggedInUser } = useContext(UserContext);  
  const cartItems = useSelector((store) => store.cart.items);  

  return (  
    <div className="header bg-gradient-to-r from-pink-100 to-pink-300 text-pink-900 p-4 shadow-lg">  
      <div className="container mx-auto flex justify-between items-center">  
        {/* Logo */}  
        <div className="logo-container flex items-center space-x-2">  
          <img className="logo w-16 h-16" src={LOGO_URL} alt="logo" />  
          <h1 className="text-xl font-bold tracking-wide">BiteBloom</h1>  {/* Updated app name here */}  
        </div>  

        {/* Navigation Buttons Container */}  
        <div className="flex-grow flex justify-center">  
          <div className="flex space-x-4 w-1/2">  
            <Link   
              to="/"   
              className="flex flex-col items-center bg-white hover:bg-pink-200 text-pink-800 border border-pink-300 rounded-lg px-4 py-3 transition duration-300 transform hover:scale-105"  
            >  
              <FaHome className="text-2xl" />  
              <span className="text-sm">Home</span>  
            </Link>  
            <Link   
              to="/about"   
              className="flex flex-col items-center bg-white hover:bg-pink-200 text-pink-800 border border-pink-300 rounded-lg px-4 py-3 transition duration-300 transform hover:scale-105"  
            >  
              <FaInfoCircle className="text-2xl" />  
              <span className="text-sm">About</span>  
            </Link>  
            <Link   
              to="/contact"   
              className="flex flex-col items-center bg-white hover:bg-pink-200 text-pink-800 border border-pink-300 rounded-lg px-4 py-3 transition duration-300 transform hover:scale-105"  
            >  
              <FaPhoneAlt className="text-2xl" />  
              <span className="text-sm">Contact</span>  
            </Link>  
            <div className="relative flex flex-col items-center">  
              <Link   
                to="/cart"   
                className="flex flex-col items-center bg-white hover:bg-pink-200 text-pink-800 border border-pink-300 rounded-lg px-4 py-3 transition duration-300 transform hover:scale-105"  
              >  
                <FaShoppingCart className="text-2xl" />  
                <span className="text-sm">Cart</span>  
              </Link>  
              {cartItems.length > 0 && (  
                <span className="absolute top-0 right-0 bg-red-500 text-white font-bold text-xs rounded-full h-5 w-5 flex items-center justify-center">  
                  {cartItems.length}  
                </span>  
              )}  
            </div>  
          </div>  
        </div>  

        {/* Right Section: User Info and Logout Button */}  
        <div className="flex items-center space-x-6">  
          <div className="flex items-center space-x-2">  
            {onlineStatus ? (  
              <div className="flex items-center text-green-600">  
                <span className="text-xs">🟢</span> {/* Green dot for online */}  
                <span className="font-bold">Online</span>  
              </div>  
            ) : (  
              <div className="flex items-center text-red-600">  
                <span className="text-xs">🔴</span> {/* Red dot for offline */}  
                <span className="font-bold">Offline</span>  
              </div>  
            )}  
            <span className="text-pink-900 font-semibold">{loggedInUser}</span>  
          </div>  

          {/* Logout Button in the Corner */}  
          <button  
            className="bg-pink-200 hover:bg-pink-300 text-pink-800 px-4 py-2 rounded-md font-medium transition duration-300"  
            onClick={() => {  
              setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");  
            }}  
          >  
            {btnNameReact}  
          </button>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Header;