/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, fetchSales } from "../../redux/actions";
import { SalesHistoryTable } from "../../components/Sales/SalesHistoryTable/SalesHistoryTable";
import { AddNewSale } from "../../components/Sales/AddNewSale/AddNewSale";
import { FilterSalesCard } from "../../components/Sales/FilterSalesCard/FilterSalesCard";
import "./Sales.css";
import { filterByDates } from "../../utils/functions";
import { TotalRevenueAndItemsCard } from "../../components/TotalRevenueAndItemsCard/TotalRevenueAndItemsCard";

export const Sales = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchItems());
		dispatch(fetchSales());
	}, [dispatch]);
	return (
		<div className="sales-page">
			<h1>Sales</h1>
			<div className="sales-page-layout">
				<div className="sales-page-section-1">
					<TotalRevenueAndItemsCard />
					<AddNewSale />
				</div>
				<div className="sales-page-section-2">
					<FilterSalesCard />
					<SalesHistoryTable />
				</div>
			</div>
		</div>
	);
};
