import React from "react";
import logo from "./assets/logo.png"


function NavBar() {
    return (
        <nav className="sticky">
        <div id="navdiv">
            <img src={logo} id="logo"></img>
            <div id="nav-btn-div">
                <button className="nav-btn">Sign Up</button>
                <button className="nav-btn">Login</button>
            </div>
        </div>
        </nav>
    )
}

export default NavBar;