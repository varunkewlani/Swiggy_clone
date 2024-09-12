import { useState, useEffect } from "react";
import { FETCH_DATA_URL } from "../constants";

//Building our own Hook:-
const useRestuarant = (resid) => {
  const [restaurant, setRestaurant] = useState(null);
  //Get data from API
  useEffect(() => {
    getRestarantInfo();
  }, []);

  async function getRestarantInfo() {
    console.log("Fetching restaurant data for:", resid);
    const data = await fetch(FETCH_DATA_URL + resid);

    const json = await data.json();
    //    console.log(json);
    //    console.log(json?.data?.cards?.[2]?.card?.card?.info);

    setRestaurant(json?.data?.cards?.[2]?.card?.card?.info);
  }
  return restaurant;
  //returns restaurant data
};
export default useRestuarant;
