import React from "react";
import CheckItem from "./CheckItem";
const ListChecks = ({ listCheck }) => {
  console.log("listcheck",listCheck);
  const renderListChecks = () => {
    return listCheck.map((prd) => {
      return <CheckItem key={prd.id} product={prd} />;
    });
  };
  return <ul className="list-group mb-3">{renderListChecks()}</ul>;
};

export default ListChecks;
