import RestaurantCard from "./RestaurantCard";  
import { useEffect, useState } from "react";  
import Shimmer from "./Shimmer";  
import { Link } from "react-router-dom";  
import WhatsOnYourMind from "./WhatsOnYourMind";  

const Body = () => {  
  const [listOfRestaurants, setListOfRestaurants] = useState([]);  
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);  
  const [searchText, setSearchText] = useState("");  
  const [filterOption, setFilterOption] = useState("all");  
  const [whatsOnYourMind, setWhatsOnYourMind] = useState([]);  
  const [page, setPage] = useState(1);  
  const [loading, setLoading] = useState(false);  
  const [hasMore, setHasMore] = useState(true);  

  useEffect(() => {  
    fetchData(page);  
  }, [page]);  

  const fetchData = async (page) => {  
    if (loading || !hasMore) return; // Prevent multiple fetches while loading  
    setLoading(true);  

    try {  
      const data = await fetch(
        `/api/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&page=${page}`
      );
        
      const json = await data.json();  

      const newRestaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];  
      
      if (newRestaurants.length === 0) {  
        setHasMore(false); // No more data to load  
      } else {  
        setListOfRestaurants((prev) => [...prev, ...newRestaurants]);  
        setFilteredRestaurant((prev) => [...prev, ...newRestaurants]);  
      }  

      // Extracting "What's on your mind?" image grid cards  
      const whatsOnYourMindData = json?.data?.cards[0]?.card?.card?.imageGridCards?.info || [];  
      setWhatsOnYourMind(whatsOnYourMindData);  
    } catch (error) {  
      console.error("Failed to fetch data:", error);  
    } finally {  
      setLoading(false);  
    }  
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

  const handleScroll = () => {  
    const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1;  
    if (bottom && hasMore && !loading) {  
      setPage((prev) => prev + 1);  
    }  
  };  

  useEffect(() => {  
    window.addEventListener("scroll", handleScroll);  
    return () => {  
      window.removeEventListener("scroll", handleScroll);  
    };  
  }, [loading, hasMore]);  

  if (listOfRestaurants.length === 0) {  
    return <Shimmer />;  
  }  

  return (  
    <div className="body p-6 bg-pink-50">  
      <WhatsOnYourMind items={whatsOnYourMind} />  

      <div className="filter flex flex-col md:flex-row justify-center items-center mb-6 space-x-0 md:space-x-4 space-y-4 md:space-y-0">  
        <div className="search flex items-center space-x-2 w-full md:w-1/3">  
          <input  
            type="text"  
            className="search-box w-full px-4 py-3 border border-pink-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:outline-none transition duration-300"  
            placeholder="Enter restaurant name"  
            value={searchText}  
            onChange={handleSearchChange}  
          />  
        </div>  

        <select  
          className="filter-select w-full md:w-1/3 bg-pink-300 text-pink-800 px-4 py-3 rounded-lg hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"  
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

      {loading && <Shimmer />} {/* Show loading indicator while fetching */}  
    </div>  
  );  
};  

export default Body;
