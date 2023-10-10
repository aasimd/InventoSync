/** @format */

import { useSelector, useDispatch } from "react-redux";
import { ItemCard } from "../../components/Inventory/ItemCard/ItemCard";
import { useEffect } from "react";
import { fetchItems } from "../../redux/actions";
import { ItemsList } from "../../components/Inventory/ItemsList/ItemsList";
import { InventoryForm } from "../../components/Inventory/InventoryForm/InventoryForm.jsx";

export const Inventory = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.isLoading);
	useEffect(() => {
		dispatch(fetchItems());
	}, [dispatch]);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	return (
		<div>
			<h1>Inventory</h1>
			<InventoryForm />
			<ItemsList />
		</div>
	);
};
