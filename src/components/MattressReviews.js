import React from "react";
// import Product from "./product/productComponent";
import TopPicks from "./product/TopPicks";
import { mattressReviews } from "../services/mattresses";

export const MattressReviews = (props) => {
	return (
		<div className="container-1">
			<div className="blog-intro">
				<h1 className="blog-title">Discover Exceptional Comfort:</h1>
				<h1>The Best Mattresses on Amazon</h1>
				<p className="blog-description">
					Welcome to our curated space where we delve into the realm of
					excellence, guiding you through the top 6 Mattresses you can buy right
					now on Amazon.
				</p>
				<p className="blog-content">
					Elevate your sleep experience with a mattress that goes beyond
					expectations. The following Mattresses have been purchased and tested
					by us and we want to give you a rundown of what we liked and didn't
					like.
				</p>
			</div>

			<div className="container">
				<h2>My top 6 Picks: </h2>
				{mattressReviews.map((mattress) => (
					<TopPicks key={mattress.id} {...mattress} />
				))}
			</div>
		</div>
	);
};
