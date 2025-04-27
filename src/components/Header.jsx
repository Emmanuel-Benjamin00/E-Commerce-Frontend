import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { auth_reset } from "../features/user/userSlice.js";
import { search_reset } from "../features/products/productSlice.js";
import '../extras/extracss/Topbar.css'
import Logo from "../extras/mini components/Logo/Logo.jsx";
import { Dropdown, Image } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {colors, fonts} from '../theme.js'


function Header() {
  const [total, setTotal] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const [user, setUser] = useState(authState?.user);
  const searchVal = useSelector((state) => state.product.search);

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

  const handleSearch = (e) => {
    const value = e.target.value;
    dispatch(search_reset(value));
    navigate("/product"); // navigate to product page
  };
  return (
    <>
      <Navbar expand="lg" className="fixed" 
        style=
          {{
            backgroundColor:colors.header, 
            position:'static', 
            zIndex:100, 
            width:'100%',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
            height:"auto",
            }} >
        <Container fluid className="mx-5 px-5">
          <Navbar.Brand href="#" className="me-lg-5"><Logo /></Navbar.Brand>
          {
            user &&
            <Form>
            <Form.Group className="" controlId="exampleForm.ControlInput1" style={{borderBottom:"2px solid black"}}>
              {/* <Form.Label>Search</Form.Label> */}
              <Form.Control 
                type="text" 
                placeholder="Search Something..." 
                onChange={handleSearch}
                style={{
                  boxShadow: 'none', // Remove the shadow on focus
                  borderColor: 'transparent', // Optional: Remove the border on focus
                  fontSize: '20px',
                  maxWidth: '1000px',
                  backgroundColor:colors.header,
                  borderBottom: "2px soild green"
                }}
                value={searchVal}
                />
            </Form.Group>
          </Form>
          }
          {location.pathname !== "/login" || location.pathname !== "/sign-up" && (
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mx-auto d-md-none mt-2" ref={navbarRef} />
          )}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto my-2 my-lg-0 d-flex align-items-center gap-2 navtext">
              <Nav.Link onClick={() => {
                dispatch(search_reset(""))
                navigate('/')
                }} onTouchEnd={()=>collapseIt()} style={fonts.headerFont}>
                {
                  user && "Home"
                }
              </Nav.Link>
              {
                user &&   <Nav.Link onClick={() => {
                  dispatch(search_reset(""))
                  navigate('/product')}} style={fonts.headerFont} onTouchEnd={()=>collapseIt()}>All Products</Nav.Link>
              }
              {
                user && (
                  <Nav.Link onClick={() => {
                    dispatch(search_reset(""))
                    navigate('/myorders')}} style={fonts.headerFont} onTouchEnd={()=>collapseIt()}>My Orders</Nav.Link>
                )
              }
              {
              user && (
              <Nav.Link onClick={() => {
                dispatch(search_reset(""))
                navigate('/cart')}} className="d-flex flex-column justify-content-center align-items-center" onTouchEnd={()=>collapseIt()}>
                <BsCart4 className="header-icon m-0 p-0 gap-0" />
                <div className="m-0 p-0 cartletter" style={fonts.headerFont}>Cart</div>
              </Nav.Link>
              )
              }
              {
              user ? (
              <Dropdown align="end">
                <Dropdown.Toggle variant="link" id="dropdown-basic" drop="down" className="acc-btn custom-dropdown-toggle">
                  <div className="d-flex align-items-center gap-20 text-dark" style={fonts.headerFont}>
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
              ) :
              <div className="d-none d-md-block" style={{height:'10vh', width:'10vh'}}>
              <Image 
              src="../../assets/headerLeaf.png" 
              alt="Description of image" 
              rounded 
              fluid // makes the image responsive
              style={{ maxWidth: '100%'}} 
            />
            </div>}

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
