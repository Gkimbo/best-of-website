import React from "react";

const TopPicks = ({
	name,
	descriptionShort,
	image,
	pick,
	link,
	title,
	price,
}) => {
	return (
		<div className="top-picks-tile">
			<h1>#{pick}</h1>
			<h2>{title}</h2>
			<h2 className="top-picks-title">{name}</h2>
			<img src={image} alt={name} className="top-picks-image" />
			<p className="top-picks-description">{descriptionShort}</p>
			<a href={link}>Buy on Amazon for ${price}</a>
		</div>
	);
};

export default TopPicks;
