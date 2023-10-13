/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, fetchSales } from "../../redux/actions";
import { SalesTableRowCard } from "../../components/Sales/SalesTableRowCard/SalesTableRowCard";
import { SalesHistoryTable } from "../../components/Sales/SalesHistoryTable/SalesHistoryTable";
import { AddNewSale } from "../../components/Sales/AddNewSale/AddNewSale";

export const Sales = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchItems());
		dispatch(fetchSales());
	}, [dispatch]);
	return (
		<div>
			<h1>Sales History</h1>
			<div>
				<SalesHistoryTable />
			</div>
			<div>
				<AddNewSale />
			</div>
		</div>
	);
};
