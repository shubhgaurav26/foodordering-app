import React, { useRef } from 'react';  
import { IMG_URL } from '../constants';   

const WhatsOnYourMind = ({ items }) => {  
    const scrollRef = useRef(null);  

    const scrollLeft = () => {  
        if (scrollRef.current) {  
            scrollRef.current.scrollBy({  
                left: -200,  // Scroll distance  
                behavior: 'smooth'  
            });  
        }  
    };  

    const scrollRight = () => {  
        if (scrollRef.current) {  
            scrollRef.current.scrollBy({  
                left: 200,  // Scroll distance  
                behavior: 'smooth'  
            });  
        }  
    };  

    return (  
        <div className="whats-on-your-mind mb-6 p-4 bg-white border border-gray-300 rounded-md shadow-md relative">  
            <h2 className="text-xl font-bold text-gray-800 mb-4">What's on your mind?</h2>  
            <div className="flex items-center relative">  
                <button   
                    onClick={scrollLeft}   
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-200"  
                >  
                    &lt;  
                </button>  
                <div className="flex overflow-x-auto py-4 scrollbar-hide" ref={scrollRef}>  
                    {items.map((item) => (  
                        <div key={item.id} className="image-grid-card p-2 flex-none">  
                            <img  
                                src={`${IMG_URL}${item.imageId}`}  
                                alt={item.accessibility.altText}  
                                className="w-24 h-24 rounded-md object-cover border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-200" />  
                        </div>  
                    ))}  
                </div>  
                <button   
                    onClick={scrollRight}   
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-200"  
                >  
                    &gt;  
                </button>  
            </div>  
        </div>  
    );  
};  

export default WhatsOnYourMind;