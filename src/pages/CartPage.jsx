import React, { useEffect } from "react";
import ListTableItem from "./memo/ListTableItem";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";
import { useLocation, useNavigate } from "react-router-dom";
import CurrencyFormatter from "./memo/CurrencyFormatter";
const CartPage = () => {
  const { cartList, caculateTotal, deleteFromCart } = useContext(cartContext);
  const location = useLocation();
  const navigate = useNavigate();

  const id = location.state?.id;
  useEffect(() => {
    deleteFromCart(location.state?.id);
  }, [id]);
  return (
    <div className="root">
      <section className="row d-flex">
        <div className="col-8">
          <ListTableItem lisTableItems={cartList} />
          <div className="d-flex justify-content-around bander2">
            <i className="bi bi-arrow-left" onClick={() => navigate("/shop")}>
              Continue Shopping
            </i>

            <button
              type="button"
              class="btn btn-outline-dark"
              onClick={() => navigate("/checkout")}
            >
              Proceed to checkout
              <i className="bi bi-arrow-right" />
            </button>
          </div>
        </div>
        <div className="col-4 cart_total">
          <div className="card-body">
            <h4 className="text-start h4 text-uppercase">Cart Total</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Products
                <span> <CurrencyFormatter amount={caculateTotal()} /></span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Gratis</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                </div>
                <span>
                  <strong><CurrencyFormatter amount={caculateTotal()} /></strong>
                </span>
              </li>
              <li
                className="d-flex align-items-center border-0 px-0 mb-3"
                style={{ alignSelf: "center" }}
              >
                <input type="text" className="align-center px-0" />
              </li>
            </ul>

            <button
              type="button"
              data-mdb-button-init=""
              data-mdb-ripple-init=""
              className="btn btn-dark btn-lg "
              onClick={() => navigate("/checkout")}
            >
              Go to checkout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
