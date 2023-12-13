import React from "react";

const Product = ({ name, descriptionShort, image, link }) => {
	return (
		<div className="product-container">
			<h2 className="product-title">{name}</h2>
			<img src={image} alt={name} className="product-image" />
			<p className="product-description">{descriptionShort}</p>
			<a href={link}>Buy on Amazon</a>
		</div>
	);
};

export default Product;
