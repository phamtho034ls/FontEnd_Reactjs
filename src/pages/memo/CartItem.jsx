import React from "react";
import styles from "./index.module.css";
import ProductDetailPage from "../ProductDetailPage";
import { useNavigate } from "react-router-dom";
import CurrencyFormatter from "./CurrencyFormatter";
const CartItem = ({ product }) => {
  const navigate = useNavigate();

  const goToDeTail = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <div
      style={{ width: "18rem", margin: "20px auto", cursor: "pointer" }}
      className={`${styles.category} card col-4 fade-in`}
      onClick={() => goToDeTail(product?._id?.$oid)}
    >
      <img src={product.img1} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <a href="#" className="link-underline-light text-dark">
        <CurrencyFormatter amount={product.price} />
        </a>
      </div>
    </div>
  );
};

export default CartItem;
