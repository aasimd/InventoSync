/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./NavBar.css";

const activeStyles = ({ isActive }) =>
	isActive
		? {
				color: "red",
				fontWeight: 600,
				fontSize: "1.3rem"
		  }
		: { color: "black" };
export const NavBar = () => {
	const navigate = useNavigate();
	return (
		<div className="nav-bar">
			<div>
				<h2>
					<span onClick={() => navigate("/")}>InventoSync</span>
					Source Code:{" "}
					<a target="_blank" href="https://github.com/aasimd/InventoSync">
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</h2>
			</div>
			<div>
				<ul>
					<li>
						<NavLink style={activeStyles} to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink style={activeStyles} to="/inventory">
							Inventory
						</NavLink>
					</li>
					<li>
						<NavLink style={activeStyles} to="/sales">
							Sales
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};
