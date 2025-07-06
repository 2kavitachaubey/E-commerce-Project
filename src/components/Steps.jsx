import React from "react";
import Link from "next/link";
import "../pages.css";
const Steps = () => {
  const stepData = [
    {
      img: "./images/step1.jpg",
      title: "Online assessment",
      description:
        "[short description here] blorem blipsum dolor sit bamat minim mollit non deserunt ullamco lorem ipsum bolor sit amat est.",
    },
    {
      img: "./images/step2.jpg",
      title: "Discreet, fast shipping",
      description:
        "[short description here] blorem blipsum dolor sit bamat minim mollit non deserunt ullamco lorem ipsum bolor sit amat est.",
    },
    {
      img: "./images/step3.jpg",
      title: "Follow Ups",
      description:
        "[short description here] blorem blipsum dolor sit bamat minim mollit non deserunt ullamco lorem ipsum bolor sit amat est.",
    },
  ];
  return (
    <div className="steps-details">
      <h1 className="section-heading">
        Your treatment journey in Three simple steps
      </h1>
      <div className="three-steps">
        {stepData.map((step, index) => (
          <div className="single-step" key={index}>
            <div className="img-wrapper">
              <span className="img-index">{index + 1}</span>
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

export default Steps;
