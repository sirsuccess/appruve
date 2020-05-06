import React from "react";
import Button from "../button/button";
import Product from "../product/product";

import CardData from "../../dummyData/cardData";

import "./card.css";

export default function Card() {
  return (
    <div className="section12">
      {CardData.map((item, i) => (
        <div className="section12-card">
          <div className="top-square">
            <div className="basic-plan">{item.name}</div>
            {item.tag}
            <h3>{item.price}</h3>
            <span>for 1 month</span>
            <br />
            <Button />
          </div>
          <Product product={item.product} />
        </div>
      ))}
    </div>
  );
}
