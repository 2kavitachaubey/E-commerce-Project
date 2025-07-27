import { useContext, createContext, useState, useEffect } from "react";
import React from "react";

const cartContext = createContext();
export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const handleCart = (product) => {
    const isInCart = cart.some((item) => item.id === product.id); // check if product id is in cart true else false
    if (!isInCart) {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const handleIncrement = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              // price: productPrice * (item.quantity + 1),
            }
          : item
      )
    );
  };
  const handleDecrement = (product) => {
    setCart(
      cart
        .map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity - 1,
                // price: productPrice * (item.quantity - 1),
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  const handleDeleteItem = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  useEffect(() => {//This runs only once when the component loads
    const data = localStorage.getItem("cart"); //get cart and store in data
    if (data) {
      setCart(JSON.parse(data)); // Convert string back into array/object and update state
    }
  }, []);

  useEffect(() => {//This runs every time cart changes
    localStorage.setItem("cart", JSON.stringify(cart)); //Save cart into localStorage as a string
  }, [cart]);

  return (
    <cartContext.Provider value={{cart,handleCart,handleIncrement, handleDecrement, handleDeleteItem}}>
        {children}
    </cartContext.Provider>
  )
};

export const useCart = () => useContext(cartContext);
