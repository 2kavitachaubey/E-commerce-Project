import React from "react";
import Link from "next/link";
import "../pages.css";
import { useCart } from "@/pages/cartContext";

const Navbar = () => {
  // console.log('props navbar', props.cart)
  const {cart} = useCart();
  const cartLength = cart.reduce((acc,item)=>acc+item.quantity,0);
  return (
    <nav>
      <Link href="/">
        <img src="/images/logo.png" alt="logo of the website" />
      </Link>
      <ul className="nav-links">
        <li className="link-item">
          <Link href="/howItWorks">How It Works</Link>
        </li>
        <li className="link-item">
          <Link href="/AboutUs">About Us</Link>
        </li>
        <li className="link-item">
          <Link href="/Articles">Articles</Link>
        </li>
        <li className="link-item">
          <Link href="/Faqs">Faq's</Link>
        </li>
        <li className="link-item">
          <Link href="/products">Product</Link>
        </li>
      </ul>
      <div className="nav-btn">
        <Link href="/cartPage">
        <div>
          <button className="addToCart-btn">
            <img src="./images/wrap.svg" alt="addToCart" />
            <span className={cartLength>0? "itemNumber" : ""}>{cartLength > 0? cartLength: ""}</span>
          </button>
        </div>

        </Link>
        <Link href="/Eligibility">
          <button className="eligibility-button">Check Eligibility</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
