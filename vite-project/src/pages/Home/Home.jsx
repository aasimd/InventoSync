/** @format */

import React, { useEffect, useState } from "react";
import { addItem, fetchItems, fetchSales } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { InventoryStatsCard } from "../../components/Inventory/InventoryStatsCard/InventoryStatsCard";
import { TotalRevenueAndItemsCard as SalesSummary } from "../../components/TotalRevenueAndItemsCard/TotalRevenueAndItemsCard";
import { NavLink } from "react-router-dom";

export const Home = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.isLoading);
	useEffect(() => {
		dispatch(fetchItems());
		dispatch(fetchSales());
	}, [dispatch]);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	return (
		<div className="home-page">
			<h1>Home</h1>
			<div className="stats-section">
				<ul>
					<li>
						<div className="home-nav-links">
							<NavLink to="/inventory">Check Inventory{">>"} </NavLink>
						</div>
						<InventoryStatsCard />
					</li>
					<li>
						<div className="home-nav-links">
							<NavLink to="/sales">Check Sales{">>"} </NavLink>
						</div>
						<SalesSummary />
					</li>
				</ul>
			</div>
			<div className="about-section">
				<h2>About</h2>
				<b>
					InventoSync is the ultimate tool for businesses to effortlessly handle
					their inventory, sales, and reporting needs. Stay on top of your stock
					by adding, editing, and removing items, and get valuable insights into
					sales data by filtering dates. With its easy-to-use interface,
					InventoSync helps you make informed decisions and keep your operations
					running smoothly.
				</b>
			</div>
		</div>
	);
};
