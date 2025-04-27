import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import "../extras/extracss/Footer.css"

import { BsSendArrowUp } from "react-icons/bs";
function Footer() {
  return (
    <>
      <div class="py-5" style={{backgroundColor:'black', position:"relative", bottom:0}}>
        <footer class="d-flex flex-wrap justify-content-between align-items-center " >
          {/* <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1" aria-label="Bootstrap">
              <svg class="bi" width="30" height="24" aria-hidden="true"><use xlink:href="#bootstrap"></use></svg>
            </a>
            <span class="mb-3 mb-md-0 "  style={{color:"white"}}>© 2025 Company, Inc</span>
          </div> */}

          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <p className="text-center mb-0 text-white">
                  &copy; 2025 Designed and Developed by Felicia
                </p>
              </div>
            </div>
          </div>

          {/* <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-body-secondary" href="#" aria-label="Instagram"><svg class="bi" width="24" height="24" aria-hidden="true"><use xlink:href="#instagram"></use></svg></a></li>
            <li class="ms-3"><a class="text-body-secondary" href="#" aria-label="Facebook"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
          </ul> */}
        </footer>
      </div>
      {/* <footer className="py-4 bg-dark mt-5">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <BsSendArrowUp className="new-sletter-icon" />
                <h2 className="mb-0 text-white">Sign up for newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3 cursor-pointer" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
      {/* <div className="footer-css">
        <footer className="py-4 bg-dark mb-0">
          <div className="container-xxl">
            <div className="row justify-content-center d-flex ">
              <div className="col-5">
                <h4 className="text-white mb-4">Contact Us</h4>
                <div>
                  <address className="text-white fs-6">
                    No: 15A, Rajaji Nagar, Near Vill chopal,
                    <br /> sonipat,Belgum <br />
                    Pincode:236790
                  </address>
                  <div
                    className="mt-3 d-block mb-1 text-white"
                  >
                    +91 9890786709
                  </div>
                  <div
                    className="mt-2 d-block mb-0 text-white"
                  >
                    shopper@gmail.com
                  </div>

                  <div className="social-icons d-flex align-items-center gap-30 mt-4">
                    <a className="text-white">
                      <BsLinkedin className=" fs-3" />
                    </a>
                    <a className="text-white">
                      <BsGithub className="fs-3" />
                    </a>
                    <a className="text-white">
                      <BsInstagram className="fs-3" />
                    </a>
                    <a className="text-white">
                      <BsYoutube className="fs-3" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <h4 className="text-white mb-4">Information</h4>
                <div className="footer-link d-flex flex-column">
                  <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                  <Link className="text-white py-2 mb-1">Refund Policy</Link>
                  <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                  <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                </div>
              </div>
              <div className="col-3">
                <h4 className="text-white mb-4">Account</h4>
                <div className="footer-link d-flex flex-column">
                  <Link className="text-white py-2 mb-1">About us</Link>
                  <Link className="text-white py-2 mb-1">FAQ</Link>
                  <Link className="text-white py-2 mb-1">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <footer className="py-4 bg-dark mb-0">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <p className="text-center mb-0 text-white">
                  &copy; 2024;Designed and Developed by Emmanuel
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div> */}
    </>
  );
}
export default Footer;
