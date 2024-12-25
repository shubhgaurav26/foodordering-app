import { LOGO_URL } from "../constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

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
          <li>Cart</li>
          <button
            className="login bg-pink-200 text-pink-800 px-4 py-2 rounded-md hover:bg-pink-300"
            onClick={() => { setBtnNameReact("Logout"); }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
