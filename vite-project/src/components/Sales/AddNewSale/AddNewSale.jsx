/** @format */
import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const AddNewSale = () => {
	const items = useSelector((state) => state.items);
    // const itemsFilteredBySearch = filterItemsBySearchInput(items)
	return (
		<div>
			<div>
				<input 
                type="search" placeholder="Search By Item Name"
                 />
			</div>
		</div>
	);
};
