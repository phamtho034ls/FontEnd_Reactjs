import React, { createContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import ListCarts from "./memo/ListCarts";
import { cartContext } from "../context/CartContext";

const ProductDetailPage = () => {
  const { cartList, addToCart, caculateTotal } = useContext(cartContext);
  const [postsDetail, setPostDetail] = useState([]);
  const [related, setRelated] = useState([]);
  const { productid } = useParams();
  const navigate = useNavigate();
  const [imgSeleted, setImgSeleted] = useState();
  const [listProduct, setListProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const onClickAddToCart = (product) => {
    addToCart(product);
  };
  const onclickImge = (count) => {
    setImgSeleted(count);
  };

  // const goToCart = (id) => {
  //   navigate(`/cart`);
  // };

  useEffect(() => {
    // listProduct có giá trị thì thôi ngược lại thực thi gọi listData
    if (listProduct?.length > 0) {
      findAndSetDetail(listProduct);
      return;
    }

    // Gọi sau khi return HTML
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
      .then((response) => response.json())
      .then((listData) => {
        findAndSetDetail(listData);
        setListProduct(listData);
      });
  }, [productid]);

  const findAndSetDetail = (list) => {
    const result = list.find((prd) => prd?._id.$oid === productid);
    setPostDetail(result);
    setRelated(
      list.filter((prd) => {
        if (
          prd?.category === result.category &&
          prd?._id.$oid !== result?._id.$oid
        )
          return prd;
      })
    );
  };

  useEffect(() => {
    // Gọi sau mỗi lần postDetail thay đổi (gọi đến khi có img1)
    setImgSeleted(postsDetail?.img1);
  }, [postsDetail]);

  return (
    <div className="root">
      <div className="row ">
        <div className="col-xl-6 col-sm-12">
          <div className="row clearfix">
            <div className="col-2 list-sile">
              {" "}
              <img
                src={postsDetail?.img1}
                className={"sile-imge-2 clearfix"}
                onClick={() => onclickImge(postsDetail?.img1)}
              />
              <img
                src={postsDetail?.img2}
                className={"sile-imge-2 clearfix"}
                onClick={() => onclickImge(postsDetail?.img2)}
              />
              <img
                src={postsDetail?.img3}
                className={"sile-imge-2 clearfix"}
                onClick={() => onclickImge(postsDetail?.img3)}
              />
              <img
                src={postsDetail?.img4}
                className={"sile-imge-2 clearfix"}
                onClick={() => onclickImge(postsDetail?.img4)}
              />
            </div>
            <div className="col-4">
              <img src={imgSeleted} className={"sile-imge clearfix"} />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-sm-12">
          <h1
            style={{ fontSize: "30px", textTransform: "uppercase" }}
            className="text-start"
          >
            {postsDetail?.name}
          </h1>
          <p
            style={{ fontSize: "20px", textTransform: "uppercase" }}
            className="text-start"
          >
            {postsDetail?.price} VND
          </p>
          <p
            style={{ fontSize: "15px", textTransform: "lowercase" }}
            className="text-start"
          >
            {postsDetail?.short_desc}
          </p>
          <h3
            style={{ fontSize: "20px", textTransform: "uppercase" }}
            className="text-start"
          >
            category:
            <span
              style={{
                fontSize: "15px",
                textTransform: "capitalize",
                padding: "0px 10px",
              }}
            >
              {postsDetail?.category}
            </span>
          </h3>
          <div className="d-flex flex-row">
            <input type="text" value={"Quantily"} disabled />
            <button
              data-mdb-button-init=""
              data-mdb-ripple-init=""
              className="btn btn-link px-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
            >
              <i className="fas fa-minus" />
            </button>
            <input
              id="form1"
              min={0}
              name="quantity"
              defaultValue={1}
              type="number"
              className="form-control form-control-sm"
              style={{ width: 50 }}
              onChange={(e) => {
                setQuantity(parseInt(e.target.value));
              }}
            />
            <button
              data-mdb-button-init=""
              data-mdb-ripple-init=""
              className="btn btn-link px-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
              onClick={(e) => {
                setQuantity(parseInt(e.target.value));
              }}
            >
              <i className="fas fa-plus" />
            </button>
            <button
              className="btn btn-dark"
              onClick={() => {
                onClickAddToCart({
                  id: postsDetail?._id.$oid,
                  name: postsDetail?.name,
                  price: parseInt(postsDetail?.price),
                  img: postsDetail?.img1,
                  quantity: quantity,
                });
              }}
            >
              Add to Card
            </button>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn btn-dark d-flex justify-content-start"
      >
        DesCription
      </button>
      <div>
        <h1
          style={{ fontSize: "30px", textTransform: "uppercase" }}
          className="text-start"
        >
          Product DesCription
        </h1>
        <p
          style={{ fontSize: "15px", textTransform: "lowercase" }}
          className="text-start "
        >
          {postsDetail?.long_desc}
        </p>
      </div>
      <div>
        <h1
          style={{ fontSize: "30px", textTransform: "uppercase" }}
          className="text-start "
        >
          Related products
        </h1>
        <ListCarts listCarts={related} />
      </div>
    </div>
  );
};

export default ProductDetailPage;
