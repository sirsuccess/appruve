import React from "react";

import "./product.css";

export default function Product({ product }) {
  return (
    <>
      {product.map((item, i) => (
        <div key={i} className="section12-line">
          {item}
        </div>
      ))}
    </>
  );
}
