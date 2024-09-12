import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body"; 
//import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact"
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
//import Instamart from "./components/Instamart";

const About = lazy(() => import("./components/About"));
const Instamart = lazy(() => import("./components/Instamart"));

//Upon On Demand Loading

const Applayout = () => {
  return (
    <>    
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children:[
      {
        path: "/",
        element:   <Body />,
      },
      {
        path: "/about",
        element:<Suspense fallback={<Shimmer />}><About /></Suspense>,
      },
      {
        path: "/contact", 
        element:<Contact />,
      },
      {
        path: "/instamart",
        element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense>,
      },
      {
        path:"/restaurant/:resid", //resid is a key of useParams()'s object which will have value based on path
        element: <RestaurantMenu />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

//import * as obj from "/components/Header" // imports all the components as an obj object from Header file
//obj.Title, obj.Header,..... can be accessed

/*
const heading1 = React.createElement("h1", { id: "heading1", key:"a"}, "Heading1 for parcel");
const heading2 = React.createElement("h2", { id: "heading2", key:"b"}, "Heading2");
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
//const heading = React.createElement("h2", { id: "heading" }, "Namste React");
console.log(heading1);

//JSX
const heading3=(
<h3 id="ab" key="bc">
    Namste React
</h3>
);

const abcd="Hello dear ones"

const Head1=function()
{
    return(
        <div>
            
            {heading1}
            {heading2}
            {heading3}
            {abcd}
            <p>{1+2}</p>
            {console.log("any JS code")}
            <h4>Hello I am varun</h4>
        </div>
    )
}
*/

/* 
          header
              -logo(Title)
              -nav items(right side)
              -cart
          body
              -Search bar
              -RestaurantList
              -RestaurantCard(many cards)
                  -image
                  -name
                  -rating
                  -cuisines
          
          footer
              -links
              -copyright
  
          */




/* const burgerking = {
  image:
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
  name: "Burger King",
  cusinies: ["Burger", "American"],
  rating: "4.4",
}; */

/*const RestaurantCard = () => {
    return (
      <div className="card"> 
      <img src={burgerking.image} />
      <h2> {burgerking.name}</h2>
      <h3> {burgerking.cusinies.join(", ")}</h3> 
      <h4>{burgerking.rating} stars</h4>
      </div>

    );
} */
