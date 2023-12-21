import React from "react";
import TopPicks from "./product/TopPicks";
import { couches } from "../services/couches";
import { Helmet } from "react-helmet-async";

const CouchReviews = (props) => {
	return (
		<>
			<Helmet>
				<title>Top 6 Couches and Sofas on Amazon - Home Product Rating</title>
				<meta
					name="description"
					content="Explore reviews for our handpicked selection of the best couches and sofas available on Amazon. Find comfort and style for your home."
				/>
				<link
					rel="canonical"
					href="https://homeproductrating.com/best-couches-on-amazon"
				/>
			</Helmet>
			<div className="container-1">
				<div className="blog-intro">
					<h1 className="blog-title">Discover Exceptional Comfort:</h1>
					<h2>The Best Couches on Amazon</h2>
					<p className="blog-description">
						Welcome to our curated space where we delve into the realm of
						excellence, guiding you through the top couches you can buy right
						now on Amazon.
					</p>
					<p className="blog-content">
						Elevate your lounging experience with a couch that goes beyond
						expectations. The following couches have been purchased, tested, and
						meticulously reviewed by our experts. We're here to provide you with
						a detailed rundown of what we loved and what we think could be
						improved.
					</p>
					<p className="blog-content">
						At Home Product Rating, we understand the importance of finding the
						perfect couch for your space. Whether you prioritize comfort,
						durability, or style, our reviews aim to help you make an informed
						decision.
					</p>
				</div>

				<div className="container">
					<h2>Our Top Picks:</h2>
					<div className="top-picks-list">
						{couches.map((couch) => (
							<TopPicks key={couch.id} {...couch} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default CouchReviews;
