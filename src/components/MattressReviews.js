import React from "react";
import TopPicks from "./product/TopPicks";
import { mattressReviews } from "../services/mattresses";
import { Helmet } from "react-helmet-async";

const MattressReviews = (props) => {
	return (
		<>
			<Helmet>
				<title>Top 6 Mattresses on Amazon - Home Product Rating</title>
				<meta
					name="description"
					content="Explore reviews for our carefully selected top 6 mattresses available on Amazon. Discover the key features, pros, and cons to make an informed decision for a better night's sleep."
				/>
				<link
					rel="canonical"
					href="https://homeproductrating.com/best-mattresses-on-amazon"
				/>
			</Helmet>
			<div className="container-1">
				<div className="blog-intro">
					<h1 className="blog-title">Discover Exceptional Comfort:</h1>
					<h2>The Best Mattresses on Amazon</h2>
					<p className="blog-description">
						Welcome to our curated space where we explore the realm of
						excellence, guiding you through the top 6 mattresses you can buy
						right now on Amazon.
					</p>
					<p className="blog-content">
						Elevate your sleep experience with a mattress that surpasses
						expectations. Our team has carefully selected and tested the
						following mattresses to provide you with a detailed rundown of what
						impressed us and what we believe could be improved.
					</p>
					<p className="blog-content">
						At Home Product Rating, we recognize the significance of choosing
						the right mattress for a restful night's sleep. Whether you value
						support, comfort, or durability, our reviews aim to assist you in
						making a well-informed decision for your sleep sanctuary.
					</p>
				</div>

				<div className="container">
					<h2>Our Top 6 Picks:</h2>
					<div className="top-picks-list">
						{mattressReviews.map((mattress) => (
							<TopPicks key={mattress.id} {...mattress} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default MattressReviews;
