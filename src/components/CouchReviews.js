import React from "react";
import TopPicks from "./product/TopPicks";
import { couches } from "../services/couches";
import { Helmet } from "react-helmet-async";

export const CouchReviews = (props) => {
	return (
		<>
			<Helmet>
				<title>Top 6 Couches and Sofas on Amazon</title>
				<meta
					name="description"
					content="Read reviews for our favorite Couches and Sofas you can find on Amazon."
				/>
				<link
					rel="canonical"
					href="homeproductrating.com/best-couches-on-amazon"
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
						expectations. The following couches have been purchased and tested
						by us, and we want to give you a rundown of what we liked and didn't
						like.
					</p>
				</div>

				<div className="container">
					<h2>My top picks: </h2>
					{couches.map((couch) => (
						<TopPicks key={couch.id} {...couch} />
					))}
				</div>
			</div>
		</>
	);
};
