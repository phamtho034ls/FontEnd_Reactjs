import React from "react";
import CartItem from "./CartItem";
const ListCarts = ({ listCarts }) => {
  const renderListCarts = () => {
    return listCarts.map((prd) => {
      return <CartItem key={prd.id} product={prd} />;
    });
  };
  return <div className="row">{renderListCarts()}</div>;
};

export default ListCarts;
