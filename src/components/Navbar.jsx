import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import "../pages.css";
import { useCart } from "@/lib/cartContext";
import { useInfo } from "@/lib/formContext";

const Navbar = () => {
  // console.log('props navbar', props.cart)
  const { registerDetail, isAuthenticated } = useInfo();
  console.log(registerDetail.firstname);
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [viewbutton, setviewButton] = useState(false);

  const cartLength = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <nav>
      <Link href="/" className="main-logo">
        <img src="/images/logo.png" alt="logo of the website" />
      </Link>
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li className="link-item">
          <Link href="/howItWorks">How It Works</Link>
        </li>
        <li className="link-item">
          <Link href="/aboutUs">About Us</Link>
        </li>
        <li className="link-item">
          <Link href="/articles">Articles</Link>
        </li>
        <li className="link-item">
          <Link href="/Faqs">Faq's</Link>
        </li>
        <li className="link-item">
          <Link href="/products">Product</Link>
        </li>
        <li className="link-item show-button">
          <Link href="/cartPage">Cart</Link>
        </li>
        <li>
          <Link href="/Eligibility" className="link-item show-button">
            Check Eligibility
          </Link>
        </li>
        <li>
          {isAuthenticated ? (
            <Link href="/loggedInPage" className="link-item show-button">
              {console.log(registerDetail.firstname)}
              Hello, {registerDetail.firstname}
            </Link>
          ) : (
            <Link href="/logInPage" className="link-item show-button">
              Log In
            </Link>
          )}
        </li>
      </ul>

      <div className="nav-btn">
        <Link href="/cartPage">
          <div>
            <button className="addToCart-btn">
              <img src="./images/wrap.svg" alt="addToCart" />
              <span className={cartLength > 0 ? "itemNumber" : ""}>
                {cartLength > 0 ? cartLength : ""}
              </span>
            </button>
          </div>
        </Link>
        <Link href="/Eligibility">
          <button className="yellow-btn">Check Eligibility</button>
        </Link>
        <div>
          {isAuthenticated ? (
            <Link href="/loggedInPage">
              <button className="yellow-btn">
                {console.log(registerDetail.firstname)}
                Hello, {registerDetail.firstname}
              </button>
            </Link>
          ) : (
            <Link href="/logInPage">
              <button className="yellow-btn">Log In</button>
            </Link>
          )}
        </div>
      </div>

      <div
        className="hamburger"
        onClick={() => {
          setMenuOpen(!menuOpen);
          setviewButton(!viewbutton);
        }}
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
    </nav>
  );
};

export default Navbar;
