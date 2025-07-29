import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-details">
    {/* Hero section */}
      <div className="hero-section">
        <div className="hero-content">
          <p className="white-box content">Plant Based Medicine</p>
          <h1 className="bg-heading content">
            Australia's leading alternative health clinic
          </h1>
          <p className="more-detail content">
            This initial consultation will determine if plant-based medicine
            aligns with your health needs and goals.
          </p>
          <ul className="hero-features content">
            <li className="feature-item">
              <img src="/images/stethoscope-m.svg" alt="stethoscopeImage" />
              <p>In-Depth Online Consultations</p>
            </li>
            <li className="feature-item">
              <img src="/images/test-tube-m.svg" alt="TestTubeImage" />
              <p>Affordable Treatment Options</p>
            </li>
            <li className="feature-item">
              <img src="/images/delivery-truck-m.svg" alt="truckImage" />
              <p>Delivering Australia-Wide</p>
            </li>
          </ul>
          <Link href="/Eligibility">
            <button className="yellow-btn">Check Eligibility</button>
          </Link>
        </div>
        <div className="heroImage">
          <img src="/images/Yello.png" alt="HeroImage" />
        </div>
      </div>
 
    {/* Feature-Details */}
      <div className="feature-detail-row">
        <div className="feature-detail-box">
          <img src="/images/feature1.svg" alt="consultsImage" />
          <p>One-On-One Consults</p>
        </div>
        <div className="feature-detail-box">
          <img src="/images/feature2.png" alt="guidanceImage" />
          <p>Guidance From Professional</p>
        </div>
        <div className="feature-detail-box">
          <img src="/images/feature3.png" alt="supportImage" />
          <p>Ongoing Support</p>
        </div>
        <div className="feature-detail-box">
          <img src="/images/feature4.png" alt="comprehensiveImage" />
          <p>Comprehensive Approach</p>
        </div>
        <div className="feature-detail-box">
          <img src="/images/feature5.png" alt="professionalImage" />
          <p>Professional Health Guidance</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
