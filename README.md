# Mini Shopping Cart
React Hooks

# To run
npm start

## Features

The user is presented with a list of items, each with a field for quantity and a button to add to cart.

The user can change the quantity in the field, but only integers from 0 to the remaining stock number are allowed.

Clicking "Add to Cart" removes that quantity of the selected item from the store and adds them to the cart.

If there are no more items in stock, disable the input field and the button, and add an "Out of Stock" message.

In the cart, the user can reduce the number of items down to 0 and click "Update". This updates the number of items in the cart and adds them back to the store.

The user can also click a "Delete" button in the cart, to remove the entire quantity of that item and add it back to the store.

## Component Hierarchy

App
    Store
        Item
    Cart
        Item

## State

App component stores the state of the store and the cart.

In the App component, 
 `addToCart` and `updateItemInCart`. These functions recieve the parameters: `selectedItem` and `quantity`.

In the function, update the state of `store` and `cart` with the new quantity of the selected item.

If the quantity of the item in the cart is 0, completely remove that item from the cart.

## Props

Store component is to receive the props: `store` and `addToCart`.

Cart component is to receive the props: `cart` and `updateItem`.
