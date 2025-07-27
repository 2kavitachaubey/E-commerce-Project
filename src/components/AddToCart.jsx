import { useCart } from "@/lib/cartContext";
import React from "react";

const AddToCart = ({ qty, value }) => {
  const { handleCart, handleDecrement, handleIncrement } = useCart();
  return (
    <div>
      <div className="cart-btn">
        {qty >= 1 ? (
          <div className="quantity-btn">
            <button onClick={() => handleDecrement(value)}>
              {qty === 1 ? (
                <span>🗑</span>
              ) : (
                <span className="minus-btn">-</span>
              )}
            </button>
            <span>{qty}</span>
            <button onClick={() => handleIncrement(value)}>+</button>
          </div>
        ) : (
          <button onClick={() => handleCart(value)} className="addToCart">
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default AddToCart;
