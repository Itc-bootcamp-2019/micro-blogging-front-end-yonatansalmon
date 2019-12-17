import React from "react";
import { Switch, Link, Route, BrowserRouter as Router, useParams } from "react-router-dom";




const Profile =()=> {
    return(
   
        <div>
            <h1 className="profile-title">Profile</h1>
            <div className ="users-title">User Name</div>
            <input className = "profile-input" type="text"></input>
            <button className = "profile-button">Save</button>
        </div>

     

  
    )
}


export default Profile