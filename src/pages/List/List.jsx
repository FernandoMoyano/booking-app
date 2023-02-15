import React, { useState } from "react";
import "./list.css";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/SearchItem/SearchItem";

const List = () => {
	const location = useLocation();
	const [destination, setDestination] = useState(location.state.destination);
	const [date, setDate] = useState(location.state.date);
	const [oepenDate, setOpenDate] = useState(false);
	const [options, setOptions] = useState(location.state.options);
	console.log(location);

	return (
		<div>
			<NavBar />
			<Header type="list" />
			<div className="listContainer">
				<div className="listWrapper">
					<div className="listSearch">
						<h1 className="listTitle">Sarch</h1>
						<div className="listItem">
							<label className="">Destination</label>
							<input type="text" placeholder={destination}></input>
						</div>

						<div className="listItem">
							<label className="">Chek-In Date</label>
							<span
								onClick={() => {
									setOpenDate(!oepenDate);
								}}>
								{`${format(
									date[0].startDate,
									"dd/MM/yyyy",
								)} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
							</span>
							{oepenDate && (
								<DateRange
									onChange={(item) => setDate([item.selection])}
									minDate={new Date()}
									ranges={date}
								/>
							)}
						</div>
						<div className="listItem">
							<label>Options</label>
							<div className="listOptions">
								<div className="listOptionItem">
									<span className="listOptionText">
										Min Price
										<small>per night</small>
									</span>
									<input
										className="listOptionInput"
										type="number"></input>
								</div>

								<div className="listOptionItem">
									<span className="listOptionText">
										Max Price
										<small>per night</small>
									</span>
									<input
										className="listOptionInput"
										type="number"></input>
								</div>

								<div className="listOptionItem">
									<span className="listOptionText">Adult</span>

									<input
										min={1}
										placeholder={options.adult}
										className="listOptionInput"
										type="number"></input>
								</div>

								<div className="listOptionItem">
									<span className="listOptionText">Children</span>

									<input
										min={0}
										placeholder={options.children}
										className="listOptionInput"
										type="number"></input>
								</div>

								<div className="listOptionItem">
									<span className="listOptionText">Room</span>

									<input
										min={1}
										placeholder={options.room}
										className="listOptionInput"
										type="number"></input>
								</div>
							</div>
						</div>
						<button>Search</button>
					</div>
					<div className="listResult">
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
					</div>
				</div>
			</div>
		</div>
	);
};

export default List;
