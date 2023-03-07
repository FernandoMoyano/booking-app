import {
	faCircleArrowLeft,
	faCircleArrowRight,
	faCircleXmark,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";
import "./hotel.css";

const Hotel = () => {
	const [slideNumber, setSlideNumber] = useState(0);
	const [open, setOpen] = useState(false);



	/* Open slide */
	const handleOpen = (i) => {
		setSlideNumber(i);
		setOpen(true);
	};


/* Control the movement of the slide */
	const handleMove = (direction) => {
		let newSlideNumber;
		if (direction === "l") {
			newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
		} else {
			newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
		}
		setSlideNumber(newSlideNumber);
	};

	const photosHotel = [
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/399728690.jpg?k=c2bf8ada5dfbcdcf78dc83c26912f0586c280cc1b31c2856d714f3d268f9c69a&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/386210814.jpg?k=e4bf2533086ae0f5ef41b83820b479bdf17d28a9781e643279c0c9e2a1086d1b&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/399728690.jpg?k=c2bf8ada5dfbcdcf78dc83c26912f0586c280cc1b31c2856d714f3d268f9c69a&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/386210814.jpg?k=e4bf2533086ae0f5ef41b83820b479bdf17d28a9781e643279c0c9e2a1086d1b&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/386210814.jpg?k=e4bf2533086ae0f5ef41b83820b479bdf17d28a9781e643279c0c9e2a1086d1b&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/399728690.jpg?k=c2bf8ada5dfbcdcf78dc83c26912f0586c280cc1b31c2856d714f3d268f9c69a&o=&hp=1",
		},
	];

	
	return (
		<div>
			<NavBar />
			<Header type="list" />
			<div className="hotelContainer">
				{open && (
					<div className="slider">
						<FontAwesomeIcon
							icon={faCircleXmark}
							className="close"
							onClick={() => setOpen(false)}
						/>
						<FontAwesomeIcon
							icon={faCircleArrowLeft}
							className="arrow"
							onClick={() => handleMove("l")}
						/>
						<div className="sliderWrapper">
							<img
								src={photosHotel[slideNumber].src}
								className="sliderImg"
								alt=""></img>
						</div>
						<FontAwesomeIcon
							icon={faCircleArrowRight}
							className="arrow"
							onClick={() => handleMove("r")}
						/>
					</div>
				)}
				<div className="hotelWrapper">
					<button className="bookNow">Reserve or Book now!</button>
					<h1 className="hotelTitle">Grand Hotel</h1>
					<div className="hotelAddress">
						<FontAwesomeIcon icon={faLocationDot} />
						<span className="hotelDistance">Elton st 125 New York</span>
					</div>
					<span className="hotelPriceHighlight">
						Book s stay over $114 at this property and get a free airport
						taxi
					</span>
					<div className="hotelImages">
						{photosHotel.map((photo, i) => (
							<div className="hotelImgWrapper">
								<img
									onClick={() => handleOpen(i)}
									src={photo.src}
									alt=""
									className="hotelImg"
								/>
							</div>
						))}
					</div>
					<div className="hotelDetails">
						<div className="hotelDetailsTexts">
							<h1 className="hotelTitle">Stay in the heart of Krakow</h1>
							<p className="hotelDesc">
								es simplemente el texto de relleno de las imprentas y
								archivos de texto. Lorem Ipsum ha sido el texto de
								relleno estándar de las industrias desde el año 1500,
								cuando un impresor (N. del T. persona que se dedica a la
								imprenta) desconocido usó una galería de textos y los
								mezcló de tal manera que logró hacer un libro de textos
								especimen. No sólo sobrevivió 500 años, sino que tambien
								ingresó como texto de relleno
							</p>
						</div>
						<div className="hotelDetailsPrice">
							<h1>Perfect for a 9-night stay!</h1>
							<span>
								located in the rea; heart f Krakov, this property has an
								excellent location core of 9.8!
							</span>
							<h2>
								<b>$945</b>(9 nights)
							</h2>
							<button>Reserve or Book Now!</button>
						</div>
					</div>
				</div>
				<MailList />
				<Footer />
			</div>
		</div>
	);
};

export default Hotel;
