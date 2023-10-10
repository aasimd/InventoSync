/** @format */

import { useSelector } from "react-redux";
import "./ItemsList.css";
import { ItemCard } from "../ItemCard/ItemCard";
export const ItemsList = () => {
	const items = useSelector((state) => state.items);
	return (
		<div className="inventory-items-list">
			{items.length > 0 ? (
				<ul>
					{items.map((item) => {
						return (
							<li key={item._id}>
								<ItemCard item={item} />
							</li>
						);
					})}
				</ul>
			) : (
				<div>
					<h1>No Items in Inventory, Add new Items to Displayed her.</h1>
				</div>
			)}
		</div>
	);
};
