/** @format */

import React from "react";
import { useSelector } from "react-redux";

export const SalesTableRowCard = ({ sale, index }) => {
	const items = useSelector((state) => state.items);
	const { name, createdAt, amount, category } = sale;
	const item = items.find((sale) => sale.name === name);
	const price = item.price;
	return (
		<tr>
			<th>
				<td>{index + 1}</td>
			</th>
			<td>{createdAt.slice(0, 10)}</td>
			<td>{name}</td>
			<td>{category}</td>
			<td>{amount}</td>
			<td>{price}</td>
			<td>{(amount * price).toFixed(2)}</td>
		</tr>
	);
};
