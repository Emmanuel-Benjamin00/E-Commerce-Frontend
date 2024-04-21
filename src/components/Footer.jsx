import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

import { BsSendArrowUp } from "react-icons/bs";
function Footer() {
  return (
    <>
      <footer className="py-4 bg-dark mt-5">
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
      </footer>
      <footer className="py-4 bg-dark">
        <div className="container-xxl">
          <div className="row justify-content-center d-flex ms-4">
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
                  <a  className="text-white">
                    <BsLinkedin className=" fs-3" />
                  </a>
                  <a  className="text-white">
                    <BsGithub className="fs-3" />
                  </a>
                  <a  className="text-white">
                    <BsInstagram className="fs-3" />
                  </a>
                  <a  className="text-white">
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
      <footer className="py-4 bg-dark">
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
    </>
  );
}
export default Footer;
