import React from "react";

import "./product.css";

export default function Product({ product }) {
  return (
    <>
      {product.map((item) => (
        <div className="section12-line">{item}</div>
      ))}
    </>
  );
}
