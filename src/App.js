import React, { useState } from "react";
import "./App.css";

import Store from "./components/Store/Store";
import Cart from "./components/Cart/Cart";

const initialStock = [
  {
    id: 1,
    name: "Butter",
    quantity: 20,
    img_url:"https://gbc-cdn-public-media.azureedge.net/img14494.768x512.jpg"
  },
  {
    id: 2,
    name: "Apples",
    quantity: 5,
    img_url:"https://gbc-cdn-public-media.azureedge.net/img14494.768x512.jpg"
  },
  {
    id: 3,
    name: "Salmon",
    quantity: 13,
    img_url:"https://gbc-cdn-public-media.azureedge.net/img14494.768x512.jpg"
  },
  {
    id: 4,
    name: "Soap",
    quantity: 2,
    img_url:"https://gbc-cdn-public-media.azureedge.net/img14494.768x512.jpg"
  },
];

const App = () => {
  const [stock, setStock] = useState([...initialStock]);
  const [cart, setCart] = useState([]);

  const addToCart = (index, id, value) => {
    const localStock = [...stock];
    const localCart = [...cart];

    if(value <= localStock[index].quantity && value !== 0) {
      localStock[index].quantity -= value;
    

    const itemIndexInCart = localCart.findIndex((item) => item.id === id);

    if (itemIndexInCart !== -1) {
      localCart[itemIndexInCart].quantity += value;
    } else {
      localCart.push({ ...localStock[index], quantity: value });
    }
    setCart(localCart);
    setStock(localStock);
    }
  };


  const updateCart = (index, id, value) => {
    const localStock = stock.map(item => {
      if(item.id !== id) {
        return item
      }
      const prevItem = cart.find(item => item.id === id)
      const diff = prevItem.quantity - value
      return {...item, quantity: item.quantity + diff}
    })

    const localCart = cart.map(item => {
      if(item.id !== id) {
        return item
      }
      return {...item,quantity: value}

    }).filter(item => item.quantity > 0)

    setCart(localCart);
    setStock(localStock);
  }

  const deleteItem = (deleted_item) => {
    const updatedCart = cart.filter((item) => {
      return item.id !== deleted_item.id
    });

    const localStock = stock.map(item => {
      if(item.id !== deleted_item.id) {
        return item
      }
     
      return {...item, quantity: item.quantity + deleted_item.quantity}
    })
    setCart(updatedCart);
    setStock(localStock)

  }

  return (
    <div className="app">
      <Store stock={stock} addToCart={addToCart} />
      <Cart cart={cart} updateCart={updateCart} deleteItem={deleteItem}/>
    </div>
  );
};

export default App;


