import RestaurantCard from "./RestaurantCard";  
import { useEffect, useState } from "react";  
import Shimmer from "./Shimmer";  
import { Link } from "react-router-dom";  
import WhatsOnYourMind from "./WhatsOnYourMind"; // Import the WhatsOnYourMind component  

const Body = () => {  
  const [listOfRestaurants, setListOfRestaurant] = useState([]);  
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);  
  const [searchText, setSearchText] = useState("");  
  const [filterOption, setFilterOption] = useState("all");  
  const [whatsOnYourMind, setWhatsOnYourMind] = useState([]); // Changed to an array  

  useEffect(() => {  
    fetchData();  
  }, []);  

  const fetchData = async () => {  
    const data = await fetch(  
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"  
    );  
    const json = await data.json();  
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  

    // Extracting "What's on your mind?" image grid cards  
    const whatsOnYourMindData = json?.data?.cards[0]?.card?.card?.imageGridCards?.info || [];  
    setWhatsOnYourMind(whatsOnYourMindData);  
  };  

  const handleFilterChange = (e) => {  
    const option = e.target.value;  
    setFilterOption(option);  

    let filteredList = listOfRestaurants;  

    switch (option) {  
      case "4.5":  
        filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);  
        break;  
      case "3.5":  
        filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 3.5);  
        break;  
      case "delivery":  
        // Implement logic for filtering by delivery time if needed  
        break;  
      case "all":  
      default:  
        filteredList = listOfRestaurants; // Show all restaurants  
        break;  
    }  

    setFilteredRestaurant(filteredList);  
  };  

  const handleSearchChange = (e) => {  
    const value = e.target.value;  
    setSearchText(value);  

    const filteredRestaurantList = listOfRestaurants.filter((res) =>  
      res.info.name.toLowerCase().includes(value.toLowerCase())  
    );  

    setFilteredRestaurant(filteredRestaurantList);  
  };  

  if (listOfRestaurants.length === 0) {  
    return <Shimmer />;  
  }  

  return (  
    <div className="body p-6 bg-pink-50">  
      {/* Use the WhatsOnYourMind component here */}  
      <WhatsOnYourMind items={whatsOnYourMind} />  

      <div className="filter flex justify-center items-center mb-6 space-x-4">  
        <div className="search flex items-center space-x-2">  
          <input  
            type="text"  
            className="search-box px-4 py-2 border border-pink-300 rounded-md"  
            placeholder="Enter restaurant name"  
            value={searchText}  
            onChange={handleSearchChange}  
          />  
        </div>  

        <select  
          className="filter-select bg-pink-300 text-pink-800 px-4 py-2 rounded-md hover:bg-pink-400"  
          value={filterOption}  
          onChange={handleFilterChange}  
        >  
          <option value="all">Select an option</option>  
          <option value="4.5">Rating above 4.5</option>  
          <option value="3.5">Rating above 3.5</option>  
          <option value="delivery">Delivery Time</option>  
        </select>  
      </div>  

      <div className="res-container grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">  
        {filteredRestaurant.map((restaurant) => (  
          <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>  
            <RestaurantCard resData={restaurant} />  
          </Link>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default Body;