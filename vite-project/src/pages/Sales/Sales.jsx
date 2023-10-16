/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, fetchSales } from "../../redux/actions";
import { SalesHistoryTable } from "../../components/Sales/SalesHistoryTable/SalesHistoryTable";
import { AddNewSale } from "../../components/Sales/AddNewSale/AddNewSale";
import { FilterSalesCard } from "../../components/Sales/FilterSalesCard/FilterSalesCard";
import "./Sales.css";
import { TotalRevenueAndItemsCard } from "../../components/TotalRevenueAndItemsCard/TotalRevenueAndItemsCard";
import { AddNewSaleModal } from "../../components/Sales/AddNewSaleModal/AddNewSaleModal";

export const Sales = () => {
	const dispatch = useDispatch();
	const showAddNewSaleModal = useSelector((state) => state.showAddNewSaleModal);
	useEffect(() => {
		dispatch(fetchItems());
		dispatch(fetchSales());
	}, [dispatch]);
	return (
		<div>
			{showAddNewSaleModal && (
				<div>
					<AddNewSaleModal />
				</div>
			)}
			<div
				onClick={() => {
					showAddNewSaleModal &&
						dispatch({ type: "setShowAddNewSaleModal", payload: false });
				}}
				className={`sales-page ${
					showAddNewSaleModal && "background-dark-and-blur"
				}`}
			>
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
		</div>
	);
};
