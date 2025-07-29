import React from "react";
import Link from "next/link";

const WellbeingSection = () => {
  const images = [
        "./images/maskGroup.png",
        "./images/maskGroup.png",
        "./images/maskGroup.png",
        "./images/maskGroup.png",
    ]
  return (
    <div className="wellbeing-section">
      <div className="wellbeing-content">
        <h1 className="section-heading">
          A modern, safe and effective approach to wellbeing
        </h1>
        <p>
          [short description here] Lorem ipsum dolor sit amet consectetur. Dui
          aliquet vel ipsum sit. Libero velit ut eleifend nisl lorem et id
          posuere.Lorem ipsum dolor sit amet consectetur. Dui
          aliquet vel ipsum sit. Libero velit ut eleifend nisl lorem et id
          posuere.
        </p>
        <Link href="/Eligibility">
          <button className="yellow-btn">Check Eligibility</button>
        </Link>
        <div className="wb-customer">
          <div className="wb-image">
            {images.map((value,index) =>(
                <img src={value} alt="customer photos" className="mask1" key={index}/>
            ))}
          </div>
          <div className="wb-satisfied">
            <h5>1000+</h5>
            <p>Customer Satisfied</p>
          </div>
        </div>
      </div>
      <div className="wellbeing-img">
        <img src="./images/wellbeing.png" alt="customer images" />
      </div>
    </div>
  );
};

export default WellbeingSection;
