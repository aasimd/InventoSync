/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./FilterSales.css";
export const FilterSalesCard = () => {
	const dispatch = useDispatch();
	const dateFilters = useSelector((state) => state.dateFilters);
	const todaysDate = new Date().toISOString().slice(0, 10);
	return (
		<div>
			<div className="dates-filter-section">
				<div className="dates-input-card">
					<div>
						<label htmlFor="start-date">
							From:{" "}
							<input
								max={dateFilters.endDate || todaysDate}
								type="date"
								value={dateFilters.startDate}
								onChange={(event) =>
									dispatch({
										type: "setStartDate",
										payload: event.target.value
									})
								}
							/>
						</label>
					</div>
					<div>
						<label htmlFor="end-date">
							To:{" "}
							<input
								min={dateFilters.startDate}
								max={todaysDate}
								type="date"
								value={dateFilters.endDate}
								onChange={(event) =>
									dispatch({ type: "setEndDate", payload: event.target.value })
								}
							/>
						</label>
					</div>
					<div>
						<button
							onClick={() => {
								dispatch({ type: "setStartDate", payload: "" });
								dispatch({ type: "setEndDate", payload: "" });
							}}
						>
							Clear Date Filter
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
