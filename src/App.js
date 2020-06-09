import React, { useState } from "react";
import "./App.css";

import Store from "./components/Store/Store";
import Cart from "./components/Cart/Cart";

const initialStock = [
  {
    id: 1,
    name: "Butter",
    quantity: 20,
  },
  {
    id: 2,
    name: "Apples",
    quantity: 5,
  },
  {
    id: 3,
    name: "Salmon",
    quantity: 13,
  },
  {
    id: 4,
    name: "Soap",
    quantity: 2,
  },
];

const App = () => {
  const [stock, setStock] = useState([...initialStock]);
  const [cart, setCart] = useState([]);

  const addToCart = (index, id, value) => {
    const localStock = [...stock];
    const localCart = [...cart];
    localStock[index].quantity -= value;
    const itemIndexInCart = localCart.findIndex((item) => item.id === id);

    if (itemIndexInCart !== -1) {
      localCart[itemIndexInCart].quantity += value;
    } else {
      localCart.push({ ...localStock[index], quantity: value });
    }
    setCart(localCart);
    setStock(localStock);
  };

  const updateCart = (index, id, value) => {
    console.log(index, id, value)
  }

  return (
    <div className="app">
      
      <h3>Store</h3>
      <Store stock={stock} addToCart={addToCart} />

      <h3>Cart</h3>
      <Cart cart={cart} updateCart={updateCart}/>

    </div>
  );
};

export default App;


// const getUpdateCartQty = (e) => {
//   setUpdateCartQty(e.target.value);
// };

// const updateCart = (prevQty, id) => {
//   console.log("prevQty", prevQty);

//   let newQty = parseInt(updateCartQty) + parseInt(prevQty);

//   setCart(
//     cart.map((item) => (item.id == id ? { ...item, quantity: newQty } : item))
//   );
// };

//   console.log(index, name, id);
  //   if (cart.length === 0 || cart.indexOf(name) == -1) {
  //     setCart([
  //       ...cart,
  //       {
  //         id: id,
  //         name: name,
  //         quantity: quantity,
  //       },
  //     ]);
  //   } else {
  //     let newQty = parseInt(cart[index].quantity) + parseInt(quantity);
  //     console.log("newQty", newQty);
  //     setCart(
  //       cart.map((item) =>
  //         item.id == id ? { ...item, quantity: newQty } : item
  //       )
  //     );

  //     let updateStock =
  //       parseInt(stock[index].quantity) - parseInt(cart[index].quantity);
  //     console.log("updatestock", updateStock);
  //     setStock(
  //       stock.map((item) =>
  //         item.id == id ? { ...item, quantity: updateStock } : item
  //       )
  //     );
  //   }

  //   setQuantity(0);
  //   console.log("Click-AddTocart cart:", cart);
  //   console.log("Click-AddTocart stock:", stock);
  // };
