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
					content="Explore the best home products on Amazon through our detailed reviews."
				/>
				<link rel="canonical" href="https://homeproductrating.com/" />
			</Helmet>
			<div className="container">
				<h1 className="header">Welcome to Our Home Products Blog</h1>
				<p className="description">
					Discover the best home products on Amazon through our comprehensive
					reviews and customer feedback.
				</p>
				<p className="description">
					As we purchase and test more products, our categories will grow.
					Currently, we have two categories:{" "}
					<Link to="/best-mattresses-on-amazon" className="paragraph-link">
						Top 6 Mattresses on Amazon
					</Link>{" "}
					and{" "}
					<Link to="/best-couches-on-amazon" className="paragraph-link">
						Top 6 Couches on Amazon
					</Link>
					. Check them out!
				</p>

				<section className="category-section">
					<h2 className="category-title">Our Categories</h2>
					<ul className="category-list">
						<li className="category-item">
							<Link to="/best-mattresses-on-amazon" className="category-link">
								Explore the Top 6 Mattresses on Amazon
							</Link>
							<h2 className="overview-title">
								#1 - Tuft & Needle - Legacy Original Mattress
							</h2>
							<img
								src={image1}
								alt="tuft & needle mattress"
								className="overview-image"
							/>
							<p>
								Discover the comfort and quality of the Tuft & Needle Legacy
								Original Mattress. Read our in-depth review and{" "}
								<a
									href="https://amzn.to/48a0wTb"
									className="button-link"
									target="_blank"
									rel="noopener noreferrer"
								>
									Buy on Amazon for $1,395.00
								</a>
								.
							</p>
						</li>
						<li className="category-item">
							<Link to="/best-couches-on-amazon" className="category-link">
								Check Out the Top 6 Couches on Amazon
							</Link>
							<h2 className="overview-title">
								#1 - Modular Sectional Sofa with Reversible Chaise
							</h2>
							<img
								src={image2}
								alt="Modular Sectional Sofa"
								className="overview-image"
							/>
							<p>
								Experience the versatility and style of the Modular Sectional
								Sofa. Find out why it's a top pick and{" "}
								<a
									href="https://amzn.to/47V6MxW"
									className="button-link"
									target="_blank"
									rel="noopener noreferrer"
								>
									Buy on Amazon for $929.99
								</a>
								.
							</p>
						</li>
					</ul>
				</section>

				<section className="user-engagement-section">
					<h2 className="user-engagement-title">Share Your Thoughts</h2>
					<p className="user-engagement-description">
						Have you tried any of these products? Share your experiences or ask
						questions in the comments below.
					</p>
				</section>
			</div>
		</>
	);
};

export default HomePage;
