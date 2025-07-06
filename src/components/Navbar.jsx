import React from "react";
import  Link  from "next/link";
import "../pages.css";

const Navbar = () => {
  // console.log('props navbar', props.cart)
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
      <Link href="/Eligibility"><button className="eligibility-button">Check Eligibility</button></Link>
    </nav>
  );
};

export default Navbar;
