import React from "react";
import "./featured.css";

const Featured = () => {
	return (
		<div className="featured">
			<div className="featuredItem">
				<img
					className="featuredImg"
					alt=""
					src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/386211504.jpg?k=24c8578985b4aa15c32cb7811faf3073998b733b4cfce57786ffa4a09344dc95&o=&hp=1"></img>
				<div className="featuredTitles">
					<h1>Dublin</h1>
					<h2>123 properties</h2>
				</div>
			</div>

			<div className="featuredItem">
				<img
					className="featuredImg"
					alt=""
					src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/386211504.jpg?k=24c8578985b4aa15c32cb7811faf3073998b733b4cfce57786ffa4a09344dc95&o=&hp=1"></img>
				<div className="featuredTitles">
					<h1>Dublin</h1>
					<h2>123 properties</h2>
				</div>
			</div>

			<div className="featuredItem">
				<img
					className="featuredImg"
					alt=""
					src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/386211504.jpg?k=24c8578985b4aa15c32cb7811faf3073998b733b4cfce57786ffa4a09344dc95&o=&hp=1"></img>
				<div className="featuredTitles">
					<h1>Dublin</h1>
					<h2>123 properties</h2>
				</div>
			</div>
		</div>
	);
};

export default Featured;
