import React from 'react';  
import { Link } from 'react-router-dom';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faFacebook, faTwitter, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';  

const Footer = () => {  
  return (  
    <footer className="bg-pink-800 text-white p-6">  
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center text-center md:text-left">  
        <div className="mb-4 md:mb-0">  
          <h4 className="text-lg font-bold mb-2">About Us</h4>  
          <p className="text-sm">We are dedicated to providing the best restaurant recommendations for food lovers everywhere.</p>  
        </div>  

        <div className="mb-4 md:mb-0">  
          <h4 className="text-lg font-bold mb-2">Links</h4>  
          <ul className="space-y-2">  
            <li>  
              <Link to="/" className="hover:text-pink-400 transition-colors">Home</Link>  
            </li>  
            <li>  
              <Link to="/about" className="hover:text-pink-400 transition-colors">About</Link>  
            </li>  
            <li>  
              <Link to="/contact" className="hover:text-pink-400 transition-colors">Contact</Link>  
            </li>  
            <li>  
              <Link to="/privacy" className="hover:text-pink-400 transition-colors">Privacy Policy</Link>  
            </li>  
          </ul>  
        </div>  

        <div className="mb-4 md:mb-0">  
          <h4 className="text-lg font-bold mb-2">Contact Us</h4>  
          <p className="text-sm">Email: <a href="mailto:support@bitebloom.com" className="text-pink-400 hover:underline">support@bitebloom.com</a></p>  
          <p className="text-sm">Phone: +91 9090909090</p>  
        </div>  

        <div className="mb-4 md:mb-0">  
          <h4 className="text-lg font-bold mb-2">Follow Us</h4>  
          <div className="flex space-x-4 justify-center md:justify-start">  
            <a   
              href="https://facebook.com"   
              className="text-pink-400 hover:text-white transition-colors"  
              target="_blank"   
              rel="noopener noreferrer"  
            >  
              <FontAwesomeIcon icon={faFacebook} size="2x" />  
            </a>  
            <a   
              href="https://twitter.com"   
              className="text-pink-400 hover:text-white transition-colors"  
              target="_blank"   
              rel="noopener noreferrer"  
            >  
              <FontAwesomeIcon icon={faTwitter} size="2x" />  
            </a>  
            <a   
              href="https://instagram.com"   
              className="text-pink-400 hover:text-white transition-colors"  
              target="_blank"   
              rel="noopener noreferrer"  
            >  
              <FontAwesomeIcon icon={faInstagram} size="2x" />  
            </a>  
            <a   
              href="https://linkedin.com"   
              className="text-pink-400 hover:text-white transition-colors"  
              target="_blank"   
              rel="noopener noreferrer"  
            >  
              <FontAwesomeIcon icon={faLinkedin} size="2x" />  
            </a>  
            <a   
              href="https://whatsapp.com"   
              className="text-pink-400 hover:text-white transition-colors"  
              target="_blank"   
              rel="noopener noreferrer"  
            >  
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />  
            </a>  
          </div>  
        </div>  
      </div>  

      <div className="border-t border-pink-600 mt-6 pt-4 text-center">  
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>  
        <p className="text-sm">Developed by Shubham</p>  
      </div>  
    </footer>  
  );  
};  

export default Footer;