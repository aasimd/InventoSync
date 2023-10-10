/** @format */

const initialState = {
	items: [],
	sales: [],
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
		case "addSale":
			const newSales = [...state.sales, payload];
			return { ...state, sales: newSales };
		default:
			return state;
	}
};
