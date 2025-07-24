import React from "react";
import Link from "next/link";
import HeroProduct from "@/components/HeroProduct";
import Products from "@/components/Products";

const ProductsPage = () => {
  return (
    <div>
      <HeroProduct />
      <Products/>
    </div>
  );
};

export default ProductsPage;
