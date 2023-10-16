/** @format */
import { useSelector, useDispatch } from "react-redux";
import "./AddNewSale.css";

import { ItemInAddNewSaleList } from "../ItemInAddNewSaleList/ItemInAddNewSaleList";

export const AddNewSale = () => {
	const dispatch = useDispatch();

	const searchInput = useSelector((state) => state.searchInput);

	return (
		<div className="items-list-in-add-new-sale">
			Available Items In Stock are listed below,
			<br />
			<b>Click on an Item from below to make a New Sale.</b>
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
			<ItemInAddNewSaleList />
		</div>
	);
};
