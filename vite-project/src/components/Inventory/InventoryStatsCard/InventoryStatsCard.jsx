/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
export const InventoryStatsCard = () => {
	const dispatch = useDispatch();
	const items = useSelector((state) => state.items);
	const totalItemsPrice = items.reduce(
		(acc, curr) => curr.price * curr.quantity + acc,
		0
	);
	const totalItems = items.reduce((acc, curr) => curr.quantity + acc, 0);
	const itemTypes = items.length;
	const itemCategories = items.reduce(
		(acc, curr) =>
			acc.includes(curr.category) ? acc : [...acc, curr.category],
		[]
	).length;
	return (
		<div className="stats-card">
			<h2>Inventory Stats</h2>
			<div>
				<ul>
					<li>
						Total Items In Stock: <b>{totalItems} items</b>
					</li>
					<li>
						Total Cost of Items in Stock: <b>{totalItemsPrice}$</b>
					</li>
					<li>
						Types of Categories: <b>{itemCategories}</b>
					</li>
					<li>
						Types of Items: <b>{itemTypes}</b>
					</li>
				</ul>
			</div>
		</div>
	);
};
