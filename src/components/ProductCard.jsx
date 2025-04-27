import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {colors} from '../theme.js'

function ProductCard(props) {
  const location = useLocation();
  const { grid, data } = props;
  const searchVal = useSelector((state) => state.product.search);
  const [productData, setProductData] = useState(data);

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
    <div className="product-card-container">
      {productData?.length === 0 ? (
        <div style={{ textAlign: "center", width: "100%", marginTop: "50px" }}>
          <h4>No Products to Show</h4>
        </div>
      ) : (
        productData?.map((item, index) => {
          if (item?.tags !== "upcoming") {
            return (
              <div key={index} className="product-card-wrapper" style={{ minWidth: '30vh' }}>
                <div className="product-card" style={{ backgroundColor: colors.body, display: "flex", justifyContent: "center", alignItems: "center" }}>
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
                    <div className="product-image mb-3">
                      <img
                        src={item?.images?.[0]?.url}
                        className="img-fluid"
                        alt="product-img"
                        style={{ height: "100%" }}
                      />
                    </div>
  
                    <h6 className="brand">{item?.brand?.title}</h6>
                    <h5 className="product-title">{item?.title}</h5>
                    {/* {grid === 12 && (
                      <p className="description">{item?.description}</p>
                    )} */}
                    <p className="Price">₹{item?.price}</p>
                  </Link>
                </div>
              </div>
            );
          }
        })
      )}
    </div>
  );
  
}

export default ProductCard;
