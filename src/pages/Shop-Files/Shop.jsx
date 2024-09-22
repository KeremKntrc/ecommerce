import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./Shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
