/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { filterByDates } from "../../utils/functions";
import "./TotalRevenueAndItemsCard.css";
export const TotalRevenueAndItemsCard = () => {
	const { startDate, endDate } = useSelector((state) => state.dateFilters);
	const sales = useSelector((state) => state.sales);
	const filteredSales = filterByDates(startDate, endDate, sales);
	const totalRevenue = filteredSales
		.reduce((acc, curr) => acc + curr.totalPrice, 0)
		.toFixed(2);
	const totalItemsSold = filteredSales.reduce(
		(acc, curr) => acc + curr.amount,
		0
	);
	return (
		<div className="stats-card">
			<h2>Sales Summary</h2>
			<ul>
				<li>
					Total Revenue: <b>{totalRevenue}$</b>
				</li>
				<li>
					Total Items Sold: <b>{totalItemsSold} items</b>
				</li>
			</ul>
		</div>
	);
};
