/** @format */

import axios from "axios";

const GET_ITEMS = "getItems";
const GET_SALES = "getSales";
const ADD_ITEM = "addItem";
const ADD_SALE = "addSale";
const SET_LOADING = "setLoading";

export const fetchItems = () => async (dispatch) => {
	dispatch({ type: SET_LOADING, payload: true });

	try {
		const response = await axios.get(
			"https://inventory-management.aasimd.repl.co/items"
		);
		dispatch({ type: GET_ITEMS, payload: response.data.data });
		console.log("Inventory Items fetched Successfully:", response.data.data);
	} catch (error) {
		console.error("Error Occurred While fetching Inventory Items.", error);
	}
	dispatch({ type: SET_LOADING, payload: false });
};

export const addItem = (item) => async (dispatch) => {
	const requestBody = item;
	dispatch({ type: SET_LOADING, payload: true });
	try {
		const addedItem = await axios.post(
			"https://inventory-management.aasimd.repl.co/items",
			requestBody
		);
		dispatch({ type: ADD_ITEM, payload: addedItem.data.data });
		console.log("Item Added");
	} catch (e) {
		console.error("Error Occurred While Adding Item to Inventory.", e);
	}
	dispatch({ type: SET_LOADING, payload: false });
};
