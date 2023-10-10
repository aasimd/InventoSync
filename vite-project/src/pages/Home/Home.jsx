/** @format */

import React, { useEffect } from "react";
import { addItem, fetchItems } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
export const Home = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.isLoading);

	// useEffect(() => {
	// 	dispatch(fetchItems());
	// }, [dispatch]);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	return (
		<div>
			<h1>Home</h1>
		</div>
	);
};
