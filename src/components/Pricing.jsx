import React from "react";
import "../pages.css";
import Link from "next/link";
import { useState } from "react";

const Pricing = () => {
  const [isActive, setIsActive] = useState(null);
  const pricingPlans = [
    {
      title: "Initial Consultation",
      discription:
        "short description here] Lorem ipsum dolor sit amet consectetur. Dui aliquet vel ipsum sit. Libero velit ut.",
      features: [
        "30-minute thorough health assessment",
        "Discuss your symptoms with a professional",
        "Explore all available treatment options",
        "No upfront payment needed",
      ],
      label: "Complimentary",
      actualPrice: "$150",
    },
    {
      title: "Doctor consultation",
      discription:
        "short description here] Lorem ipsum dolor sit amet consectetur. Dui aliquet vel ipsum sit. Libero velit ut.",
      features: [
        "30-minute thorough health assessment",
        "Discuss your symptoms with a professional",
        "Explore all available treatment options",
        "No upfront payment needed",
      ],
      label: "Standard Plan",
      actualPrice: "$59",
    },
    {
      title: "Ongoing patient support",
      discription:
        "short description here] Lorem ipsum dolor sit amet consectetur. Dui aliquet vel ipsum sit. Libero velit ut.",
      features: [
        "30-minute thorough health assessment",
        "Discuss your symptoms with a professional",
        "Explore all available treatment options",
        "No upfront payment needed",
      ],
      label: "Complimentary",
      actualPrice: "$150",
    },
  ];
  return (
    <div className="pricingDetails">
        <h1 className="section-heading">Simple, Transparent Pricing</h1>
      <div className="section-para">
        <p>
          Professional healthcare shouldn't be complicated. Our pricing is clear
          and upfront, with no hidden fees. Choose the consultation that's right
          for your journey.
        </p>
      </div>
      {pricingPlans.map((price, index) => (
        <div
          className={isActive === index ? "box-active" : "box-notActive"}
          onClick={() => setIsActive(index)}
          key={index}>
          <div className="price-title">
            <h3>{price.title}</h3>
            <p>{price.discription}</p>
          </div>
          <ul className="price-feature">
            {price.features.map((feature, index) => (
              <li className="single-feature" key={index}>
                {feature}
              </li>
            ))}
          </ul>
          <div className="price-label">
            <h5>{price.label}</h5>
            <h1>{price.actualPrice}</h1>
          </div>
        </div>
      ))}
      <Link href="/Eligibility">
        <button className="eligibility-button">Check Eligibility</button>
      </Link>
    </div>
  );
};

export default Pricing;
