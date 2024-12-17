const RestaurantCard = (props) => {
    const { resData } = props;
  
    // Conditional rendering to handle undefined data
    if (!resData || !resData.info) {
      return <div>Loading...</div>; // Display a loading message or placeholder
    }
  
    return (
      <div className="res-card">
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

  export default RestaurantCard ;