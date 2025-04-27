import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../../../../assets/logo.png";


function Logo() {

    let navigate = useNavigate()

    return (
        <>
            <div>
                <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
                    <img
                        src={logo}
                        alt=""
                        style={{ width: "50px" }}
                        className="me-3"
                    />
                    <span
                        className="fs-2"
                        style={{
                            fontFamily: '"Playwrite RO", cursive',
                            fontOpticalSizing: 'auto',
                            fontWeight: '800', // or use a numeric value like 400, 500, etc.
                            fontStyle: 'normal'
                        }}
                        onClick={() => navigate("/")}>
                        Auraluxe
                    </span>                       
                </a>
            </div>
        </>
    )
}

export default Logo