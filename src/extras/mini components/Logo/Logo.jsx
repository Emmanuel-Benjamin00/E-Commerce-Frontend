import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../../mini-images/Topbar/images/pngwing.com.png";


function Logo() {

    let navigate = useNavigate()

    return (
        <>
            <div>
                <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
                    <img
                        src={logo}
                        alt=""
                        style={{ width: "40px", height: "32px" }}
                        className="me-3"
                    />
                    <span className="fs-4" onClick={() => navigate("/")}>Shopper</span>
                </a>
            </div>
        </>
    )
}

export default Logo