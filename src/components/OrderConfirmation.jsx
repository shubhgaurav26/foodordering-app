import React from 'react';  
import { Link } from 'react-router-dom';  
import { LOGO_URL } from '../constants';

const OrderConfirmation = ({ orderDetails }) => {  
    return (  
        <div className="flex flex-col items-center justify-center h-screen bg-pink-100 p-8">  
            <div className="bg-white shadow-2xl rounded-2xl p-12 max-w-lg w-full">  
                {/* Logo Section with Jump Animation */}
                <div className="flex justify-center mb-8">
                    <img 
                        src={LOGO_URL} 
                        alt="Logo" 
                        className="w-24 h-24 rounded-full border-4 border-pink-500 shadow-lg animate-bounce" 
                    />
                </div>

                {/* Order Success Message */}
                <h1 className="text-4xl font-extrabold text-pink-600 text-center mb-6">Order Placed Successfully!</h1>  
                <p className="text-lg text-gray-700 text-center mb-8">
                    Thank you for your order. We are processing it and will update you soon.
                </p>  

                {/* Optional Order Summary */}
                {orderDetails && orderDetails.items.length > 0 && (  
                    <div className="mt-6 bg-pink-50 p-6 rounded shadow-md">  
                        <h2 className="text-2xl font-bold mb-4 text-pink-700">Order Summary:</h2>  
                        <ul className="space-y-4">  
                            {orderDetails.items.map((item, index) => (  
                                <li key={index} className="flex justify-between p-3 bg-white rounded shadow hover:shadow-lg transition-shadow duration-300">  
                                    <span className="flex items-center">  
                                        <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full mr-3" />  
                                        {item.name}  
                                    </span>  
                                    <span className="text-pink-600">${item.price.toFixed(2)}</span>  
                                </li>  
                            ))}  
                        </ul>  
                        <p className="font-semibold mt-6 border-t pt-4 text-pink-700">Total: ${orderDetails.total.toFixed(2)}</p>  
                    </div>  
                )}  

                {/* Go Back to Shop Button */}
                <Link   
                    to="/"   
                    className="mt-10 block px-8 py-4 bg-pink-500 text-white text-center rounded-lg shadow-lg hover:bg-pink-600 transition duration-300"  
                >  
                    Go back to Shop  
                </Link>  
            </div>  
        </div>  
    );  
};  

export default OrderConfirmation;


