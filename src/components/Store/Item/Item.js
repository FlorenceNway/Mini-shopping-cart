import React, {useState} from "react";

const Item = ({item, addToCart, index}) => {
  const [value, setValue] = useState(0);
  const [disable, setDisable] = useState("")

  const onChangeHandler = (event) => {
    setValue(event.target.value)
    
    if(value !== 0 && value < item.quantity) {
      setDisable("disable")
    }else {
      setDisable("")
    }
  }

  const submitHandler = () => {
    if(value !== 0 && value <= item.quantity) {
      addToCart(index, item.id, parseInt(value))
    }
  
    setValue(0);
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
      <button onClick={submitHandler} className={disable} disable={disable}>
        Add to Cart
      </button>
    </li>
  );
};

export default Item;
