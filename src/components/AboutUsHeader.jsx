import Link from "next/link";
import React from "react";
import "../pages.css";
import "../aboutUs.css";
import "../global.css";

const AboutUsHeader = () => {
    const images = [
    "./images/maskGroup.png",
    "./images/maskGroup.png",
    "./images/maskGroup.png",
    "./images/maskGroup.png",
  ];
  return (
    <div className="wellbeing-section aboutUs-header">
      <div className="wellbeing-content">
        <p className="white-box content">About Medicinal</p>
        <h1 className="bg-heading content">
          We're Not Your  <br /> Typical Healthcare  <br />
          Team
        </h1>
        <Link href="/Eligibility">
          <button className="yellow-btn">Check Eligibility</button>
        </Link>
        <div className="wb-customer">
          <div className="wb-image">
            {images.map((value, index) => (
              <img
                src={value}
                alt="customer photos"
                className="mask1"
                key={index}
              />
            ))}
          </div>
          <div className="wb-satisfied">
            <h5>1000+</h5>
            <p>Customer Satisfied</p>
          </div>
        </div>
      </div>
      <div className="wellbeing-img">
        <img src="/images/aboutUsHeroImg.png" alt="customer images" />
      </div>
    </div>
  );
};

export default AboutUsHeader;
