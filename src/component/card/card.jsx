import React from "react";
import Button from "../button/button";
import Product from "../product/product";

import CardData from "../../dummyData/cardData";

import "./card.css";

export default function Card() {
  return (
    <div className="section12">
      {CardData.map((item, i) => (
        <div className={item.name === "Gold" ? "gold" : "section12-card"}>
          <div className="top-square">
            <div
              className={
                item.name === "Gold"
                  ? "gold-plan"
                  : item.name === "Silver"
                  ? "diamond-plan"
                  : "basic-plan"
              }
            >
              {item.name}
            </div>
            {item.tag}
            <h3>{item.price}</h3>
            <h4>Discount:{item.discount}</h4>
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
