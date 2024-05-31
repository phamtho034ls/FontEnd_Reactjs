import React from "react";
import CurrencyFormatter from "./CurrencyFormatter";
function CheckItem({ product }) {
  console.log("product:", product);
  return (
    <li className="list-group-item d-flex justify-content-between lh-sm">
      <a>{product.name} </a>
      <span>
      <CurrencyFormatter amount={product.price} />
        x{product.quantity}
      </span>
    </li>
  );
}

export default CheckItem;
