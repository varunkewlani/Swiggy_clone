import { Component } from "react";
import ProfileFunctionalComponent from "./ProfileFunctionalComponent";
import Profile from "./Profileclass";
class About extends Component {
  constructor(props) {
    super(props);
    
    console.log("Parent Constructor");
  }

componentDidMount() //Best place to make API call
{
      console.log("Parent componentDidMount class");
  
}


render()
{
  //render method returns some jsx
  
  console.log("Parent render class");
  return (
    <>
       <div className="about-page">
      <h1>About Us</h1>
        <p>Welcome to our Swiggy clone, built from scratch by Varun Kewlani. This project showcases various React concepts and functionalities.</p>
        <section className="profile-section">
          <Profile name="Varun" />
        </section>
        {/* <ProfileFunctionalComponent name={"Varun"}/> */}
        
        {/* <Profile name={"Kewlani"} /> */}
      </div>
    </>
  );
}
}
export default About;
