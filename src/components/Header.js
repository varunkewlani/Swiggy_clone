import { useState } from "react";
import Logo from "../assets/img/foodvilla.avif";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Title = () => {
  return (
    <a href="/">
      {" "}
      {/*  <a href="/"> creates a hyperlink, when clicked, navigates us back to the root of website. */}
      <img className="logo" src={Logo} alt="foodvillaimage"></img>
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          {/* <a href="/about"> 
          <li>About</li>
          </a> */}

          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to="/instamart">
            <li>Instamart</li>
          </Link>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
         
            <li>Cart</li>
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}> Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}> Login</button>
      )}
    </div>
  );
};

export default Header;
