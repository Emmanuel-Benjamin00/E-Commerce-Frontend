import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAProduct } from "../features/products/productSlice";

import { addProdToCart } from "../features/user/userSlice";

import { Row, Col } from 'react-bootstrap'

function SingleProduct() {
  const location = useLocation();
  const getProductId = location.pathname.split("/")[2];
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const dispatch = useDispatch();
  const productState = useSelector(
    (state) => state?.product?.singleproduct?.product
  );
  const authState = useSelector((state) => state?.auth);
  const cartState = useSelector((state) => state?.auth?.cartProduct);
  const productListState = useSelector((state) => state?.product?.product);
  const { product } = productListState;
  useEffect(() => {
    dispatch(getAProduct(getProductId));
  }, []);
  useEffect(() => {
    if (cartState?.length > 0) {
      for (let i = 0; i < cartState.length; i++) {
        if (getProductId === cartState[i]?.productId?._id) {
          setAlreadyAdded(true);
        }
      }
    }
  }, []);

  const uploadCart = () => {
    dispatch(
      addProdToCart({
        productId: productState?._id,
        quantity,
        price: productState?.price,
      })
    );
    setTimeout(() => {
      navigate("/cart");
    }, 2000);
  };
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: productState?.images[0]?.url
      ? productState?.images[0]?.url
      : "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };

  return (
    <>
      <Meta title={"Product Name"} />
      <Container>
        <Row className="align-items-center my-5 mx-4 gap-3">
          <Col xs={4} className='d-flex justify-content-center align-items-center'>
            <img
              src={productState?.images[0]?.url && productState.images[0].url}
              alt="product image"
              style={{ width: '80%' }}
            />
          </Col>

          <Col xs={5} className='d-flex flex-column'>
            <div>
              <h4 className='mt-4 fw-bold'>
                {productState?.title}
              </h4>
            </div>
            <hr className="w-100 mt-1" />
            <h6 className="fw-bold">
              Price: $ {productState?.price}
            </h6>
            <p style={{ fontSize: "0.8em" }}>Inclusive of all Taxes</p>
            <hr className="w-100 mt-2" />
            <div>
              <div className="d-flex gap-10 align-items-center my-2">
                <label className="product-heading">Type</label>
                <label className="product-data">Watch</label>
              </div>
              <div className="d-flex gap-10 align-items-center my-2">
                <label className="product-heading">Brand</label>
                <label className="product-data">
                  {productState?.brand?.title}
                </label>
              </div>
              <div className="d-flex gap-10 align-items-center my-2">
                <label className="product-heading">Categories</label>
                <label className="product-data">
                  {productState?.category?.title}
                </label>
              </div>
              <div className="d-flex gap-10 align-items-center my-2">
                <label className="product-heading">Tags</label>
                <label className="product-data">{productState?.tags}</label>
              </div>
              <div className="d-flex gap-10 align-items-center my-2">
                <label className="product-heading">Avaiablity</label>
                <label className="product-data">In Stock</label>
              </div>
            </div>
          </Col>

          <Col className='border p-3 py-4' style={{ height: '100%' }}>
            <h4 className="fw-bold pt-2">Price: $ {productState?.price}</h4>
            <h6 className="pb-4">Free Delivery</h6>
            {
              alreadyAdded === false && (
                <div className='d-flex align-items-center gap-3 pb-4'>
                  <label className="product-heading">Quantity:</label>
                  <div>
                    <input
                      type="number"
                      id=""
                      name=""
                      min={1}
                      max={10}
                      style={{ width: "70px" }}
                      className="form-control"
                      onChange={(e) => setQuantity(e.target.value)}
                      value={quantity}
                    />
                  </div>
                </div>
              )
            }
            <div>
              <button
                className="button  prime-btn border-0 mb-4"
                type="button"
                onClick={() => {
                  alreadyAdded ? navigate("/cart") : uploadCart(productState?._id, quantity, productState?.price);
                }}
              >
                {alreadyAdded ? "Go To Cart" : "Add to Cart"}
              </button>
            </div>
          </Col>
        </Row>
      </Container>


      <Container class1="description-wrapper home-wrapper-2 px-5">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p>{productState?.description}</p>
            </div>
          </div>
        </div>
      </Container>


      {/* <Container className="main-product-wrapper home-wrapper-2 p-5">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <img
                  src={
                    productState?.images[0]?.url && productState.images[0].url
                  }
                  alt=" product image"
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">{productState?.title}</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$ {productState?.price}</p>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <label className="product-heading">Type</label>
                  <label className="product-data">Watch</label>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <label className="product-heading">Brand</label>
                  <label className="product-data">
                    {productState?.brand?.title}
                  </label>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <label className="product-heading">Categories</label>
                  <label className="product-data">
                    {productState?.category?.title}
                  </label>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <label className="product-heading">Tags</label>
                  <label className="product-data">{productState?.tags}</label>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <label className="product-heading">Avaiablity</label>
                  <label className="product-data">In Stock</label>
                </div>
                <div className="d-flex gap-15 align-items-center flex-row mb-3 mt-2">
                  {alreadyAdded === false && (
                    <>
                      <label className="product-heading">Quantity:</label>
                      <div className="">
                        <input
                          type="number"
                          id=""
                          name=""
                          min={1}
                          max={10}
                          style={{ width: "70px" }}
                          className="form-control"
                          onChange={(e) => setQuantity(e.target.value)}
                          value={quantity}
                        />
                      </div>
                    </>
                  )}

                  <div
                    className={
                      alreadyAdded
                        ? "ms-0"
                        : "ms-5" + "d-flex align-items-center gap-30 ms-5"
                    }
                  >
                    <button
                      className="button  prime-btn border-0"
                      type="button"
                      onClick={() => {
                        alreadyAdded
                          ? navigate("/cart")
                          : uploadCart(
                            productState?._id,
                            quantity,
                            productState?.price
                          );
                      }}
                    >
                      {alreadyAdded ? "Go To Cart" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container> */}

      {/* Review */}
      {/* <Container class1="review-wrapper home-wrapper-2 px-5 ">
        <div className="row">
          <div className="col-12">
            <h3>Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={productState?.totalrating}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0"> Based on 2 Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container> */}

      {/* Popular Products */}
      {/* <Container class1="popular-wrapper home-wrapper-2 px-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          {product &&
            product?.map((item, index) => {
              if (item?.tags === "popular") {
                return (
                  <div key={index} className="col-3 mb-5">
                    <div className="product-card card position-relative">
                      <div className="wishlist-icon position-absolute">
                        <button
                          className="border-0 bg-transparent"
                          onClick={(e) => {
                            addToWish(item?._id);
                          }}
                        >
                          <AiOutlineHeart />
                        </button>
                      </div>
                      <div className="product-image">
                        <img
                          src={item?.images?.[0]?.url}
                          className="img-fluid d-block mx-auto "
                          alt="product-img"
                        />
                      </div>
                      <Link
                        to={`/product/${item._id}`}
                        className="product-details"
                      >
                        <h6 className="brand">{item?.brand?.title}</h6>
                        <h5 className="product-title">{item?.title}</h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={item?.totalrating?.toString()}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="Price">$ {item?.price}</p>
                      </Link>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Container> */}
    </>
  );
}

export default SingleProduct;
