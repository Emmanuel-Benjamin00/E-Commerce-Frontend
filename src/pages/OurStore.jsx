import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";
import { CiGrid2V } from "react-icons/ci";
import { CiGrid31 } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import "../extras/extracss/Ourstore.css";

function OurStore() {
  const [grid, setGrid] = useState(3);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // State to track screen width
  const [brands, setBrands] = useState([]);
  const [catagories, setCatagories] = useState([]);
  const [tags, setTags] = useState([]);
  //filer
  const [catagory, setCatagory] = useState(null);
  const [tag, setTag] = useState(null);
  const [brand, setBrand] = useState(null);
  const [minprice, setMinPrice] = useState(null);
  const [maxprice, setMaxPrice] = useState(null);

  const productState = useSelector((state) => state?.product?.product);
  const { product } = productState;
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
    // Add event listener to update screen width state on window resize
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      // Clean up event listener on component unmount
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, [tag, brand, catagory, minprice, maxprice]);

  useEffect(() => {
    let newBrands = [];
    let category = [];
    let newtags = [];

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
          newtags.push(element.tags);
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
    setCatagories(uniqueCategory);
    setTags(newtags);
  }, [productState]);

  // Function to get products
  const getProducts = () => {
    dispatch(getAllProducts({ tag, brand, catagory, minprice, maxprice }));
  };

  // Function to update screen width state
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  // Update grid value based on screen width
  useEffect(() => {
    if (screenWidth < 768) {
      setGrid(12);
    } else {
      // Default grid value for larger screens
      setGrid(3);
    }
  }, [screenWidth]);

  return (
    <>
      <Meta title={"Our Store"} />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <h3 className="text-center fw-bold text-underline">All Products</h3>
          <div className="col-12">
            {/* <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-10 align-items-center ms-auto">
                  <label className="totalproducts">
                    {product ? product.length-3 : 0} Products
                  </label>
                  <div className="d-flex gap-10 align-items-center grid">
                    <div className="grid-div pointer">
                      <CiGrid41
                        onClick={() => {
                          setGrid(3);
                        }}
                      />
                    </div>
                    <div className="grid-div pointer">
                      <CiGrid31
                        onClick={() => {
                          setGrid(4);
                        }}
                      />
                    </div>
                    <div className="grid-div pointer">
                      <CiGrid2V
                        onClick={() => {
                          setGrid(6);
                        }}
                      />
                    </div>
                    <div className="grid-div pointer">
                      <MdCheckBoxOutlineBlank
                        onClick={() => {
                          setGrid(12);
                        }}
                      />
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div> */}
            <div className="products-list pb-5 mt-4">
              <div className="d-flex flex-wrap">
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



// import React, { useEffect, useState } from "react";
// import Meta from "../components/Meta";
// import ProductCard from "../components/ProductCard";
// import Container from "../components/Container";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllProducts } from "../features/products/productSlice";
// import { CiGrid2V } from "react-icons/ci";
// import { CiGrid31 } from "react-icons/ci";
// import { CiGrid41 } from "react-icons/ci";
// import { MdCheckBoxOutlineBlank } from "react-icons/md";
// import "../extras/extracss/Ourstore.css"

// function OurStore() {
//   const [grid, setGrid] = useState(4);
//   const [brands, setBrands] = useState([]);
//   const [catagories, setCatagories] = useState([]);
//   const [tags, setTags] = useState([]);
//   //filer
//   const [catagory, setCatagory] = useState(null);
//   const [tag, setTag] = useState(null);
//   const [brand, setBrand] = useState(null);
//   const [minprice, setMinPrice] = useState(null);
//   const [maxprice, setMaxPrice] = useState(null);

//   const productState = useSelector((state) => state?.product?.product);
//   const { product } = productState;
//   const dispatch = useDispatch();
//   useEffect(() => {
//     getProducts();
//   }, [tag, brand, catagory, minprice, maxprice]);
//   useEffect(() => {
//     let newBrands = [];
//     let category = [];
//     let newtags = [];
//     // for (let i = 0; i < product?.length; i++) {
//     //   const element = product?.[i];
//     //   newBrands.push(element.brand);
//     //   category.push(element.category);
//     //   newtags.push(element.tags);
//     // }
    
//     for (let i = 0; i < product?.length; i++) {
//       const element = product?.[i];
//       if (element) {
//         if (element.brand) {
//           newBrands.push(element.brand);
//         }
//         if (element.category) {
//           category.push(element.category);
//         }
//         if (element.tags) {
//           newtags.push(element.tags);
//         }
//       }
//     }

//     const uniqueCategory = category.filter((obj, index) => {
//       return index === category.findIndex((o) => obj._id === o._id);
//     });
//     const uniqueBrand = newBrands.filter((obj, index) => {
//       return index === newBrands.findIndex((o) => obj._id === o._id);
//     });
//     setBrands(uniqueBrand);
//     setCatagories(uniqueCategory);
//     setTags(newtags);
//   }, [productState]);
//   const getProducts = () => {
//     dispatch(getAllProducts({ tag, brand, catagory, minprice, maxprice }));
//   };

//   console.log("catagories:", catagories);
//   return (
//     <>
//       <Meta title={"Our Store"} />
//       <Container class1="store-wrapper home-wrapper-2 py-5">
//         <div className="row">
//           <h3 className="text-center">All Products</h3>
//           <div className="col-12">
//             <div className="filter-sort-grid mb-4">
//               <div className="d-flex justify-content-between align-items-center">


//                 <div className="d-flex gap-10 align-items-center ms-auto">
//                   <label className="totalproducts">
//                     {product ? product.length : 0} Products
//                   </label>
//                   <div className="d-flex gap-10 align-items-center grid">
//                     <div className="grid-div pointer">
//                       <CiGrid41
//                         onClick={() => {
//                           setGrid(3);
//                         }}
//                       />
//                     </div>
//                     <div className="grid-div pointer">
//                       <CiGrid31
//                         onClick={() => {
//                           setGrid(4);
//                         }}
//                       />
//                     </div>
//                     <div className="grid-div pointer">
//                       <CiGrid2V
//                         onClick={() => {
//                           setGrid(6);
//                         }}
//                       />
//                     </div>
//                     <div className="grid-div pointer">
//                       <MdCheckBoxOutlineBlank
//                         onClick={() => {
//                           setGrid(12);
//                         }}
//                       />
//                     </div>{" "}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="products-list pb-5">
//               <div className="d-flex gap-10 flex-wrap">
//                 <ProductCard data={product ? product : []} grid={grid} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// }

// export default OurStore;
