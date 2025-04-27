import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {colors} from '../theme.js'

function ProductCard(props) {
  let location = useLocation();
  const { grid, data } = props;
  const searchVal = useSelector((state) => state.product.search);
  let [productData, setProductData] = useState(data);

  useEffect(() => {
    if (searchVal) {
      const filtered = data?.filter((item) =>
        item?.title?.toLowerCase().includes(searchVal.toLowerCase())
      );
      setProductData(filtered);
    } else {
      setProductData(data);
    }
  }, [searchVal, data]);

  return (
    <div className="row g-3 mt-5">
      {productData?.map((item, index) => {
        if (item?.tags !== "upcoming") {
          return (
            <div
              key={index}
              className={`col-6 col-lg-3 mb-5`} 
            >
              <div className="product-card card position-relative" 
                  style={{
                    backgroundColor:colors.body, 
                    border: "none",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",  // Add shadow for elevation
                    transition: "all 0.3s ease",  // Smooth transition on hover
                    }}>
                <Link
                  to={`${
                    location.pathname === "/"
                      ? `/product/${item._id}`
                      : location.pathname === `/product/${item._id}`
                      ? `/product/${item._id}`
                      : `${item._id}`
                  }`}
                  className="product-details"
                >
                  <div className="product-image d-flex align-items-center">
                    <img
                      src={item?.images?.[0]?.url}
                      className="img-fluid d-block mx-auto featured-img"
                      alt="product-img"
                      style={{ maxHeight: "100%", maxWidth: "100%" }}
                    />
                  </div>

                  <h6 className="brand">{item?.brand?.title}</h6>
                  <h5 className="product-title">{item?.title}</h5>
                  {/* Hide description in Featured style */}
                  {grid === 12 && (
                    <p className="description d-block">{item?.description}</p>
                  )}
                  <p className="Price fw-bold text-dark">$ {item?.price}</p>
                </Link>
              </div>
            </div>
          );
        }
      })}
      </div>
  );
}

export default ProductCard;
