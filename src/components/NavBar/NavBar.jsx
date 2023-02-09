import React from "react";
import "./navBar.css";

const NavBar = () => {
	return (
		<div className="navBar">
			<div className="navContainer">
				<span className="logo">Booking</span>
				<div className="navItems">
               <button className="navButton">Register</button>
               <button className="navButton">Login</button>
            </div>
			</div>
		</div>
	);
};

export default NavBar;
