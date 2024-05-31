import React from "react";
import { useContext } from "react";
import TableItem from "./TableItem";

const ListTableItem = ({ lisTableItems }) => {
  const renderListCarts = () => {
    return lisTableItems.map((prd) => {
      return <TableItem key={prd.id} product={prd} />;
    });
  };
  return (
    <table>
      <tr>
        <th>Image</th>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
        <th>Remove</th>
      </tr>
      {renderListCarts()}
    </table>
  );
};

export default ListTableItem;
