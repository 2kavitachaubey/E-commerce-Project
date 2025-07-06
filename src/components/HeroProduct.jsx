import React from 'react'
import "../pages.css";
import "../global.css";
import Link from 'next/link';

const heroProduct = () => {
  return (
    <div className="hero-section product-header">
        <div className="hero-content">
          <p className="white-box content">Essential Supplies</p>
          <h1 className="bg-heading content">
            Get to your goals, <br/>faster.
          </h1>
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
            <button className="eligibility-button">Check Eligibility</button>
          </Link>
        </div>
        <div className="heroImage">
          <img src="/images/heroProduct.png" alt="HeroImage" />
        </div>
      </div>
  )
}

export default heroProduct
