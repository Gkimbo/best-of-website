import React from "react";
import TopPicks from "./product/TopPicks";
import { couches } from "../services/couches";

export const CouchReviews = (props) => {
	return (
		<div className="container">
			<div className="blog-intro">
				<h1 className="blog-title">Discover Exceptional Comfort:</h1>
				<h1>The Best Couches on Amazon</h1>
				<p className="blog-description">
					Welcome to my curated space where I delve into the realm of
					excellence, guiding you through the top couches you can buy right now
					on Amazon.
				</p>
				<p className="blog-content">
					Elevate your lounging experience with a couch that goes beyond
					expectations. The following couches have been tested by me, and I want
					to give you a rundown of what I liked and didn't like.
				</p>
			</div>

			<div className="container">
				<h2>My top picks: </h2>
				{couches.map((couch) => (
					<TopPicks key={couch.id} {...couch} />
				))}
			</div>
		</div>
	);
};
