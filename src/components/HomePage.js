import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div className="container">
			<h1 className="header">Welcome to Our Home Products Blog</h1>
			<p className="description">
				Discover the best home products on Amazon from our experience and the
				customers reviews.
			</p>

			<section className="category-section">
				<h2 className="category-title">Popular Categories</h2>
				<ul className="category-list">
					<li className="category-item">
						<Link to="/best-mattresses-on-amazon" className="category-link">
							Top 6 Best Mattresses on Amazon
						</Link>
					</li>
					<li className="category-item">
						<Link to="/best-couches-on-amazon" className="category-link">
							Top 6 Best Couches on Amazon
						</Link>
					</li>
				</ul>
			</section>
		</div>
	);
};

export default HomePage;
