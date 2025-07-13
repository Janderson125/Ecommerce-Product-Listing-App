import React from "react";
import "./ProductItem.css";

const ProductItem = ({ product }) => {
  const { name, price, description, image, category } = product;

  return (
    <div className="product-item">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-category">{category}</p>
        <p className="product-price">${price.toFixed(2)}</p>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
};

export default ProductItem;
