/** @format */

import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Inventory } from "../pages/Inventory/Inventory";
import { Sales } from "../pages/Sales/Sales";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { Root } from "../pages/Root/Root";

export const MyBrowserRouter = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "",
				element: <Home />
			},
			{
				path: "inventory",
				element: <Inventory />
			},
			{
				path: "sales",
				element: <Sales />
			}
		]
	}
]);
