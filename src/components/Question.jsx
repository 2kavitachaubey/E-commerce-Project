import React from "react";
import { useState } from "react";
import "../pages.css";
import Link from "next/link";

const question = () => {
  const [direction, setDirection] = useState(null);
  const handleArrawClick = (index) => {
    setDirection(direction === index ? null : index);
    // setCart((cart) => cart + 1);
  };
  const ask = [
    {
      question: "How can I get started with plant-based medicine?",
      ans: "[short description here] Lorem ipsum dolor sit amet consectetur. Dui aliquet vel ipsum sit. Libero velit ut eleifend nisl lorem et id posuere.Lorem ipsum dolor sit amet consectetur. Dui aliquet vel ipsum sit. Libero velit ut eleifend nisl lorem et id posuere.",
    },
    {
      question: "Can I use plant-based medicine alongside treatments?",
      ans: "[short description here] Lorem ipsum dolor sit amet consectetur. Dui aliquet vel ipsum sit. Libero velit ut eleifend nisl lorem et id posuere.Lorem ipsum dolor sit amet consectetur. Dui aliquet vel ipsum sit. Libero velit ut eleifend nisl lorem et id posuere.",
    },
    {
      question: "What conditions can your plant-based medicine help with?",
      ans: "[short description here] Lorem ipsum dolor sit amet consectetur. Dui aliquet vel ipsum sit. Libero velit ut eleifend nisl lorem et id posuere.Lorem ipsum dolor sit amet consectetur. Dui aliquet vel ipsum sit. Libero velit ut eleifend nisl lorem et id posuere.",
    },
    {
      question: "Do I need a referral?",
      ans: "[short description here] Lorem ipsum dolor sit amet consectetur. Dui aliquet vel ipsum sit. Libero velit ut eleifend nisl lorem et id posuere.Lorem ipsum dolor sit amet consectetur. Dui aliquet vel ipsum sit. Libero velit ut eleifend nisl lorem et id posuere.",
    },
    {
      question: "Can I claim my consultation through Medicare?",
      ans: "[short description here] Lorem ipsum dolor sit amet consectetur. Dui aliquet vel ipsum sit. Libero velit ut eleifend nisl lorem et id posuere.Lorem ipsum dolor sit amet consectetur. Dui aliquet vel ipsum sit. Libero velit ut eleifend nisl lorem et id posuere.",
    },
  ];

  return (
    <div className="query-container">
      <h1 className="section-heading">Frequently Asked Questions</h1>
      <div className="query-items">
        {ask.map((value, index) => (
          <div className="query-item" key={index}>
            <div className="query-question-row">
              <h3>{value.question}</h3>
              <button className="arrow" onClick={() => handleArrawClick(index)}>
                {direction === index ? "▲" : "▼"}
              </button>
            </div>
            <div
              className={`query-ans-wrapper ${
                direction === index ? "show" : ""
              }`}
            >
              <p className="query-ans">{value.ans}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="query-footer">
        <p>Got More Question?</p>
        <Link href="/Faqs">Browse FAQs Page →</Link>
      </div>
    </div>
  );
};

export default question;
