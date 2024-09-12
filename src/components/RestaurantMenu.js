import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestuarant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  // How to read dynamic URL params
  const { resid } = useParams();
  console.log(resid);

  const restaurant=useRestuarant(resid)

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="res-menu">
      <div>
        <h1>Restaurant id: {resid}</h1>
        <h2>{restaurant.name}</h2>
        <img
          style={{ width: "300px", height: "300px" }}
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
        />
        <h4> City: {restaurant.city}</h4>
        <h4> Rating: {restaurant.avgRating}</h4>
        <h4> Area: {restaurant.areaName}</h4>
        <h4> Cuisines: {restaurant.cuisines}</h4>{" "}
        <h4>Cost for two: Rs. {restaurant.costForTwo}/-</h4>
      </div>
    </div>
  );
};

export default RestaurantMenu;
