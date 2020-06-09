import React, {useState} from "react";

const Item = ({item, updateCart, index}) => {
  const [value, setValue] = useState(item.quantity);

  const onChangeHandler = (event) => {
    setValue(event.target.value)
  }

  const submitHandler = () => {
    setValue(item.quantity)
    updateCart(index, item.id, parseInt(value));
  }

  return (
          <li>
            <span>{item.name}</span>
            <input
              type="number"
              value={value}
              min={0}
              max={item.quantity}
              onChange={onChangeHandler}
            />
            <button onClick={submitHandler}>
              Update
            </button>
            <button className="delBtn">
              Delete
            </button>
          </li>
  );
};

export default Item;