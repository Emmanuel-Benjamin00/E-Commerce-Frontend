import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart, deleteCartPoduct } from "../features/user/userSlice";
import { Container } from 'react-bootstrap';
import '../extras/extracss/Cart.css'
import Table from 'react-bootstrap/Table';
import {colors} from '../theme.js'

function Cart() {
  const dispatch = useDispatch();
  const [deletingItemId, setDeletingItemId] = useState(null);
  const userCartState = useSelector((state) => state?.auth?.cartProduct);
  console.log(userCartState)
  useEffect(() => {
    dispatch(getUserCart());
  }, []);
  const deleteACartProduct = (id) => {
    setDeletingItemId(id); // Start loading
    dispatch(deleteCartPoduct(id))
      .then(() => {
        setTimeout(() => {
          dispatch(getUserCart());
          setDeletingItemId(null); // Stop loading
        }, 200);
      })
      .catch(() => {
        setDeletingItemId(null); // Also stop loading on error
      });
  };
  
  const [totalAmount, setTotalAmount] = useState(null);
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < userCartState?.length; index++) {
      sum =
        sum +
        Number(
          userCartState?.[index]?.quantity * userCartState?.[index]?.price
        );
      setTotalAmount(sum);
    }
  }, [userCartState]);
  return (
    <>
      <Meta title={"Cart"} />
     
      <div className="pt-5" style={{minHeight:'90vh', backgroundColor:colors.body }}>
      <Container fluid className="px-5">
        <Table responsive  style={{ backgroundColor:colors.body }}>
          <thead style={{backgroundColor:colors.body}}>
            <tr style={{backgroundColor:colors.body}}>
              <th style={{backgroundColor:colors.body}}>S.No</th>
              <th style={{backgroundColor:colors.body}}>Product</th>
              <th style={{backgroundColor:colors.body}}>Price</th>
              <th style={{backgroundColor:colors.body}}>Quantity</th>
              <th style={{backgroundColor:colors.body}}>Total</th>
            </tr>
          </thead>
          <tbody  style={{backgroundColor:colors.body}}>
  {userCartState && userCartState.length > 0 ? (
    userCartState.map((item, index) => {
      if (!item.productId) {
        console.error("Missing productId for item:", item);
        return null;
      }
      return (
        <tr key={index}  style={{backgroundColor:colors.body}}>
          <td  style={{backgroundColor:colors.body}}>{index + 1}</td>
          <td className="d-flex align-items-center"  style={{backgroundColor:colors.body}}>
            <div>
              <img
                src={item?.productId.images?.[0]?.url}
                alt="product"
                className="img-fluid"
                style={{ height: "60px" }}
              />
            </div>
            <div>
              <p>{item?.productId.title}</p>
            </div>
          </td>
          <td  style={{backgroundColor:colors.body}}><h5 className="Price">₹ {item?.productId.price}</h5></td>
          <td style={{ backgroundColor: colors.body }}>
  <div className="d-flex align-items-center gap-2">
    <input
      className="form-control"
      type="number"
      min={1}
      max={10}
      value={item?.quantity}
      disabled
    />
    {deletingItemId === item._id ? (
      <div className="spinner-border text-danger" style={{ width: "1.5rem", height: "1.5rem" }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    ) : (
      <AiFillDelete
        onClick={() => deleteACartProduct(item?._id)}
        className="text-danger pointer"
        style={{ cursor: deletingItemId ? "not-allowed" : "pointer" }}
      />
    )}
  </div>
</td>

          <td  style={{backgroundColor:colors.body}}>
            <h5 className="Price">₹ {item?.quantity * item?.price}</h5>
          </td>
        </tr>
      );
    })
  ) : (
    <tr>
      <td colSpan="5" className="text-center py-5">
        <h4>No products in cart</h4>
      </td>
    </tr>
  )}
</tbody>

        </Table>

          <div className="col-12 py-2 mt-4">
                <div className="d-flex justify-content-between align-items-baseline">
                  <Link to="/product" className="button prime-btn">
                    Continue to Shopping
                  </Link>
                  {(totalAmount !== null && totalAmount !== 0 &&  userCartState.length>0 ) && (
                    <div className="d-flex flex-column align-items-end">
                      <h5> SubTotal :₹ {totalAmount}</h5>
                      <Link to="/checkout" className="button sec-btn" style={{backgroundColor:'#daa520'}}>
                        Checkout
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              </Container>
            </div>



      {/* <Container className="cart-wrapper home-wrapper-2 p-5 d-flex align-items-center">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            {userCartState &&
              userCartState?.map((item, index) => {
                if (!item.productId) {
                  console.error("Missing productId for item:", item);
                  return null; // or handle the case appropriately
                }
                return (
                  <div
                    key={index}
                    className="cart-data py-3 mb-2  d-flex justify-content-between align-items-center"
                  >
                    <div className="cart-col-1  gap-15 d-flex align-items-center">
                      <div className="w-25">
                        <img
                          src={item?.productId.images?.[0]?.url}
                          alt="watch"
                          className="img-fluid"
                        />
                      </div>
                      <div className="w-75">
                        <p>{item?.productId.title}</p>
                      </div>
                    </div>
                    <div className="cart-col-2">
                      <h5 className="Price">$ {item?.productId.price}</h5>
                    </div>
                    <div className="cart-col-3 d-flex align-items-center gap-15">
                      <div>
                        <input
                          className="form-control"
                          type="number"
                          name=""
                          id=""
                          min={1}
                          max={10}
                          value={item?.quantity}
                          disabled
                        />
                      </div>
                      <div>
                        {" "}
                        <AiFillDelete
                          onClick={() => {
                            deleteACartProduct(item?._id);
                          }}
                          className="text-danger pointer"
                        />
                      </div>
                    </div>
                    <div className="cart-col-4">
                      <h5 className="Price">
                        $ {item?.quantity * item?.price}
                      </h5>
                    </div>
                  </div>
                );
              })}
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/product" className="button prime-btn">
                  Continue to Shopping
                </Link>
                {(totalAmount !== null || totalAmount !== 0) && (
                  <div className="d-flex flex-column align-items-end">
                    <h4> SubTotal :$ {totalAmount}</h4>
                    <Link to="/checkout" className="button sec-btn">
                      Checkout
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container> */}
    </>
  );
}

export default Cart;
