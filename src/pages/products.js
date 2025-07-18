import React from "react";
import Link from "next/link";
import HeroProduct from "@/components/HeroProduct";
import Products from "@/components/Products";

const ProductsPage = ({cart, handleCart, handleIncrement, handleDecrement }) => {
  return (
    <div>
      <HeroProduct />
      <Products
        cart={cart}
        handleCart={handleCart}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
};

export default ProductsPage;
