/** @format */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../../redux/actions";

export const ItemDeleteModal = () => {
	const dispatch = useDispatch();
	const deleteItemId = useSelector((state) => state.deleteItemId);
	const items = useSelector((state) => state.items);
	const itemToDelete = items.find((item) => item._id === deleteItemId);
	const [itemName, setItemName] = useState("");
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(deleteItem(deleteItemId));
		dispatch({ type: "setShowItemDeleteModal", payload: false });
	};
	return (
		<div>
			<b>Are you sure you want to delete this item from your Inventory?</b>
			<p>To Delete the Item Enter Item name (i.e. {itemToDelete.name})</p>
			<form onSubmit={(event) => submitHandler(event)}>
				<div>
					<input
						required
						placeholder={itemToDelete.name}
						type="text"
						value={itemName}
						onChange={(event) => setItemName(event.target.value)}
					/>
				</div>
				<div>
					<input
						disabled={itemName === itemToDelete.name ? false : true}
						type="submit"
						value="Delete"
						title="Delete Item"
					/>
					<button
						title="Cancel"
						onClick={() =>
							dispatch({ type: "setShowItemDeleteModal", payload: false })
						}
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};
