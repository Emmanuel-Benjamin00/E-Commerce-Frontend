import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram,BsChatDots } from "react-icons/bs";
import "../extras/extracss/Footer.css"

import { BsSendArrowUp } from "react-icons/bs";
function Footer() {
  return (
    <>
      {/* <div class="py-5" style={{backgroundColor:'black', position:"relative", bottom:0}}>
        <footer class="d-flex flex-wrap justify-content-between align-items-center " > */}
          {/* <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1" aria-label="Bootstrap">
              <svg class="bi" width="30" height="24" aria-hidden="true"><use xlink:href="#bootstrap"></use></svg>
            </a>
            <span class="mb-3 mb-md-0 "  style={{color:"white"}}>© 2025 Company, Inc</span>
          </div> */}
{/* 
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <p className="text-center mb-0 text-white">
                  &copy; 2025 Copyright - All Rights Reserved
                </p>
              </div>
            </div>
          </div> */}

          {/* <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-body-secondary" href="#" aria-label="Instagram"><svg class="bi" width="24" height="24" aria-hidden="true"><use xlink:href="#instagram"></use></svg></a></li>
            <li class="ms-3"><a class="text-body-secondary" href="#" aria-label="Facebook"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
          </ul> */}
        {/* </footer>
      </div> */}
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
      <div className="footer-css">
        <footer className="py-4 bg-dark mb-0">
          <div className="container-xxl">
            <div className="row justify-content-center d-flex ">
              <div className="d-flex flex-column align-items-center">
                <h4 className="text-white mb-4">Contact Us</h4>
                <div className="d-flex gap-5 align-items-center ">
                  <div className="text-white ">
                    No: 15A, Rajaji Nagar, Irumbuliyur, Tambaram 600034
                  </div>
                  <div
                    className="text-white"
                  >
                    +91 6379461897
                  </div>
                  <div
                    className=" text-white"
                  >
                    entrepreneurship7298@gmail.com
                  </div>

                  <div className="">
                  <a href="https://www.youtube.com/@Entrepreneur7298" target="_blank" rel="noopener noreferrer" className="text-white">
                      <BsYoutube className="fs-3" />
                    </a>
                  </div>

                  <div className="">
                  <a href="https://www.instagram.com/aura_luxe20?utm_source=qr&igsh=MjUweXUzM2ZqZ3l3" target="_blank" rel="noopener noreferrer" className="text-white">
                      <BsInstagram className="fs-3" />
                    </a>
                  </div>

                  <div className="">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeyxEgamPl-xvQNbJvZX2Z7vK-2UGg62QR8fn7e2Emx12MwAQ/viewform?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-white">
                      <BsChatDots className="fs-3" />
                    </a>
                  </div>

                </div>
              </div>
              {/* <div className="col-4">
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
              </div> */}
            </div>
          </div>
        </footer>
        <footer className="py-4 bg-dark mb-0">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <p className="text-center mb-0 text-white">
                &copy; 2025 Copyright - All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
export default Footer;
