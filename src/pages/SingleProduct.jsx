import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAProduct } from "../features/products/productSlice";
import '../extras/extracss/Singleproduct.css';
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
        <Row className="align-items-center my-2 mx-4 gap-3">
          <Col xs={12} lg={4} className='d-flex justify-content-center align-items-center'>
            <img
              src={productState?.images[0]?.url && productState.images[0].url}
              alt="product image"
              className="siImg"
            />
          </Col>

          <Col xs={12} lg={4} className='d-flex flex-column'>
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
            <hr className="w-100 mt-1" />
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
              {/* <div className="d-flex gap-10 align-items-center my-2">
                <label className="product-heading">Tags</label>
                <label className="product-data">{productState?.tags}</label>
              </div> */}
              <div className="d-flex gap-10 align-items-center my-2">
                <label className="product-heading">Avaiablity</label>
                <label className="product-data">In Stock</label>
              </div>
            </div>
            <hr />
            <div className="row description">
              <div>
                <h6 className="fw-bold pt-2">Description</h6>
                <div className="bg-white">
                  <p className="text-justify">{productState?.description}</p>
                </div>
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
                className="button btn btn-warning border-0 mb-4"
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


      <Container className=" home-wrapper-2 px-5">
        <div className="row description-wrapper px-5">
          <div>
            <h6 className="fw-bold">Description</h6>
            <div className="bg-white">
              <p className="text-justify">{productState?.description}</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SingleProduct;
