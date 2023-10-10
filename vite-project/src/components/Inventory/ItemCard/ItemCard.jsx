/** @format */

import { ItemCategoryPic } from "./ItemCategoryPic";

import "./ItemCard.css";

export const ItemCard = ({ item }) => {
	const { _id, name, quantity, price, category } = item;
	return (
		<div className="item-card">
			<div className="item-category-pic-container">
				<ItemCategoryPic category={category} />
			</div>
			<div className="item-info">
				<div className="item-name-category">
					<b>{name}</b> <br /> {category}
				</div>
				<div className="item-quantity-price">
					<div>
						<b>{quantity}</b> pcs
					</div>
					<div>
						<b>{price}$</b>
					</div>
				</div>
			</div>
		</div>
	);
};
