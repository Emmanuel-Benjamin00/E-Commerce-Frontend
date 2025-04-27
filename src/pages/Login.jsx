import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/user/userSlice";
import "../extras/extracss/Login.css"
import { Image } from "react-bootstrap";
import loginPageImage from "../../assets/pexels-polina-kovaleva-5420491.jpg"; 

const loginSchema = Yup.object({
  email: Yup.string()
    .required("Email should not be empty")
    .email("Invalid email"),
  password: Yup.string()
    .required("Password should not be empty")
    .min(6, "password should be minimum 6 char"),
});
function Login() {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",

      password: "",
    },
    onSubmit: (values) => {
      setLoading(true); // Set loading to true when submitting the form
      dispatch(loginUser(values));
    },
    validationSchema: loginSchema,
  });

  useEffect(() => {
    if (authState?.user && authState.isError === false) {
      navigate("/");
    }else{
      navigate("/login");
    }
  }, [authState]);

  const [loading, setLoading] = useState(false);

  return (
    <>
      <Meta title={"Login"} />
      <Container class1="" >
        <div className="row d-flex justify-content-center align-items-center" style={{height:'80vh'}}>
          <div className="col-12 col-lg-5">
    
            <div className="auth-card" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
              <h3 className="text-center mb-3 fw-bold fs-2" style={{color:"black"}}>Login</h3>
              <Image 
              src={loginPageImage}
              alt="Description of image" 
              rounded 
              fluid // makes the image responsive
              style={{ maxWidth: '60%', marginBottom:'50px' }} 
            />
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <div className="login-box">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control login-inp"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                    style={{ backgroundColor: 'white', width:'30vw',  color: 'black', }}
                  />
                  <div className="error">
                    {formik.touched.email && formik.errors.email}
                  </div>
                </div>
                <div className="mt-1 login-box">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control login-inp"
                    value={formik.values.password}
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                    style={{ backgroundColor: 'white',  color: 'black', width:'30vw' }}
                  />
                  <div className="error">
                    {formik.touched.password && formik.errors.password}
                  </div>
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    {loading ? (
                      <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      <>
                      <button className="button border-0 btn btn-warning">
                        Login
                      </button>
                      <Link to="/sign-up" className="button btn btn-secondary signup text-light">
                      SignUp
                    </Link>
                    </>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Login;
