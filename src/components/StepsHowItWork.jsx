import React from "react";
import Link from "next/link";
import "../pages.css";
import "../global.css";

const StepsHowItWork = () => {
  const steps = [
    {
      img: "/images/step1.jpg",
      title: "30 second  Pre-screening quiz",
      description:
        "[short description here] Lorem ipsum dolor sit amet consectetur. Maecenas praesent aliquam eget dictumst nulla turpis dolor aliquam molestie. Imperdiet aenean enim vitae morbi diam non dignissim fermentum. Id cursus netus sit lectus sit tellus urna. Quis id ut nibh volutpat at.",
    },
    {
      img: "/images/step2.jpg",
      title: "Affordable delivery,  Australia-wide",
      description:
        "[short description here] Lorem ipsum dolor sit amet consectetur. Maecenas praesent aliquam eget dictumst nulla turpis dolor aliquam molestie. Imperdiet aenean enim vitae morbi diam non dignissim fermentum. Id cursus netus sit lectus sit tellus urna. Quis id ut nibh volutpat at.",
    },
    {
      img: "/images/step3.jpg",
      title: "Telehealth Consultation",
      description:
        "[short description here] Lorem ipsum dolor sit amet consectetur. Maecenas praesent aliquam eget dictumst nulla turpis dolor aliquam molestie. Imperdiet aenean enim vitae morbi diam non dignissim fermentum. Id cursus netus sit lectus sit tellus urna. Quis id ut nibh volutpat at.",
    },
    {
      img: "/images/step4.png",
      title: "Follow-up Care",
      description:
        "[short description here] Lorem ipsum dolor sit amet consectetur. Maecenas praesent aliquam eget dictumst nulla turpis dolor aliquam molestie. Imperdiet aenean enim vitae morbi diam non dignissim fermentum. Id cursus netus sit lectus sit tellus urna. Quis id ut nibh volutpat at.",
    },
  ];
  return (
    <div className="steps-howitworks">
      {steps.map((value, index) => (
        <div className={`steps-wrapper ${index % 2 !== 0 ? "" : "pink-color" }`} key={index}>
          <div className="step-icon">
            <img src={value.img} alt={value.title} />
          </div>
          <div className="step-box">
            <span>{index + 1}</span>
            <h1 className="step-heading">{value.title}</h1>
            <p>{value.description}</p>
            <Link href="/Eligibility">
              <button className="yellow-btn">Check Eligibility</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepsHowItWork;
