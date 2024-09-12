import RestaurantCard from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data1 = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data1.json();
      
      const restaurantData =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ;

      setAllRestaurants(restaurantData);
      setFilteredRestaurants(restaurantData);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }

  const isOnline= useOnline();
  if(!isOnline)
  {
    return  <h1>🔴Please check your internet connection</h1>
  }

  function filterData(searchText, allRestaurants) {
    const lowerCaseSearchText = searchText.toLowerCase();
    return allRestaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(lowerCaseSearchText)
    );
  }

  const handleSearch = () => {
    const data = filterData(searchText, allRestaurants);
    setFilteredRestaurants(data);
  };

  if (!allRestaurants.length) {
    return <Shimmer />;
  }

  if (filteredRestaurants.length === 0 && searchText) {
    return <h1>No restaurant matches with this search</h1>;
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-button"
          onClick={handleSearch}
        >
          Search - {searchText}
        </button>
      </div>

      <div className="restaurantlist">
        {filteredRestaurants.map((restaurant) => (
          <Link to={"/restaurant/"+ restaurant.info.id} key={restaurant.info.id}><RestaurantCard {...restaurant.info}/></Link>
        ))}
      </div>
    </>
  );
};

export default Body;
 /*  if(filteredRestaurants.length === 0)
    { return <h1>No Restaurant matches with this search</h1> 
      
    };
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-button"
          onClick={() => {
            // Only filter restaurants when the search button is clicked
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data); // Update the filtered list
          }}
        >
          Search - {searchText}
        </button>
      </div>
 */
