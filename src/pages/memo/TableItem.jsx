import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CurrencyFormatter from "./CurrencyFormatter";
const TableItem = ({ product }) => {
  const total = () => {
    return product.price * product.quantity;
  };

  const navigate = useNavigate();
  const goToCleanCart = (id) => {
    navigate(`/cart`, { state: { id } });
  };
  return (
    <tr>
      <td scope="row">
        <img
          src={product?.img}
          className="img-fluid rounded-3"
          style={{ width: 100 }}
        />
      </td>
      <td>
        <p className="mb-2 text-center" style={{ width: 200 }}>
          {product?.name}
        </p>
      </td>
      <td className="align-middle">
        <p className="ms-4" style={{ fontWeight: 500 }}>
          {/* {product?.price} VND */}
          <CurrencyFormatter amount={product?.price} />
        </p>
      </td>
      <td className="align-middle">
        <div className="d-flex flex-row">
          <button
            data-mdb-button-init=""
            data-mdb-ripple-init=""
            className="btn btn-link px-2"
          >
            <i className="fas fa-minus" />
          </button>
          <input
            id="form1"
            min={0}
            name="quantity"
            defaultValue={2}
            type="number"
            className="form-control form-control-sm"
            style={{ width: 50 }}
          />
          <button
            data-mdb-button-init=""
            data-mdb-ripple-init=""
            className="btn btn-link px-2"
          >
            <i className="fas fa-plus" />
          </button>
        </div>
      </td>
      <td className="align-middle">
        <p className="mb-0" style={{ fontWeight: 500 }}>
          {/* {total()} */}
          <CurrencyFormatter amount={total()} />
        </p>
      </td>
      <td className="align-middle">
        <button onClick={() => goToCleanCart(product?.id)}>
          <i className="bi bi-trash3" />
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
