import React from "react";
import Product from "./Product";
import "./Catalog.css";

export default function Catalog({ catalog }) {
  if (!catalog || catalog.length === 0)
    return <p style={{ textAlign: "center" }}>No products available.</p>;

  return (
    <section>
      <h2 className="catalog-title" id="catalog">Our Products</h2>
      <div className="catalog">
        {catalog.map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}


