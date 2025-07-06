import React from "react";
import Link from "next/link";

const Footer = () => {
  const socialLogo = [
    {
      link: "https://www.instagram.com/",
      logo: "/images/instaLogo.png",
      title: "Instagram Logo",
    },
    {
      link: "https://www.twitter.com/",
      logo: "/images/xLogo.png",
      title: "x Logo",
    },
    {
      link: "https://www.facebook.com/",
      logo: "/images/facebookLogo.png",
      title: "facebook Logo",
    },
    {
      link: "https://www.linkedin.com/",
      logo: "/images/linkedInLogo.png",
      title: "linkedIn Logo",
    },
  ];
  const pagesLink = [
    {
      title: "Links",
      items: [
        {
          type: "link",
          link: "/AboutUs",
          linkTitle: "About Us",
        },
        {
          type: "link",
          link: "/howItWorks",
          linkTitle: "How It Works",
        },
        {
          type: "link",
          link: "/PreScreening",
          linkTitle: "Pre-Screening",
        },
      ],
    },
    {
      title: "Useful Links",
      items: [
        {
          type: "link",
          link: "/Articles",
          linkTitle: "Articles",
        },
        {
          type: "link",
          link: "/Faqs",
          linkTitle: "FAQs",
        },
        {
          type: "link",
          link: "/guidelines",
          linkTitle: "TGA Guidelines",
        },
      ],
    },
    {
      title: "Contact",
      items: [
        {
          type: "text",
          link: "tel:+61406771093",
          logo: "/images/call.svg",
          contact: "+61406771093",
        },
        {
          type: "text",
          link: "https://mail.google.com/mail/?view=cm&to=chaubeykavita750@gmail.com",
          logo: "/images/email.svg",
          contact: "chaubeykavita750@gmail.com",
        },
      ],
    },
  ];
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-social-link">
          <Link href="/"><img src="/images/footerLogo.svg" alt="logo" /></Link>
          <div className="social-icon">
            {socialLogo.map((value, index) => (
              <a href={value.link} key={index} >
                <img src={value.logo} alt={value.title} />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-page-link">
          {pagesLink.map((section, index) => (
            <div className="footer-section" key={index}>
              <h2>{section.title}</h2>
              <ul>
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    {item.type === "link" ? (
                      <Link href={item.link}>{item.linkTitle}</Link>
                    ) : (
                      <div>
                        <a href={item.link}>
                          <img src={item.logo} alt="contact" />
                          <p>{item.contact}</p>
                        </a>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-description">
        <p>
          Disclaimer: Medicinal Lorem ipsum dolor sit amet consectetur. Enim
          massa facilisis vitae cursus ante arcu. Sapien posuere aliquam risus
          sodales lorem senectus iaculis posuere mi. Integer egestas fames nulla
          id metus ut quis. Blandit vitae libero venenatis sed. Cursus commodo
          purus sed odio magna. Consequat ac a facilisi aenean nisi pretium
          metus odio bibendum.
        </p>
        <div className="footer-policy">
          <p>Copyright © 2024 Medicinal. All rights reserved.</p>
          <p>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
