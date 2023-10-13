/** @format */

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchItems } from "../../redux/actions";
import { ItemsList } from "../../components/Inventory/ItemsList/ItemsList";
import { InventoryForm } from "../../components/Inventory/InventoryForm/InventoryForm.jsx";
import { ItemEditModal } from "../../components/Inventory/ItemEditModal/ItemEditModal";
import { ItemDeleteModal } from "../../components/Inventory/ItemDeleteModal/ItemDeleteModal";

export const Inventory = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.isLoading);
	const showItemEditModal = useSelector((state) => state.showItemEditModal);
	const showItemDeleteModal = useSelector((state) => state.showItemDeleteModal);
	useEffect(() => {
		dispatch(fetchItems());
	}, [dispatch]);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	return (
		<div>
			{showItemEditModal && <ItemEditModal />}
			{showItemDeleteModal && <ItemDeleteModal />}
			<div
				onClick={() => {
					showItemEditModal &&
						dispatch({ type: "setShowItemEditModal", payload: false });
					showItemDeleteModal &&
						dispatch({ type: "setShowItemDeleteModal", payload: false });
				}}
			>
				<h1>Inventory</h1>
				<InventoryForm />
				<ItemsList />
			</div>
		</div>
	);
};
