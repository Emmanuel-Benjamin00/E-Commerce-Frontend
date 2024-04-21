import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart, deleteCartPoduct } from "../features/user/userSlice";
import { Container } from 'react-bootstrap';
import '../extras/extracss/Cart.css'

function Cart() {
  const dispatch = useDispatch();
  const userCartState = useSelector((state) => state?.auth?.cartProduct);
  useEffect(() => {
    dispatch(getUserCart());
  }, []);
  const deleteACartProduct = (id) => {
    dispatch(deleteCartPoduct(id));
    setTimeout(() => {
      dispatch(getUserCart());
    }, 200);
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
      <Container className="cart-wrapper home-wrapper-2 p-5 d-flex align-items-center">
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
      </Container>
    </>
  );
}

export default Cart;
