import React from "react";
import NormalNav from './NormalNav';
import MobileNav from "./MobileNav";
import logo from '../../Images/logo.png';
import './navbar.css';

const NavBar = () => {
    return (
        <header>
            <img alt="Logo of RentFlix" id="logoImage" src={logo} />

            <nav id="navBar">
                <NormalNav />
                <MobileNav />
            </nav>
        </header>
    )
}

export default NavBar;