import React from "react";
import avatar from "../../mini-images//Topbar/SVGs/person.svg";
import './SigninLogo.css'


function SigninLogo({state}) {
  
  return (
    <>
      <div className="d-flex gap-1 align-items-center">
        <img src={avatar} alt="" className="logo" style={{ height: "25px" }} />
        <div>
          {
           "" ? <>
            <p className="signin" style={{ fontSize: "8px" }}>Hello,</p>
                <h4 className="account fw-bold" style={{ fontSize: "11px" }}>{state.user?.name}</h4>
            </> :
              <>
                <p className="signin" style={{ fontSize: "8px" }}>Sign in</p>
                <h4 className="account fw-bold" style={{ fontSize: "11px" }}>Account</h4>
              </>
          }
        </div>
      </div>
    </>
  );
}

export default SigninLogo;
