import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className ="logo - container">
                <img className ="logo" src =" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZB-sbuI_mSzHI3rvvC0ZXus0WGwDKq99frg&s"/>
            </div>
            <div className =" nav-items">
                <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                </ul>             
            </div>
        </div>

    )
    
}

const styleCard= {
    backgroundColor : "0f0f0f"

}

// const RestaurantCard = (props)=>{
//     const {resData} =  props;
//     return (
//         <div className="res-card" style ={styleCard} >
//             <img className ="res-logo " alt= "res-logo "  src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/kjvhidvkfcbpoudvo0b2"/>
         
//             <h3>{resData.info.name}</h3>
//            <h4>{resData.info.cuisines.join(", ")}</h4>
//            <h4>{resData.info.costForTwo}</h4>
//       <h4>{resData.info.sla.slaString}</h4>
//       <h4>{resData.info.avgRating} Stars</h4>

//         </div>


//     );
// };

const RestaurantCard = (props) => {
    const { resData } = props;
  
    // Conditional rendering to handle undefined data
    if (!resData || !resData.info) {
      return <div>Loading...</div>; // Display a loading message or placeholder
    }
  
    return (
      <div className="res-card" style={styleCard}>
        <img
          className="res-logo"
          alt="res-logo"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`}
        />
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(", ")}</h4>
        <h4>{resData.info.costForTwo}</h4>
        <h4>{resData.info.sla.slaString}</h4>
        <h4>{resData.info.avgRating} Stars</h4>
      </div>
    );
  };
  
// const resObj = {          
//     "info": {
//       "id": "671928",
//       "name": "KFC",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/377e9327-3ca7-48ac-b36c-96f5bf6e186a_671928.JPG",
//       "locality": "7th Block",
//       "areaName": "Koramangla",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "Burgers",
//         "Fast Food",
//         "Rolls & Wraps"
//       ],
//       "avgRating": 4.3,
//       "parentId": "547",
//       "avgRatingString": "4.3",
//       "totalRatingsString": "3.6K+",
//       "sla": {
//         "deliveryTime": 20,
//         "lastMileTravel": 1.2,
//         "serviceability": "SERVICEABLE",
//         "slaString": "15-20 mins",
//         "lastMileTravelString": "1.2 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-12-18 02:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
//             "description": "bolt!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "bolt!",
//                   "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "20% OFF",
//         "subHeader": "ABOVE ₹2999",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-3547ccfd-6d41-4068-861f-f531e1d20c3e"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/bangalore/kfc-7th-block-koramangla-rest671928",
//       "type": "WEBLINK"
//     }
//   };

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
                <RestaurantCard/>
            
            </div>
        </div>
    )

}

const AppLayout = () => {
    return <div className= "app">
        <Header/>
        <Body/>

    </div>
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
