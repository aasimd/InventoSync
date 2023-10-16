/** @format */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./AddNewSale.css";
import { ItemInAddNewSaleCard } from "../ItemInAddNewSaleCard/ItemInAddNewSaleCard";
import { AddNewSaleModal } from "../AddNewSaleModal/AddNewSaleModal";
import { fetchItems } from "../../../redux/actions";
import { ItemInAddNewSaleList } from "../ItemInAddNewSaleList/ItemInAddNewSaleList";

export const AddNewSale = () => {
	const dispatch = useDispatch();
	const items = useSelector((state) => state.items);
	const searchInput = useSelector((state) => state.searchInput);
	const showAddNewSaleModal = useSelector((state) => state.showAddNewSaleModal);
	return (
		<div>
			{showAddNewSaleModal && (
				<div>
					<AddNewSaleModal />
				</div>
			)}
			<div>
				<input
					type="search"
					placeholder="Search By Item Name"
					value={searchInput}
					onChange={(event) =>
						dispatch({ type: "setSearchInput", payload: event.target.value })
					}
				/>
			</div>
			<div className="items-list-in-add-new-sale">
				Available Items In Stock are listed below,
				<br />
				<b>Click on an Item from below to make a New Sale.</b>
				<ItemInAddNewSaleList />
			</div>
		</div>
	);
};
