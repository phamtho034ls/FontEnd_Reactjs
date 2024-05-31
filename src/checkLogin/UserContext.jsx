import React, { createContext, useState } from "react";
export const User = createContext();
const DATA = [
  { id: "a12", name: "Tho", phone: "012345", pass: "123" },
  { id: "a13", name: "Tho", phone: "012345", pass: "123" },
  { id: "a14", name: "Tho", phone: "012345", pass: "123" },
];
const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState(DATA);
  const addUser = (product) => {
    const oldList = [...userList];
    oldList.push(product);
    setUserList(oldList);
  };
  const checkUser = ({ userProduct }) => {
    const foundProduct = [...userList].find(
      (item) => item?.id === userProduct?.key
    );
    // console.log(foundProduct);
    if (foundProduct?.pass === userProduct?.passwrok) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <User.Provider value={{ userList, addUser, checkUser }}>
      {children}
    </User.Provider>
  );
};
export default UserProvider;
