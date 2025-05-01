import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";
import "../extras/extracss/Ourstore.css";

function OurStore() {
  const [grid, setGrid] = useState(3);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState(null);
  const [tag, setTag] = useState(null);
  const [brand, setBrand] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const productState = useSelector((state) => state?.product?.product);
  const { product } = productState;
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, [tag, brand, category, minPrice, maxPrice]);

  useEffect(() => {
    let newBrands = [];
    let category = [];
    let newTags = [];

    for (let i = 0; i < product?.length; i++) {
      const element = product?.[i];
      if (element) {
        if (element.brand) {
          newBrands.push(element.brand);
        }
        if (element.category) {
          category.push(element.category);
        }
        if (element.tags) {
          newTags.push(element.tags);
        }
      }
    }

    const uniqueCategory = category.filter((obj, index) => {
      return index === category.findIndex((o) => obj._id === o._id);
    });
    const uniqueBrand = newBrands.filter((obj, index) => {
      return index === newBrands.findIndex((o) => obj._id === o._id);
    });
    setBrands(uniqueBrand);
    setCategories(uniqueCategory);
    setTags(newTags);
  }, [productState]);

  const getProducts = () => {
    dispatch(getAllProducts({ tag, brand, category, minPrice, maxPrice }));
  };

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    if (screenWidth < 768) {
      setGrid(12);
    } else {
      setGrid(3);
    }
  }, [screenWidth]);

  return (
    <>
      <Meta title={"Our Store"} />
      <Container class1="store-wrapper py-5" style={{minHeight:'80vh'}}>
        <div className="row" style={{minHeight:'80vh'}}>
          <h3 className="text-center fw-bold mb-4">All Products</h3>
          <h4 className="text-center fw-bold mb-4" style={{color:"#555555"}}>"Want something unique? Customize your soap in fun shapes like a teddy bear! Contact us to create your personalized soap today."</h4>
          <div className="col-12">
            <div className="products-list">
              <div className="product-grid">
                <ProductCard data={product ? product : []} grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default OurStore;
