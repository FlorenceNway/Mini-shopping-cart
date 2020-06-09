import React from "react";
import Item from './Item/Item'

const Cart = ({ cart, updateCart }) => {
  return (
    <ul>
      {cart.map((item, index) => (
        <Item key={index} item={item} index={index} updateCart={updateCart}/>
      ))}
    </ul>
  );
};
export default Cart;