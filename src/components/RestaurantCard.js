import { IMG_CDN_URL } from "../constants"; // Ensure this import is present

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  sla,
  avgRating, 
}) => {
  return (
    <div className="card">
      <img
        src={IMG_CDN_URL + cloudinaryImageId} // Corrected
        alt={name} // Added alt text for accessibility
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{sla?.lastMileTravel} kilometers</h4>
      <h4>{avgRating} ratings</h4>
    </div>
  );
};

export default RestaurantCard;
