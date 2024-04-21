import React, { useEffect, useState} from "react";
import {  Link, useNavigate } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { auth_reset } from "../features/user/userSlice.js";
import '../extras/extracss/Topbar.css'
import Logo from "../extras/mini components/Logo/Logo.jsx";
import { Dropdown } from "react-bootstrap";

function Header() {
  const [total, setTotal] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const [user, setUser] = useState(authState?.user);

  const cartState = useSelector((state) => state?.auth?.cartProduct);
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum =
        sum +
        Number(cartState[index].quantity) * Number(cartState[index].price);
      setTotal(sum);
    }

    if (!cartState || cartState?.length == 0) {
      setTotal(0);
    }
  }, [cartState]);
  const handleLogout = () => {
    localStorage.clear();
    dispatch(auth_reset());
    navigate("/login");
  };

  useEffect(() => {
    setUser(authState?.user);
  }, [authState]);
  return (
    <>
      <header className="py-3 border-bottom">
        <div className="container d-flex flex-wrap justify-content-between align-items-center">
          <Logo />
          <ul className="nav  d-flex align-items-center gap-2">
            <li className="nav-item">
              <a href="#" className="nav-link link-body-emphasis px-2">
                <p className="m-auto" onClick={() => navigate('/')}>Home</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link link-body-emphasis px-2">
                <p className="m-auto" onClick={() => navigate('/product')}>All Products</p>
              </a>
            </li>
            {
              user && (
                <li className="nav-item">
                  <a href="#" className="nav-link link-body-emphasis px-2">
                    <p className="m-auto" onClick={() => navigate('/myorders')}>My Orders</p>
                  </a>
                </li>
              )
            }
            {
              user && (
                <li className="nav-item">
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-dark"
                  >
                    <BsCart4 className="header-icon" />
                  </Link>
                </li>
              )
            }

            <li className="nav-item">
              <div>
                <Dropdown align="end">
                  <Dropdown.Toggle variant="link" id="dropdown-basic" drop="down" className=" acc-btn custom-dropdown-toggle">
                    <div className="d-flex align-items-center gap-10 text-dark">
                      <BiUserCircle className="header-icon" />
                      {user === null ? (
                        <p className="mb-0">
                          Log in <br /> My Account
                        </p>
                      ) : (
                        <p className="mb-0">
                          Welcome <br /> {user?.firstname}
                        </p>
                      )}
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleLogout()}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>



              </div>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
// /"border border-0 bg-transparent text-white"
