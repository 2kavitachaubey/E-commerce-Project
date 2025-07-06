import React from "react";
import { useState } from "react";

const Products = () => {
  const product = [
    {
      img: "/images/product1.png",
      price: "$3.19",
      name: "AEROSWAB Double Ended Applicators /100",
      description:
        "The AEROSWAB is a high-quality cotton swab and is ideal for cleansing wounds when used in conjunction with an antiseptic or saline solution.",
    },
    {
      img: "/images/product2.png",
      price: "$4.25",
      name: "AEROFORM Snake Bite Bandage With Indicator",
      description:
        "The AeroForm Premium Snake Bite Bandage with Continuous Indicators is a Premium Heavyweight Conforming Bandage.",
    },
    {
      img: "/images/product3.png",
      price: "$3.19",
      name: "AEROSWAB Double Ended Applicators /100",
      description:
        "The AEROSWAB is a high-quality cotton swab and is ideal for cleansing wounds when used in conjunction with an antiseptic or saline solution.",
    },
    {
      img: "/images/product3.png",
      price: "$3.19",
      name: "AEROPAD Non-Adherent Dressing's",
      description:
        "The AeroPadTM Non-Adherent Dressing is a high-quality wound pad dressing that’s recommended for the treatment of injuries such as cuts, grazes and minor burns.",
    },
    {
      img: "/images/product1.png",
      price: "$3.19",
      name: "AEROFORM Snake Bite Bandage With Indicator",
      description:
        "The AeroForm Premium Snake Bite Bandage with Continuous Indicators is a Premium Heavyweight Conforming Bandage.",
    },
    {
      img: "/images/product2.png",
      price: "$4.45",
      name: "AEROPAD Non-Adherent Dressing's",
      description:
        "The AeroPadTM Non-Adherent Dressing is a high-quality wound pad dressing that’s recommended for the treatment of injuries such as cuts, grazes and minor burns.",
    },
  ];

  const [result, setResult] = useState(product);
  const [search, setSearch] = useState(product);

  const handleSearch = () => {
    const filter = product.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setResult(filter);
  };
  return (
    <div className="product-section">
      <div className="product-section-heading">
        <h3>
          Get to your goals, <span>faster.</span>
        </h3>
        <input
          className="search-product"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => (e.key == "Enter" ? handleSearch() : null)}
        />
      </div>
      {result.length === 0 ? (
        <p>No product found...</p>
      ) : (
        <div className="product-grid">
          {result.map((value, index) => (
            <div key={index} className="product-card">
              <div className="product-img">
                <img src={value.img} alt={value.name} />
                <p>{value.price}</p>
              </div>
              <div className="product-description">
                <h3>{value.name}</h3>
                <p>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
