/** @format */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSale } from "../../../redux/actions";

export const AddNewSaleModal = () => {
	const dispatch = useDispatch();
	const newSaleItem = useSelector((state) => state.newSaleItem);
	const { price, name, _id, quantity, category } = newSaleItem;
	const [amount, setAmount] = useState(1);
	const newSale = {
		name: name,
		amount: Number(amount),
		category: category
	};
	return (
		<div>
			<h2>Add New Sale for {name}?</h2>
			<p>
				Name: <b>{name}</b>
				<br />
				Category: <b>{category}</b>
				<br />
				Net Price: <b>{price}$</b>
				<br />
				Quantity In Stock: <b>{quantity}</b>
				<br />
				Amount:{" "}
				<input
					min={1}
					max={quantity}
					type="number"
					value={amount}
					onChange={(event) => {
						amount <= quantity ? setAmount(event.target.value) : setAmount(1);
					}}
				/>
				<br />
				Total Price: <b>{price * amount}$</b>
			</p>
			<div>
				<button
					onClick={() => {
						dispatch(addSale(newSale));
						dispatch({ type: "setShowAddNewSaleModal", payload: false });
					}}
				>
					Add New Sale
				</button>
				<button
					onClick={() =>
						dispatch({ type: "setShowAddNewSaleModal", payload: false })
					}
				>
					Cancel
				</button>
			</div>
		</div>
	);
};
