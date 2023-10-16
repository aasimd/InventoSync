/** @format */

import React from "react";
import { useDispatch } from "react-redux";

export const ItemInAddNewSaleCard = ({ item }) => {
	const dispatch = useDispatch();

	return (
		<li
			onClick={() => {
				dispatch({ type: "setNewSaleItem", payload: item });
				dispatch({ type: "setShowAddNewSaleModal", payload: true });
			}}
		>
			<div className="item-card-in-add-new-sale">
				{item.name} <br />
				{item.quantity} pcs
			</div>
		</li>
	);
};
