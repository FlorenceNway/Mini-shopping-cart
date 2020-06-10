import React, {useState,useEffect} from "react";

const Item = ({item, updateCart, deleteItem, index}) => {
  const [value, setValue] = useState(item.quantity);

  useEffect(() => {
    setValue(item.quantity)
  },[item.quantity])

  const onChangeHandler = (event) => {
    setValue(parseInt(event.target.value))
  }

  const submitHandler = () => {
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
            <button onClick={submitHandler} className='update'>
              Update
            </button>
            <button className="delBtn delete" onClick={() => deleteItem(item)}>
              Delete
            </button>
          </li>
  );
};

export default Item;