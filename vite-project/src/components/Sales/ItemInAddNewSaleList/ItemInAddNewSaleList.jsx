/** @format */

import React, { useEffect } from "react";
import { ItemInAddNewSaleCard } from "../ItemInAddNewSaleCard/ItemInAddNewSaleCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../../redux/actions";
import { getSearchedItems } from "../../../utils/functions";
import "./ItemInAddNewSaleList.css";
export const ItemInAddNewSaleList = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.isLoading);
	const items = useSelector((state) => state.items);
	const searchInput = useSelector((state) => state.searchInput);
	const filteredArray = getSearchedItems(searchInput, items);
	useEffect(() => {
		dispatch(fetchItems());
	}, [dispatch]);
	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	return (
		<div>
			{filteredArray.length > 0 ? (
				<ul>
					{filteredArray.map((item) => (
						<ItemInAddNewSaleCard key={item._id} item={item} />
					))}
				</ul>
			) : (
				<h2>No Data Found</h2>
			)}
		</div>
	);
};
