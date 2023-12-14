// TopBar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const TopBar = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<div className={`top-bar ${isMenuOpen ? "menu-open" : ""}`}>
			<div className="logo">Logo</div>
			<div className="nav-links">
				<NavLink exact to="/" activeClassName="active" className="home-link">
					Home
				</NavLink>
				<div className="menu-icon" onClick={toggleMenu}>
					<div className="bar"></div>
					<div className="bar"></div>
					<div className="bar"></div>
				</div>
				{isMenuOpen && (
					<div className="menu">
						<NavLink
							to="/best-mattresses-on-amazon"
							activeClassName="active"
							onClick={toggleMenu}
						>
							Amazons Best Mattresses
						</NavLink>
						<NavLink
							to="/best-couches-on-amazon"
							activeClassName="active"
							onClick={toggleMenu}
						>
							Amazons Best Couches
						</NavLink>
						<p>---------------</p>
						<NavLink
							to="/contact"
							activeClassName="active"
							onClick={toggleMenu}
						>
							Contact
						</NavLink>
					</div>
				)}
			</div>
		</div>
	);
};

export default TopBar;
