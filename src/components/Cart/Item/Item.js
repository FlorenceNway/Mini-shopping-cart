import React, { useState } from "react";

const Item = ({ item, updateCart, deleteItem, index }) => {

  const [value, setValue] = useState(item.quantity);

  const onChangeHandler = (event) => {
    setValue(event.target.value)
  }

  const submitHandler = () => {
    // setValue(item.quantity) ///////// @@@@@@@
    setValue(value)
    updateCart(index, item.id, parseInt(value));
  }

  return (
    <li>
      <span>{item.name}</span>
      <input
        type="number"
        value={value}
        min={0}
        // max={item.quantity} ////////// @@@@@@ is it necessary? it is not a error but made me crazy :D
        onChange={onChangeHandler}
      />
      <button onClick={submitHandler}>Update</button>
      <button onClick={() => deleteItem(item)} className="delBtn">Delete</button>
    </li>
  );
};

export default Item;