import React from "react";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    // Properly initialize the state
    this.state = {
      userinfo: {
        name: "Dummy Name",
        location: "Alld",
        avatar_url: "",
        login: ""

      },
      error: null,

      count: 0, // count should be inside the state object
    };
    console.log("constructor class" + this.props.name);
  }
  async componentDidMount() {
    //Best m=place to make API call
    /* Because fetch is asynchronous, React doesn't wait for the API request to finish
     before proceeding with other lifecycle methods. As a result, the parent componentDidMount completes 
     and logs its message first, before the child logs its data fetch. */
    try {
      const response = await fetch("https://api.github.com/users/varunkewlani");
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const json = await response.json();
      this.setState({
        userinfo: json,
      });
      console.log("componentDidMount class " + this.props.name);
    } catch (error) {
      this.setState({ error: error.message });
      console.error("There was a problem with the fetch operation:", error);
    }
  }
  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("Component did Unmount");
  }
  render() {
    const { userinfo, error } = this.state;
    if (error) {
      return <div className="error-message">Error: {error}</div>;
    }
    if (!userinfo.login) {
      return <div>Loading...</div>;
    }
    //render method returns some jsx
    const { count } = this.state; // Access state variable
    console.log("render class" + this.props.name);
    return (
      <div className="profile-container">
        <h1>Profile</h1>
        <img src={userinfo.avatar_url} alt="Avatar" className="avatar" />
        <h2>Login ID: {userinfo.login}</h2>
        <h3>Name: {userinfo.name}</h3>
        <h3>Location: {userinfo.location}</h3>
        <Link to="/contact" className="contact-link">Contact Me</Link>
      </div>
    );

        {/* 
        <h2>Name: {this.props.name}</h2>
        <h3>Count: {count}</h3> 

        <button
          onClick={() => {
            this.setState({
              count: count + 1, // Increment count on button click
            });
          }}
        >
          Press me
        </button> */}
      
  }
}

export default Profile;
