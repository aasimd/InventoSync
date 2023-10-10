/** @format */

import { Route, RouterProvider, Routes } from "react-router-dom";
import "./App.css";

import { MyBrowserRouter } from "./MyRouter/MyBrowserRouter";

function App() {
	return (
		<main className="App">
			<RouterProvider router={MyBrowserRouter} />
		</main>
	);
}

export default App;
