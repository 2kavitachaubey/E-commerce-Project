"use client";
import React from "react";
import "../pages.css";
import "../article.css";
import { blogs } from "@/blogs";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ArticleHeader = () => {
  const settings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1, 
    arrows: true, 
  };
  return (
    <div>
      <div className="article-hero-section">
        <p className="white-box content">Blogs</p>
        <h1 className="bg-heading content">Insights & Advice</h1>
      </div>

      <div className="blogs-section">
        <Slider {...settings}>
          {blogs.map((value) => (
            <div key={value.id} className="blog-container">
              <img src={value.img} alt="blog Images" />
              <p>{value.subHeading}</p>
              <h3>{value.heading}</h3>
              <Link href={"/blogDetailPage"}>
                <button> Learn More →</button>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ArticleHeader;
