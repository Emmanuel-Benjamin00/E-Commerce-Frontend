import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { auth_reset } from "../features/user/userSlice.js";
import '../extras/extracss/Topbar.css'
import Logo from "../extras/mini components/Logo/Logo.jsx";
import { Dropdown } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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

  const navbarRef = useRef();

  const collapseIt = () => {
    setTimeout(()=>{

      navbarRef.current.click();
    }, 100)
  }
  return (
    <>
      <Navbar expand="lg" className="">
        <Container>
          <Navbar.Brand href="#"><Logo /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" ref={navbarRef}/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto my-2 my-lg-0 d-flex align-items-center gap-2 navtext">
              <Nav.Link onClick={() => navigate('/')} onTouchEnd={()=>collapseIt()}>
                {
                  user ? "Home" : "Login"
                }
              </Nav.Link>
              <Nav.Link onClick={() => navigate('/product')} onTouchEnd={()=>collapseIt()}>All Products</Nav.Link>
              {
                user && (
                  <Nav.Link onClick={() => navigate('/myorders')} onTouchEnd={()=>collapseIt()}>My Orders</Nav.Link>
                )
              }
              {
              user && (
              <Nav.Link onClick={() => navigate('/cart')} className="d-flex flex-column justify-content-center align-items-center" onTouchEnd={()=>collapseIt()}>
                <BsCart4 className="header-icon m-0 p-0 gap-0" />
                <div className="m-0 p-0 cartletter">Cart</div>
              </Nav.Link>
              )
              }
              {
              user && (
              <Dropdown align="end">
                <Dropdown.Toggle variant="link" id="dropdown-basic" drop="down" className="acc-btn custom-dropdown-toggle">
                  <div className="d-flex align-items-center gap-20 text-dark">
                    <BiUserCircle className="header-icon-login m-0 p-0 "/>
                    {user === null ? (
                      <p className="mb-0  loginbutton">
                        Log in <br /> My Account
                      </p>
                    ) : (
                      <p className="mb-0 loginbutton">
                        Welcome <br /> {user?.firstname}
                      </p>
                    )}
                  </div>
                </Dropdown.Toggle>
                {
              user && (
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleLogout()} onTouchEnd={()=>collapseIt()}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              )
                }
              </Dropdown>
              )}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      {/* <header className="py-3 border-bottom">
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
                    className="d-flex align-items-center text-dark flex-column"
                  >
                    <BsCart4 className="header-icon m-0 p-0 gap-0" />
                    <div className="m-0 p-0 cartletter">Cart</div>
                  </Link>
                </li>
              )
            }

            <li className="nav-item">
              <div>
                <Dropdown align="end">
                  <Dropdown.Toggle variant="link" id="dropdown-basic" drop="down" className=" acc-btn custom-dropdown-toggle">
                    <div className="d-flex align-items-center gap-20 text-dark">
                      <BiUserCircle className="header-icon m-0 p-0" />
                      {user === null ? (
                        <p className="mb-0">
                          Log in <br /> My Account
                        </p>
                      ) : (
                        <p className="mb-0 loginbutton">
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
      </header> */}
    </>
  );
}

export default Header;
// /"border border-0 bg-transparent text-white"
