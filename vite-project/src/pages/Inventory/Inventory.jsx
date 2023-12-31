/** @format */

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchItems } from "../../redux/actions";
import { ItemsList } from "../../components/Inventory/ItemsList/ItemsList";
import { InventoryForm } from "../../components/Inventory/InventoryForm/InventoryForm.jsx";
import { ItemEditModal } from "../../components/Inventory/ItemEditModal/ItemEditModal";
import { ItemDeleteModal } from "../../components/Inventory/ItemDeleteModal/ItemDeleteModal";
import "./Inventory.css";
import { InventoryStatsCard } from "../../components/Inventory/InventoryStatsCard/InventoryStatsCard";

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
		<div className="inventory-page">
			{showItemEditModal && (
				<div className="Modal-component">
					<ItemEditModal />
				</div>
			)}
			{showItemDeleteModal && (
				<div className="Modal-component">
					<ItemDeleteModal />
				</div>
			)}
			<div
				className={`inventory-page ${
					(showItemEditModal || showItemDeleteModal) &&
					"background-dark-and-blur"
				}`}
				onClick={() => {
					showItemEditModal &&
						dispatch({ type: "setShowItemEditModal", payload: false });
					showItemDeleteModal &&
						dispatch({ type: "setShowItemDeleteModal", payload: false });
				}}
			>
				<h1>Inventory</h1>
				<div className="inventory-page-layout">
					<div className="inventory-page-section-1">
						<div>
							<InventoryStatsCard />
						</div>
						<div>
							<InventoryForm />
						</div>
					</div>
					<div className="inventory-page-section-2">
						<ItemsList />
					</div>
				</div>
			</div>
		</div>
	);
};
