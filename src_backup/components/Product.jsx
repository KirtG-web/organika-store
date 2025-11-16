import React, { useState } from "react";
import "./Product.css";

export default function Product({ product }) {
  const { image, title, price } = product || {};
  const defaultImage = "/images/default.png";

  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 0 ? q - 1 : 0));

  return (
    <div className="product">
      <img
        src={image || defaultImage}
        alt={title || "No title"}
        onError={(e) => { e.target.src = defaultImage; }}
      />
      <div className="product-info">
        <h3 className="product-title">{title || "No title"}</h3>
        <p className="product-price">${(price || 0).toFixed(2)}</p>

        <div className="quantity-selector">
          <button onClick={decrement} className="qty-btn">-</button>
          <span className="qty-value">{quantity}</span>
          <button onClick={increment} className="qty-btn">+</button>
          <p className="product-total">
  Total: ${(price * quantity).toFixed(2)}
</p>

        </div>
      </div>
    </div>
  );
}


