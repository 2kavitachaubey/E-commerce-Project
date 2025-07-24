import React, { useState } from "react";
import AddToCart from "./AddToCart";
import { useCart } from "@/pages/cartContext";

const Cart = () => {
  const {cart, handleCart, handleIncrement, handleDecrement, handleDeleteItem} = useCart();

  console.log("this is my cart", cart);
  
  const getQuantity = (id) => {
    const found = cart.find((item) => item.id == id);
    return found ? found.quantity : 0;
  };

  const totalPrice = cart.reduce(
    (acc, value) => acc + value.price * getQuantity(value.id),
    0
  );

  return (
    <div className="order-page">
      <div className="order-page-heading">
        <h1>Medicine Cart</h1>
        <div className="order-page-payment">
          <h2>Total Amount : ${totalPrice.toFixed(2)}</h2>
          <button>Continue to Payment</button>
        </div>
      </div>

      {cart.length === 0 ? (
        <h3>CART IS EMPTY</h3>
      ) : (
        <div className="orderDetail">
          {cart.map((value, index) => {
            const qty = getQuantity(value.id);
            return (
              <div key={index} className="orderhistory">
                <div>
                  <img src={value.img} alt={value.name} />
                </div>
                <div className="order-description">
                  <h3>
                    {value.name} | {value.usage}
                  </h3>
                  <p>{value.description}</p>
                  <div className="order-btn">
                    <AddToCart
                    qty={qty}
                    value={value}
                    handleCart={handleCart}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                  />
                  <button onClick={()=>handleDeleteItem(value)} className="order-delete-btn">Delete</button>
                  </div>
                </div>
                <div>
                  <h1>${(value.price * qty).toFixed(2)}</h1>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;
