import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { product } from "@/constant";
import Link from "next/link";
import AddToCart from "./AddToCart";
import { useCart } from "@/pages/cartContext";

const Products = () => {
  const { cart, handleCart, handleIncrement, handleDecrement } = useCart();
  const pageSize = 9;
  const totalPages = Math.ceil(product.length / pageSize);
  console.log(totalPages);
  const pageArr = Array(totalPages)
    .fill(0)
    .map((_, i) => i + 1); // length of array 3 fill with 0 add i+1 at index start from 0
  console.log("page length", pageArr);

  const router = useRouter();

  const page = router.query.page;
  // let curretPage = page || 1;

  const [curretPage, setCurrentPage] = useState(page || 1);
  const [result, setResult] = useState(product);
  const [search, setSearch] = useState(product);

  console.log("searchParams", router.query.page, page, curretPage);

  useEffect(() => {
    if (page) {
      setCurrentPage(page);
    }
  }, [page]);

  console.log("my cart", cart);

  const handlePagination = (page) => {
    setCurrentPage(page);
    router.push(`${router.pathname}?page=${page}`, undefined, {
      shallow: true,
    });
  };

  //searching...
  const handleSearch = () => {
    const filter = product.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setResult(filter);
  };

  const getQuantity = (id) => {
    const found = cart.find((item) => item.id == id);
    return found ? found.quantity : 0;
  };
  return (
    <div className="product-section">
      <div className="product-section-heading">
        <h3>
          Get to your goals, <span>faster.</span>
        </h3>
        <div>
          <input
            className="search-product"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => (e.key == "Enter" ? handleSearch() : null)}
          />
        </div>
      </div>
      {result.length === 0 ? (
        <p>No product found...</p>
      ) : (
        <div>
          <div className="product-grid">
            {result
              .filter(
                (_, index) =>
                  index >= curretPage * pageSize - pageSize &&
                  index < curretPage * pageSize
              )
              .map((value, index) => {
                const qty = getQuantity(value.id); //Quantity variable
                return (
                  <div key={index} className="product-card">
                    <div className="product-cart-detail-btn">
                      <Link href={`/products/${value.id}`}>
                        <div className="product-img">
                          <img src={value.img} alt={value.name} />
                          <p>${value.price}</p>
                        </div>
                        <div className="product-description">
                          <h3>{value.name}</h3>
                          <p>{value.description}</p>
                        </div>
                      </Link>
                    </div>

                    {/* add to card button */}
                    <div className="align-btn">
                      <AddToCart
                        qty={qty}
                        value={value}
                        handleCart={handleCart}
                        handleIncrement={handleIncrement}
                        handleDecrement={handleDecrement}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="pagination-btn">
            {pageArr.map((productPage, index) => (
              <button
                className={curretPage == index + 1 ? "changeColor" : ""}
                onClick={() => handlePagination(index + 1)}
              >
                {productPage}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
