import { CDN_URL } from "../constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    costForTwo,
    cuisines,
    avgRating,
    sla: { slaString },
  } = resData?.info;

  return (
    <div className="res-card bg-pink-50 p-4 rounded-xl shadow-lg border border-pink-200 hover:bg-pink-100 hover:shadow-xl hover:border-pink-300 transition-all duration-300">
      {/* Image Section */}
      <img
        className="res-logo w-full h-40 object-cover rounded-lg"
        alt="res-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
      />

      {/* Content Section */}
      <div className="mt-3">
        {/* Truncated Title */}
        <h3 className="text-lg font-bold text-pink-800 truncate w-full">
          {name}
        </h3>
        <p className="text-sm text-pink-600 truncate">{cuisines.join(", ")}</p>
        <div className="flex justify-between items-center mt-2">
          <p className="text-sm font-semibold text-pink-700">{costForTwo}</p>
          <span className="bg-pink-300 text-pink-800 text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
            {avgRating} ⭐
          </span>
        </div>
        <p className="text-sm font-medium text-pink-700 mt-2 flex items-center">
          {slaString}
          <span className="ml-2 text-pink-500 text-xs">🚴‍♂️</span>
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
