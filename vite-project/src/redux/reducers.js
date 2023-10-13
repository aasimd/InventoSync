/** @format */

const initialState = {
	items: [],
	sales: [],
	editItemId: "",
	showItemEditModal: false,
	isLoading: false,
	error: null
};

export const mainReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case "setLoading":
			return { ...state, isLoading: payload };
		case "getItems":
			return { ...state, items: payload };
		case "getSales":
			return { ...state, sales: payload };
		case "addItem":
			const newItems = [...state.items, payload];
			return { ...state, items: newItems };
		case "setDeleteItemId":
			return { ...state, deleteItemId: payload };
		case "setShowItemDeleteModal":
			return { ...state, showItemDeleteModal: payload };
		case "deleteItem":
			const filteredItems = state.items.filter((item) => item._id !== payload);
			return { ...state, items: filteredItems };
		case "addSale":
			const newSales = [...state.sales, payload];
			return { ...state, sales: newSales };
		case "setEditItemId":
			return { ...state, editItemId: payload };
		case "setShowItemEditModal":
			return { ...state, showItemEditModal: payload };
		case "editItem":
			const updatedItems = state?.items?.map((item) =>
				item._id === payload.id ? payload.item : item
			);
			return { ...state, items: updatedItems };
		default:
			return state;
	}
};
