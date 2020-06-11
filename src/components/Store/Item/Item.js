import React, {useState} from "react";

const Item = ({item, addToCart, index}) => {
  const [value, setValue] = useState(0);
  const [disable, setDisable] = useState("")

  const onChangeHandler = (e) => {
    setValue(e.target.value)

    if(e.target.value === 0 && e.target.value > item.quantity) {
      setDisable("disable")
    }else {
      setDisable("")
    }
  }

  const submitHandler = () => {
    
      addToCart(index, item.id, parseInt(value))
    
    setValue(0);
  }

  return (
    <li className="storeItem">
      <div className="imgWrapper">
        <img src={item.img_url} width={200} height={200}></img>
      </div> 
      <span>{item.name}</span>
      <input
        type="number"
        value={value}
        min={0}
        max={item.quantity}
        onChange={onChangeHandler}
      />
      <button onClick={submitHandler} className={disable}  disabled={disable}>
        Add to Cart
      </button>
      <span className='inStock label'>{item.quantity === 0? "Out of Stock": `In stock: ${item.quantity}`}</span>
    </li>
  );
};

export default Item;
