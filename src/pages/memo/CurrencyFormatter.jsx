import React from "react";

function CurrencyFormatter({ amount }) {
  const formattedAmount = formatCurrency(amount);

  return <div>{formattedAmount} VND</div>;
}

function formatCurrency(amount) {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default CurrencyFormatter;
