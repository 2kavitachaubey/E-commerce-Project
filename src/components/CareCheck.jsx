import React from "react";
import Link from "next/link";
import "../pages.css";

const CareCheck = () => {
  const careData = [
    {
      img: "./images/care1.png",
      title: "Chronic Pain & Discomfort",
      description:
        "[short description here] blorem blipsum dolor sit bamat minim mollit non deserunt ullamco lorem ipsum bolor sit amat est.",
    },
    {
      img: "./images/care2.png",
      title: "Mental Wellbeing Support",
      description:
        "[short description here] blorem blipsum dolor sit bamat minim mollit non deserunt ullamco lorem ipsum bolor sit amat est.",
    },
    {
      img: "./images/care3.png",
      title: "Sleep & Relaxation",
      description:
        "[short description here] blorem blipsum dolor sit bamat minim mollit non deserunt ullamco lorem ipsum bolor sit amat est.",
    },
  ];
  return (
    <div className="steps-details">
      <h1 className="section-heading">Is Our Care Right for You?</h1>
      <div className="three-steps">
        {careData.map((step, index) => (
          <div className="single-step" key={index}>
            <div className="img-wrapper">
              <img src={step.img} alt={step.title} />
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
      <div className="step-clearity">
        <p>NOT SURE BUT NEED RELIEF NOW?</p>
        <Link href="/Eligibility">
          <button className="eligibility-button">Check Eligibility</button>
        </Link>
      </div>
    </div>
  );
};

export default CareCheck;
