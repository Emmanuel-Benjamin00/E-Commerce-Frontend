import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  getAllProducts } from "../features/products/productSlice";
import Carousel from 'react-bootstrap/Carousel';
import '../extras/extracss/Home.css';
import { Container, Button} from 'react-bootstrap';
import {colors} from '../theme.js'


function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    getallProducts();
  }, []);
  const productState = useSelector((state) => state?.product?.product);
  const { product } = productState;
  const authState = useSelector((state) => state.auth);
  const getallProducts = () => {
    dispatch(getAllProducts());
  };


  useEffect(() => {
    console.log("authState:", authState);
    authState?.user === null && navigate("/login");
  }, [authState]);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return  (
    <div style={{backgroundColor:colors.body}}>
      <div className='mx-auto carousal'>
        <Carousel activeIndex={index} onSelect={handleSelect} className='carousal-comp'>
          {product && product.map((item, index) => {
            if (item?.tags === "upcoming") {
              return (
                <Carousel.Item key={index} className='carousal-item'>
                  <img
                    className="d-block"
                    src={item?.images?.[0]?.url}
                    alt={`Slide ${index + 1}`}
                  />
                  <Carousel.Caption>
                    <h3>{item.caption}</h3>
                    <p>{item.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            }
          })}
        </Carousel>
      </div>

      <Container className="featured-wrapper pt-5 px-4 home-wrapper-2">
        <div className="row pb-5" style={{minHeight:'50vh'}}>
          <div className="col-12">
            <h3 className="section-heading fw-bold">Featured Collection</h3>
          </div>
          {product &&
            product?.map((item, index) => {
              if (item?.tags === "feature") {
                return (
                  <div key={index} className="col-12 col-lg-3 mb-5">
                    <div className="product-card card position-relative border-none"  style={{ backgroundColor:colors.body}}>
                      <Link
                        to={`/product/${item._id}`}
                        className="product-details"
                      
                      >
                        <div className="product-image d-flex align-items-center" >
                          <img
                            src={item?.images?.[0]?.url}
                            className="img-fluid d-block mx-auto featured-img"
                            alt="product-img"
                            style={{ maxHeight: "100%", maxWidth: "100%" }}
                          />
                        </div>

                        <h6 className="brand">{item?.brand?.title}</h6>
                        <h5 className="product-title">{item?.title}</h5>
                        <p className="Price fw-bold text-dark">$ {item?.price}</p>
                      </Link>
                    </div>
                  </div>
                );
              }
            })}
            <Button style={{width:"fit-content"}} className="d-flex m-auto" onClick={()=>navigate("/product")}>See more Products</Button>
        </div>    
      </Container>
    </div>
  );
}

export default Home;
