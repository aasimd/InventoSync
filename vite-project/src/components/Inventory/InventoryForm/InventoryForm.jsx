/** @format */

import "./InventoryForm.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../redux/actions";
import { useState } from "react";

export const InventoryForm = () => {
	const dispatch = useDispatch();
	const [newItem, setNewItem] = useState({
		name: "",
		quantity: null,
		price: null,
		category: ""
	});

	const items = useSelector((state) => state.items);
	const itemExistsError = (itemName) => {
		return items.find((item) => item.name === itemName);
	};
	const addNewItem = (e) => {
		e.preventDefault();
		const item = {
			name: newItem?.name,
			quantity: Number(newItem?.quantity),
			price: Number(newItem?.price),
			category: newItem?.category
		};
		if (itemExistsError(item.name)) {
			alert(
				"You cannot add Item that already Exist in your Inventory, If you want to increase Quantity of the Item you can do so by editing Item in your Inventory"
			);
		} else {
			dispatch(addItem(item));
		}
	};
	return (
		<div className="add-new-item-form">
			<div>
				<h2>Add New Item</h2>
			</div>
			<form onSubmit={(event) => addNewItem(event)}>
				<div>
					<label htmlFor="Item-name">
						Name:{" "}
						<input
							required
							type="text"
							value={newItem?.name}
							onChange={(event) =>
								setNewItem((p) => ({ ...p, name: event?.target?.value }))
							}
						/>
					</label>
				</div>
				<div>
					<label htmlFor="Item-quantity">
						Quantity:{" "}
						<input
							required
							type="number"
							value={newItem?.quantity}
							onChange={(event) =>
								setNewItem((p) => ({ ...p, quantity: event?.target?.value }))
							}
						/>
					</label>
				</div>
				<div>
					<label htmlFor="Item-price">
						Price:{" "}
						<input
							required
							type="number"
							value={newItem?.price}
							onChange={(event) =>
								setNewItem((p) => ({ ...p, price: event?.target?.value }))
							}
						/>
					</label>
				</div>
				<div>
					<label htmlFor="Item-category">
						Category:{" "}
						<input
							required
							type="text"
							value={newItem?.category}
							onChange={(event) =>
								setNewItem((p) => ({ ...p, category: event?.target?.value }))
							}
						/>
					</label>
				</div>
				<div>
					<input type="submit" value={"  Add New Item  "} />
				</div>
			</form>
		</div>
	);
};
