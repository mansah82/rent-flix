import React from "react";
import { Link } from "react-router-dom";
import './css/navbar.css';


const NavBar = () => {

    return(
        <div className="header">
            <h2>Rentflix</h2>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/cart">Cart</Link>
        </div>


    )
}

export default NavBar;