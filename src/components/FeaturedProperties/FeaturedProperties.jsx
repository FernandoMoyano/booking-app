import React from "react";
import "./featuredProperties.css";

const FeaturedProperties = () => {
	return (
		<div className="fp">
			<div className="fpItem">
				<img
					className="fpImage"
					alt=""
					src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/386211504.jpg?k=24c8578985b4aa15c32cb7811faf3073998b733b4cfce57786ffa4a09344dc95&o=&hp=1"></img>
				<span className="fpName">Aparhotel Stare Miasto</span>
				<span className="fpCity">Madrid</span>
				<span className="fpPrice">Starting from $1200</span>
				<div className="fpRating">
					<button>8.9</button>
					<span>Excellent</span>
				</div>
			</div>

			<div className="fpItem">
				<img
					className="fpImage"
					alt=""
					src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/386211504.jpg?k=24c8578985b4aa15c32cb7811faf3073998b733b4cfce57786ffa4a09344dc95&o=&hp=1"
				/>
				<span className="fpName">Aparhotel Stare Miastro</span>
				<span className="fpCity">Madrid</span>
				<span className="fpPrice">Starting from $1200</span>
				<div className="fpRating">
					<button>8.9</button>
					<span>Excellent</span>
				</div>
			</div>

			<div className="fpItem">
				<img
					className="fpImage"
					alt=""
					src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/386211504.jpg?k=24c8578985b4aa15c32cb7811faf3073998b733b4cfce57786ffa4a09344dc95&o=&hp=1"
				/>
				<span className="fpName">Aparhotel Stare Miastro</span>
				<span className="fpCity">Madrid</span>
				<span className="fpPrice">Starting from $1200</span>
				<div className="fpRating">
					<button>8.9</button>
					<span>Excellent</span>
				</div>
			</div>
		</div>
	);
};

export default FeaturedProperties;
