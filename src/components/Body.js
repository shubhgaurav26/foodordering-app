import RestaurantCard from "./RestaurantCard";

const resObj = {
    info: {
      id: "671928",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/377e9327-3ca7-48ac-b36c-96f5bf6e186a_671928.JPG",
      locality: "7th Block",
      areaName: "Koramangla",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.3,
      sla: {
        slaString: "15-20 mins",
      },
    },
  };
  
  
const Body =() =>{
    return(
        <div className="body">
            <div className="search "> Search </div>
            <div className="res-container "> 
                <RestaurantCard
                resData={resObj}/>
             
            
            </div>
        </div>
    )

}

export default Body;