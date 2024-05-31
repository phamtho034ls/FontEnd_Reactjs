import React from "react";
import ListChecks from "./memo/ListCheckItem";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";
import CurrencyFormatter from "./memo/CurrencyFormatter";
function CheckOutPage() {
  const { cartList, caculateTotal } = useContext(cartContext);
  console.log(cartList);
  const onClickAlert = () => {
    alert("Thanh toán thành công");
  };
  return (
    <div className="root">
      <div className={"bander"}>
        <p className={"display-3"}>Checkout</p>
        <p className={"h6"}>Home/Cart/Checkout</p>
      </div>
      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="text-start h4 text-uppercase">You Oder</h4>

          <ListChecks listCheck={cartList} />
          <div className="d-flex justify-content-between lh-sm bander2">
            <p className="h5 text-uppercase">Total:</p>
            <span>
              <CurrencyFormatter amount={caculateTotal()} />
            </span>
          </div>
        </div>
        <div className="col-md-7 col-lg-8 text-start">
          <h4 className="mb-3">Billing Detail</h4>
          <form className="needs-validation was-validated" noValidate="">
            <div className="row g-3">
              <div className="col-12">
                <label htmlFor="username" className="form-label">
                  Fullname
                </label>
                <div className="input-group has-validation">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Fullname"
                    required=""
                  />
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
              </div>
              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  PhoneNumber
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="01234567"
                  required=""
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Enter you address here"
                />
              </div>
            </div>

            <hr className="my-4" />
            <button
              className=" btn btn-dark btn-lg"
              type="submit"
              onClick={() => onClickAlert()}
            >
              Place Oder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckOutPage;
