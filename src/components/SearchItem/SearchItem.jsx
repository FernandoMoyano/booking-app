import React from "react";
import "./searchItem.css";

const SearchItem = () => {
	return (
		<div className="searchItem">
			<img
				src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/386211504.jpg?k=24c8578985b4aa15c32cb7811faf3073998b733b4cfce57786ffa4a09344dc95&o=&hp=1"
				alt=""
				className="searchImg"></img>
			<div className="searchDescription">
				<h1 className="searchTitle">Tower Street Apartments</h1>
				<span className="searchDistance">500m from center</span>
				<span className="searchTaxiOp">Free airport taxi</span>
				<span className="searchSubtitle">
					Studio Apartment with Air contditioning
				</span>
				<span className="searchFeatures">
					Entire studio · 1 bathroom · 21m 1 full bed
				</span>
				<span className="searchCancelOp">Free cancellation</span>
				<span className="searchCancelOpSubtitle">
					You can cancel later, so lock in this great price today!
				</span>
				<span className="search"></span>
			</div>
			<div className="searchDetails">
            <div className="searchRating">
               <span>Excellent</span>
               <button>8.9</button>
            </div>
            <div className="searchDetailTexts">
               <span className="searchPrice">$123</span>
               <span className="searchTaxOp">Includes taxes and fees</span>
               <button className="searchCheckButton">See availability</button>
            </div>
         </div>
		</div>
	);
};

export default SearchItem;
