import React from 'react';
import { Switch, Link, Route, BrowserRouter as Router, useParams } from "react-router-dom";


const Navbar = () => {
    return(
     
        <div className="nav-container">
            <Link to="/" className = "home-menu">Home</Link>
            <Link to="/profile" className ="profile-menu">Profile</Link>
        </div>
     
    )
}


export default Navbar