import React from "react";
import Item from "./Item/Item";

const Store = ({ stock, addToCart }) => {
  return (
    <ul>
      {stock.map((item, index) => (
        <Item key={index} item={item} addToCart={addToCart} index={index}/>
      ))}
    </ul>
  );
};

export default Store;
