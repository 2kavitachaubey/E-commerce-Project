import Link from "next/link";
import React from "react";
import "../pages.css";
import "../global.css";

const HeroHowItWork = () => {
  const images = [
    "./images/maskGroup.png",
    "./images/maskGroup.png",
    "./images/maskGroup.png",
    "./images/maskGroup.png",
  ];
  return (
    <div className="wellbeing-section header-howitworks">
      <div className="wellbeing-content">
        <p className="white-box content">Healthcare Without Barriers</p>
        <h1 className="bg-heading content">
          Professional <br /> Telehealth Care in <br />
          Four Simple Steps
        </h1>
        <Link href="/Eligibility">
          <button className="eligibility-button">Check Eligibility</button>
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
        <img src="./images/heroHowItWork.png" alt="customer images" />
      </div>
    </div>
  );
};

export default HeroHowItWork;
