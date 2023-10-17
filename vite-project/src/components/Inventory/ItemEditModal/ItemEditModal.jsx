/** @format */

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editItem } from "../../../redux/actions";
import "./ItemEditModal.css";
export const ItemEditModal = () => {
	const dispatch = useDispatch();
	const editItemId = useSelector((state) => state.editItemId);
	const items = useSelector((state) => state.items);
	const itemToEdit = items.find((item) => item._id === editItemId);
	const [item, setItem] = useState({
		_id: itemToEdit._id,
		name: itemToEdit.name,
		category: itemToEdit.category,
		quantity: itemToEdit.quantity,
		price: itemToEdit.price
	});
	const submitHandler = (e) => {
		e.preventDefault();
		const updatedItem = {
			_id: item._id,
			name: item.name,
			category: item.category,
			quantity: Number(item.quantity),
			price: Number(item.price)
		};
		dispatch(editItem(item._id, updatedItem));
		dispatch({ type: "setShowItemEditModal", payload: false });
	};
	return (
		<div className="edit-item-modal">
			<h2>Edit Item</h2>
			<div>
				<form onSubmit={(event) => submitHandler(event)}>
					<div>
						<label htmlFor="Edit-item-name">
							Name:{" "}
							<input
								type="text"
								value={item?.name}
								onChange={(event) =>
									setItem((p) => ({ ...p, name: event?.target?.value }))
								}
							/>
						</label>
					</div>
					<div>
						<label htmlFor="Edit-item-quantity">
							Quantity:{" "}
							<input
								type="number"
								value={item?.quantity}
								onChange={(event) =>
									setItem((p) => ({ ...p, quantity: event?.target?.value }))
								}
							/>
						</label>
					</div>
					<div>
						<label htmlFor="Edit-item-price">
							Price:{" "}
							<input
								type="number"
								value={item?.price}
								onChange={(event) =>
									setItem((p) => ({ ...p, price: event?.target?.value }))
								}
							/>
						</label>
					</div>
					<div>
						<label htmlFor="Edit-item-category">
							Category:{" "}
							<input
								type="text"
								value={item?.category}
								onChange={(event) =>
									setItem((p) => ({ ...p, category: event?.target?.value }))
								}
							/>
						</label>
					</div>
					<div className="modal-buttons">
						<div>
							<input type="submit" value="Save" />
						</div>
						<div>
							<button
								onClick={() =>
									dispatch({ type: "setShowItemEditModal", payload: false })
								}
							>
								Discard
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
