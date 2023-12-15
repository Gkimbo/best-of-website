import React from "react";

const TopPicks = ({
	name,
	descriptionShort,
	image,
	pick,
	link,
	title,
	price,
	pros,
	cons,
}) => {
	return (
		<div className="top-picks-tile">
			<h2>#{pick}</h2>
			<h3>{title}</h3>
			<h3 className="top-picks-title">{name}</h3>
			<img src={image} alt={name} className="top-picks-image" />
			<div class="pros-cons-table">
				<div class="pros">
					<h3>Pros</h3>
					<ul id="pros-list">
						{pros.map((pro) => {
							return <li>{pro}</li>;
						})}
					</ul>
				</div>
				<div class="cons">
					<h3>Cons</h3>
					<ul id="cons-list">
						{cons.map((con) => {
							return <li>{con}</li>;
						})}
					</ul>
				</div>
			</div>
			<p className="top-picks-description">{descriptionShort.par1}</p>
			<p className="top-picks-description">{descriptionShort.par2}</p>
			<p className="top-picks-description">{descriptionShort.par3}</p>
			<p className="top-picks-description">{descriptionShort.par4}</p>
			<p className="top-picks-description">{descriptionShort.par5}</p>
			<a href={link}>Buy on Amazon for ${price}</a>
		</div>
	);
};

export default TopPicks;
