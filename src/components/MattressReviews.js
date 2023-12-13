import React from "react";
import Product from "./product/productComponent";
import TopPicks from "./product/TopPicks";
import { mattressReviews } from "../services/mattresses";

export const MattressReviews = (props) => {
	return (
		<div className="container">
			<div className="blog-intro">
				<h1 className="blog-title">
					Discover Exceptional Comfort: The Best Mattresses on Amazon
				</h1>
				<p className="blog-description">
					Welcome to our curated space where we delve into the realm of
					excellence, guiding you through the finest mattresses available on
					Amazon.
				</p>
				<p className="blog-content">
					Elevate your sleep experience with a mattress that goes beyond
					expectations. In today's landscape, where extended delivery times and
					shipping delays have become common concerns, finding the right
					mattress promptly is more crucial than ever. Amazon, a trusted
					marketplace, brings you a collection of top-performing mattresses with
					exceptional shipping options, including the convenience of fast Prime
					delivery (if you're up for the mattress-in-a-box setup). The Textiles
					Lab at the esteemed Good Housekeeping Institute conducts a meticulous
					evaluation of a diverse array of mattresses, spanning hybrid, memory
					foam, latex, and organic varieties. Our process of pinpointing the
					best mattresses on Amazon involves exhaustive research into brands,
					materials, and features led by our knowledgeable analysts.
					Subsequently, our product experts and consumer testers immerse
					themselves in real home settings to provide invaluable feedback on the
					user experience. In addition, we regularly reach out to our tester
					panel to gather enduring insights from mattress owners. Our latest
					surveys, with responses from over 10,000 mattress owners and more than
					170,000 data points collected, have culminated in the following
					selections. These standout performers from our mattress evaluations
					are conveniently available for purchase on Amazon.
				</p>
			</div>

			<div className="container">
				<h2>Our top Picks: </h2>
				{mattressReviews.map((mattress) => (
					<TopPicks key={mattress.id} {...mattress} />
				))}
			</div>
			<div className="container-tiles">
				{mattressReviews.map((mattress) => (
					<Product key={mattress.id} {...mattress} />
				))}
			</div>
		</div>
	);
};
