import React from "react";
import Item from './Item/Item'

const Cart = ({ cart, updateCart, deleteItem }) => {
  return (
    <>
    <h3>Cart</h3>
    <ul>
      {cart.map((item, index) => (
        <Item key={index} item={item} index={index} updateCart={updateCart} deleteItem={deleteItem} />
      ))}
    </ul>
    </>
  );
};
export default Cart;