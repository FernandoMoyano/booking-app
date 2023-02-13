import React from "react";
import "./mailList.css";
import "./mailList.css"

const MailList = () => {
	return (
		<div className="mail">
			<h1 className="mailTitle">Save time, save money!</h1>
         <span className="mailDesc"> Sign uo and we'll send the best deals to you</span>
         <div className="mailInputContainer">
            <input type="text" placeholder="your Email"></input>
            <button>Suscribe</button>
         </div>
		</div>
	);
};

export default MailList;
