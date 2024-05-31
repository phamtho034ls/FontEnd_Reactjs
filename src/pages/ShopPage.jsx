import React, { useState, useEffect, useCallback } from "react";
import ListCarts from "./memo/ListCarts";
import { useSearchParams } from "react-router-dom";

const LIST_PRODUCTS_URL =
  "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";

export const getProducts = async () => {
  return fetch(LIST_PRODUCTS_URL).then((response) => response.json());
};

const CATEGORY_GROUPS = [
  { groupName: "All" },
  {
    groupName: "Iphone & Mac",
    categories: [
      { key: "iphone", label: "Iphone" },
      { key: "ipad", label: "Ipad" },
      { key: "macbook", label: "Macbook" },
    ],
  },
  {
    groupName: "Wireless",
    categories: [
      { key: "airpod", label: "Airpod" },
      { key: "watch", label: "Watch" },
    ],
  },
  {
    groupName: "Other",
    categories: [
      { key: "mouse", label: "Mouse" },
      { key: "keyboard", label: "Keyboard" },
      { key: "orther", label: "Other" },
    ],
  },
];

const ShopPage = () => {
  const [posts, setPots] = useState([]);
  const [filterPosts, setFilterPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");

  const fetchListProductByCategory = async () => {
    try {
      const data = await getProducts();
      setPots(data);
      if (categoryParam) {
        setFilterPosts(
          categoryParam === "All"
            ? [...data]
            : [...data].filter((prd) => prd.category === categoryParam)
        );
      }
    } catch (error) {}
  };

  const renderCategories = useCallback(() => {
    return CATEGORY_GROUPS.map((group) => {
      return (
        <div key={group.groupName}>
          <button
            type="button"
            className={`list-group-item list-group-item-action text-uppercase ${
              group.categories ? "active list-group-item-dark" : ""
            }`}
            {...(!group.categories && {
              onClick: () => onClickCate(group.groupName),
            })}
          >
            {group.groupName}
          </button>
          {group?.categories?.map((cate) => {
            return (
              <button
                key={cate.key}
                type="button"
                className="list-group-item list-group-item-action text-capitalize "
                onClick={() => onClickCate(cate.key)}
              >
                {cate.label}
              </button>
            );
          })}
        </div>
      );
    });
  }, []);

  const onClickCate = (cate) => {
    setSearchParams({ category: cate });
  };

  useEffect(() => {
    if (posts?.length > 0) {
      setFilterPosts(
        categoryParam === "All"
          ? posts
          : posts.filter((prd) => prd.category === categoryParam)
      );
    } else fetchListProductByCategory();
  }, [categoryParam]);

  return (
    <div className={"root"}>
      <div className={"bander"}>
        <p className={"display-3"}>Shop</p>
        <p className={"h6"}>Shop</p>
      </div>
      <div className="row">
        <div className="col-3">
          <div className="list-group text-start">
            <button
              type="button"
              className="list-group-item list-group-item-action h3 text-uppercase"
              aria-current="true"
            >
              Cotegories
            </button>

            <button
              type="button"
              className="list-group-item list-group-item-action active list-group-item-dark text-uppercase"
              aria-current="true"
            >
              APPLE
            </button>
            {renderCategories()}
          </div>
        </div>
        <div className="col-9">
          <ListCarts listCarts={filterPosts} />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
