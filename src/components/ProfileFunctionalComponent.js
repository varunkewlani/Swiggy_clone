import React, { useState } from 'react'

const Profile = (props) => {
    let [count, setCount]=useState(0)
    console.log("render1 functional");
    
  return (
    <div>
        
      <h1> Profile Functional Component</h1>
      <h2> Name: {props.name}</h2>
      <h3>Count: {count}</h3>
      <button onClick={()=> setCount(++count)}>Press me</button>

    </div>
  )
}

export default Profile;
