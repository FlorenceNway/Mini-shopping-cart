import React from "react";
import Item from "./Item/Item";

const Store = ({ stock, addToCart }) => {
  return (
    <>
    <h3 className='heading'>Welcome to Florence Store</h3>
    <ul className='storeItems'>
      {stock.map((item, index) => (
        <Item key={index} item={item} addToCart={addToCart} index={index}/>
      ))}
    </ul>
    </>
  );
};

export default Store;
