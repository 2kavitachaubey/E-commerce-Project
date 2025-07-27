import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { product } from "@/constant";
import AddToCart from "@/components/AddToCart";
import { useCart } from "../../lib/cartContext";
import "../../global.css";

const Product = () => {
  const { cart, handleCart, handleIncrement, handleDecrement } = useCart();

  console.log(product);
  const router = useRouter();

  console.log("router.query", router.query);
  const { slug } = router.query;

  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(null);

  useEffect(() => {
    if (slug) {
      setSingleProduct(product.find((item) => item.id === Number(slug)));
      setIsLoading(false);
    }
  }, [slug]);

  const getQuantity = (id) => {
    const found = cart.find((item) => item.id == id);
    return found ? found.quantity : 0;
  };
  const qty = getQuantity(singleProduct.id);

  const productQuality = [
    {
      ques: "Fast, Reliable Delivery",
      ans: "Count on us for quick delivery of your first aid supplies, so you’re always prepared. We also offer convenient restocking of kits and supplies after your training course.",
    },
    {
      ques: "Great Pricing & Discounts",
      ans: "Count on us for quick delivery of your first aid supplies, so you’re always prepared. We also offer convenient restocking of kits and supplies after your training course.",
    },
  ];

  const handleShow = (index) => {
    setShow(index === show ? null : index);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="detail-page-container">
        <div className="detail-page-img">
          <img src={singleProduct.img} alt={singleProduct.name} />
        </div>
        <div className="detail-page-content">
          <h1>{singleProduct.name}</h1>
          <p>{singleProduct.description}</p>
          <p>{singleProduct.usage}</p>
          <div className="detail-page-subheading">
            <h2>{singleProduct.risk.title}</h2>
            <ul>
              <li>{singleProduct.risk.description}</li>
            </ul>
          </div>
          <div className="detail-page-subheading">
            <h2>{singleProduct.wrap.title}</h2>
            <ul>
              <li>{singleProduct.wrap.description}</li>
            </ul>
          </div>
          <h2 className="detail-page-price">${singleProduct.price}</h2>
          <AddToCart
            qty={qty}
            value={singleProduct}
            handleCart={handleCart}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
          <div>
            {productQuality.map((value, index) => (
              <div key={index} className="detail-page-feature">
                <div className="dtPg-feature-heading">
                  <h2>{value.ques}</h2>
                  <img
                    src="/images/arrow-down.png"
                    alt="arrow-down.png"
                    onClick={() => handleShow(index)}
                  />
                </div>
                <div
                  className={`dtPg-feature-body ${
                    show === index ? "showFeature" : ""
                  }`}
                >
                  <p>{value.ans}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

// iphone-11-pro-max
