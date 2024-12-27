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
    <div className="header bg-gradient-to-r from-pink-50 to-pink-200 shadow-lg py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="bg-pink-300 rounded-full p-3">
            <img className="w-12 h-12" src={LOGO_URL} alt="BiteBloom Logo" />
          </div>
          <h1 className="text-2xl font-extrabold text-pink-800">BiteBloom</h1>
        </div>

        {/* Navigation Section */}
        <nav className="flex space-x-12">
          {[
            { to: "/", icon: <FaHome className="text-xl" />, label: "Home" },
            { to: "/about", icon: <FaInfoCircle className="text-xl" />, label: "About" },
            { to: "/contact", icon: <FaPhoneAlt className="text-xl" />, label: "Contact" },
            {
              to: "/cart",
              icon: <FaShoppingCart className="text-xl" />,
              label: "Shopping",
              badge: cartItems.length,
            },
          ].map(({ to, icon, label, badge }) => (
            <div key={to} className="relative">
              <Link
                to={to}
                className="flex flex-col items-center hover:text-pink-900 text-pink-700 transition-transform transform hover:scale-110"
              >
                <div className="bg-pink-100 p-3 rounded-full shadow-md">{icon}</div>
                <span className="text-lg font-semibold mt-2">{label}</span>
              </Link>
              {badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white font-bold text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {badge}
                </span>
              )}
            </div>
          ))}
        </nav>

        {/* User Info Section */}
        <div className="flex items-center space-x-8">
          <div className="flex flex-col items-center">
            <span
              className={`w-3 h-3 rounded-full ${
                onlineStatus ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
            <span className="text-sm text-pink-800">{onlineStatus ? "Online" : "Offline"}</span>
          </div>
          <div className="text-pink-800 font-semibold">
            {loggedInUser || "Guest User"}
          </div>
          <button
            className="relative bg-pink-200 hover:bg-pink-300 text-pink-800 px-6 py-3 rounded-full font-medium shadow-md transition duration-300 flex items-center space-x-2"
            onClick={() => setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-pink-300 to-pink-500 opacity-20 rounded-full"></span>
            <span className="relative z-10">{btnNameReact}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
