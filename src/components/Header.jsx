import { LOGO_URL } from "../constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items); 

  return (
    <div className="header bg-pink-100 text-pink-800 p-4 flex justify-between items-center shadow-md">
      <div className="logo-container">
        <img className="logo w-20" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-pink-600">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-pink-600">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-pink-600">Contact Us</Link>
          </li>
          <li>
            <Link to ="/cart">
            Cart ({cartItems.length} items)    
            </Link>
          </li>
          <button
            className="login bg-pink-200 text-pink-800 px-4 py-2 rounded-md hover:bg-pink-300"
            onClick={() => { setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login"); }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
