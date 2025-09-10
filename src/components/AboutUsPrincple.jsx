import React from "react";
import Link from "next/link";
import "../pages.css";
import "../aboutUs.css";

const AboutUsPrincple = () => {
  const principles = [
    {
      img: "/images/aboutUs1.png",
      title: "Empowerment",
      description:
        "[short description here] blorem blipsum dolor sit bamat minim mollit non deserunt ullamco lorem ipsum bolor sit amat est.",
    },
    {
      img: "/images/aboutUs2.png",
      title: "Repect",
      description:
        "[short description here] blorem blipsum dolor sit bamat minim mollit non deserunt ullamco lorem ipsum bolor sit amat est.",
    },
    {
      img: "/images/aboutUs3.png",
      title: "Collaboration",
      description:
        "[short description here] blorem blipsum dolor sit bamat minim mollit non deserunt ullamco lorem ipsum bolor sit amat est.",
    },
  ];
  return (
    <div className="aboutUs-principle">
      <h1>The principles that guide us</h1>
      <div className="aboutUs-principle-content">
        {principles.map((value, index) => (
          <div key={index} className="principle-details">
            <img src={value.img} alt={value.description} />
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
      <Link href="/Eligibility">
        <button className="yellow-btn">Check Eligibility</button>
      </Link>
    </div>
  );
};

export default AboutUsPrincple;
