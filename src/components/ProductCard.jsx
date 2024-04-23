import React from "react";
import { Link, useLocation } from "react-router-dom";

function ProductCard(props) {
  let location = useLocation();

  const { grid, data } = props;
  console.log("data:", data);
  return (
    <>
      {data?.map((item, index) => {
        if (item?.tags !== "upcoming") {
          return (
            <div
              key={index}
              className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"
                }`}
            >
              <Link
                to={`${location.pathname == "/"
                  ? `/product/${item._id}`
                  : location.pathname == `/product/${item._id}`
                    ? `/product/${item._id}`
                    : `${item._id}`
                  }`}
                className="product-details"
              >
                <div className="product-card card position-relative mb-3">

                  <div className="product-image">
                    <img
                      src={item?.images?.[0]?.url}
                      className="img-fluid d-block mx-auto p-3"
                      alt="product-img"
                      style={{ maxHeight: "100%", maxWidth: "100%" }}
                    />
                  </div>

                  <h6 className="brand">{item?.brand?.title}</h6>
                  <h5 className="product-title">{item?.title}</h5>
                  <p
                    className={`description ${grid === 12 ? "d-block" : "d-none"
                      }`}
                  >
                    {item?.description}
                  </p>
                  <p className="Price fw-bold text-dark">$ {item?.price}</p>

                </div>
              </Link>
            </div>
          );
        }
      })}
    </>
  );
}

export default ProductCard;
