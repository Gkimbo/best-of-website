import React from "react";
import { Link } from "react-router-dom";
import image1 from "../images/mattresses/tuft&needle-mattress.jpeg";
import image2 from "../images/couches/modular-sofa.jpeg";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
	return (
		<>
			<Helmet>
				<title>Top 6 Couches and Sofas on Amazon</title>
				<meta
					name="description"
					content="Read reviews of furniture on Amazon"
				/>
				<link rel="canonical" href="/" />
			</Helmet>
			<div className="container">
				<h1 className="header">Welcome to Our Home Products Blog</h1>
				<p className="description">
					Discover the best home products on Amazon from our experience and the
					customers' reviews.
				</p>
				<p className="description">
					As we purchase and test more products, our categories will grow. So
					Far we only we only have the 2 categories ({" "}
					<Link to="/best-mattresses-on-amazon" className="paragraph-link">
						Top 6 Mattresses on Amazon
					</Link>{" "}
					and{" "}
					<Link to="/best-couches-on-amazon" className="paragraph-link">
						Top 6 Couches on Amazon
					</Link>
					). Check them out!
				</p>

				<section className="category-section">
					<h2 className="category-title">Our Categories</h2>
					<ul className="category-list">
						<li className="category-item">
							<Link to="/best-mattresses-on-amazon" className="category-link">
								See the Top 6 Mattresses on Amazon
							</Link>
							<h2 className="overview-title">#1</h2>
							<h2 className="overview-title">
								Tuft & Needle - Legacy Original Mattress
							</h2>
							<img
								src={image1}
								alt="tuft & needle mattress"
								className="overview-image"
							/>
							<a href="https://amzn.to/48a0wTb" className="button-link">
								Buy on Amazon for $1,395.00
							</a>
						</li>
						<li className="category-item">
							<Link to="/best-couches-on-amazon" className="category-link">
								See the Top 6 Couches on Amazon
							</Link>
							<h2 className="overview-title">#1</h2>
							<h2 className="overview-title">
								Modular Sectional Sofa with Reversible Chaise
							</h2>
							<img
								src={image2}
								alt="Modular Sectional Sofa"
								className="overview-image"
							/>
							<a href="https://amzn.to/47V6MxW" className="button-link">
								Buy on Amazon for $929.99
							</a>
						</li>
					</ul>
				</section>
			</div>
		</>
	);
};

export default HomePage;
