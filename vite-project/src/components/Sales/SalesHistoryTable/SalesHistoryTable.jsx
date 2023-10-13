/** @format */

import React from "react";
import { SalesTableRowCard } from "../SalesTableRowCard/SalesTableRowCard";
import { useSelector } from "react-redux";

export const SalesHistoryTable = () => {
	const sales = useSelector((state) => state.sales);
    
	return (
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
			{sales
				.map((sale, index) => (
					<SalesTableRowCard key={sale._id} sale={sale} index={index} />
				))
				.reverse()}
		</table>
	);
};
