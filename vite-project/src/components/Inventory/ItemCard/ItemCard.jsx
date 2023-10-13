/** @format */

import { ItemCategoryPic } from "./ItemCategoryPic";
import "./ItemCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTrash } from "@fortawesome/fontawesome-free-solid";
import { useDispatch } from "react-redux";
export const ItemCard = ({ item }) => {
	const dispatch = useDispatch();
	const { _id, name, quantity, price, category } = item;
	return (
		<div className="item-card">
			<div className="item-info">
				<div className="item-category-pic-container">
					<ItemCategoryPic category={category} />
				</div>
				<div>
					<b>{name}</b> <br /> {category}
				</div>
				<div className="item-edit-delete-buttons">
					<button
						title="Edit"
						onClick={() => {
							dispatch({ type: "setEditItemId", payload: _id });
							dispatch({ type: "setShowItemEditModal", payload: true });
						}}
					>
						<FontAwesomeIcon icon={faPenSquare} />
					</button>
					<button
						title="Delete"
						onClick={() => {
							dispatch({ type: "setDeleteItemId", payload: _id });
							dispatch({ type: "setShowItemDeleteModal", payload: true });
						}}
					>
						<FontAwesomeIcon icon={faTrash} />
					</button>
					<div className="item-name-category"></div>
				</div>
			</div>
			<div className="item-quantity-price">
				<div>
					InStock: <b>{quantity}</b> pcs
				</div>
				<div>
					<b>
						{price}$ / piece
					</b>
				</div>
			</div>
		</div>
	);
};
