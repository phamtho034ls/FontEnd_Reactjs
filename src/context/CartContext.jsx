import React, { Children, createContext, useState } from "react";
import { useEffect } from "react";
export const cartContext = createContext();

const CartProvider = ({ children }) => {
  const cartListFromLocal = localStorage.getItem("cart_list");
  const cartListObj = JSON.parse(cartListFromLocal) || [];
  
  const [cartList, setCartList] = useState(cartListObj);

  const addToCart = (product) => {
    const foundProduct = [...cartList].find((item) => item?.id === product?.id);

    if (foundProduct) {
      foundProduct.quantity =
        (foundProduct.quantity || 0) + (product?.quantity || 1);
      setCartList((oldList) => {
        return oldList.map((product) => {
          if (product?.id === foundProduct?.id) {
            return foundProduct;
          }
          return product;
        });
      });
    } else {
      const oldList = [...cartList];
      oldList.push(product);
      setCartList(oldList);
    }
  };

  const deleteFromCart = (id) => {
    const oldCart = [...cartList];
    const newCartList = oldCart.filter((prd) => prd.id != id);
    setCartList(newCartList);
  };
  const caculateTotal = () => {
    let total = 0;
    for (let a of cartList) {
      total += a.price * a.quantity;
    }
    return total;
  };

  useEffect(() => {
    localStorage.setItem("cart_list", JSON.stringify(cartList));
  }, [cartList]);

  return (
    <cartContext.Provider
      value={{
        cartList,
        setCartList,
        addToCart,
        caculateTotal,
        deleteFromCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
