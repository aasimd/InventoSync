/** @format */

import React from "react";
import { SalesTableRowCard } from "../SalesTableRowCard/SalesTableRowCard";
import { useSelector } from "react-redux";
import { filterByDates } from "../../../utils/functions";
import "./SalesTable.css";
export const SalesHistoryTable = () => {
	const sales = useSelector((state) => state.sales);
	const { startDate, endDate } = useSelector((state) => state.dateFilters);
	const filteredSales = filterByDates(startDate, endDate, sales);
	return (
		<div className="sales-table">
			<h2>Sales Report</h2>
			<table>
				<tr>
					{[
						"Order Number",
						"Order Date",
						"Product Name",
						"Category",
						"Quantity",
						"Net Price",
						"Total Price"
					].map((e) => (
						<th>{e}</th>
					))}
				</tr>
				{filteredSales.length > 0 ? (
					filteredSales.map((sale, index) => (
						<SalesTableRowCard key={sale._id} sale={sale} index={index} />
					))
				) : (
					<h2>No Data Found</h2>
				)}
			</table>
		</div>
	);
};
