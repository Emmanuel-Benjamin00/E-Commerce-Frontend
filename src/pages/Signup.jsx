import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/user/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { Image, Spinner } from "react-bootstrap"; // Import Spinner for loading
import signupPageImage from "../../assets/pexels-polina-kovaleva-5420491.jpg"

const signupSchema = Yup.object({
  firstname: Yup.string().required("First Name is required "),
  lastname: Yup.string().required("Last Name is required "),
  mobile: Yup.string().required("Mobile number is required "),
  email: Yup.string()
    .required("Email should not be empty")
    .email("Invalid email"),
  password: Yup.string()
    .required("Password should not be empty")
    .min(6, "Password should be a minimum of 6 characters"),
});

function Signup() {
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false); // Loading state for signup
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      setLoading(true); // Set loading state when submitting the form
      dispatch(registerUser(values));
    },
    validationSchema: signupSchema,
  });

  useEffect(() => {
    console.log(authState);
    if (
      (authState.user !== null && authState.isError === false) ||
      authState.createUser
    ) {
      setLoading(false); // Reset loading when user is registered
      navigate("/login");
    }
  }, [authState]);

  return (
    <>
      <Meta title={"Signup"} />
      <Container class1="login-wrapper home-wrapper-2 pb-5 pt-2">
        <div className="row d-flex justify-content-center mb-5">
          <div className="col-12 col-lg-5" style={{ height: "80vh" }}>
            <div
              className="auth-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3 className="text-center mb-3 fw-bold fs-2" style={{ color: "black" }}>
                Sign-Up
              </h3>
              <Image
                src={signupPageImage}
                alt="Description of image"
                rounded
                fluid
                style={{ maxWidth: "60%", marginBottom: "50px" }}
              />
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <div>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="form-control"
                    value={formik.values.firstname}
                    onChange={formik.handleChange("firstname")}
                    onBlur={formik.handleBlur("firstname")}
                    style={{
                      backgroundColor: "white",
                      width: "30vw",
                      color: "black",
                    }}
                  />
                  <div className="error">
                    {formik.touched.firstname && formik.errors.firstname}
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="form-control"
                    value={formik.values.lastname}
                    onChange={formik.handleChange("lastname")}
                    onBlur={formik.handleBlur("lastname")}
                    style={{
                      backgroundColor: "white",
                      width: "30vw",
                      color: "black",
                    }}
                  />
                  <div className="error">
                    {formik.touched.lastname && formik.errors.lastname}
                  </div>
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                    style={{
                      backgroundColor: "white",
                      width: "30vw",
                      color: "black",
                    }}
                  />
                  <div className="error">
                    {formik.touched.email && formik.errors.email}
                  </div>
                </div>
                <div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    className="form-control"
                    value={formik.values.mobile}
                    onChange={formik.handleChange("mobile")}
                    onBlur={formik.handleBlur("mobile")}
                    style={{
                      backgroundColor: "white",
                      width: "30vw",
                      color: "black",
                    }}
                  />
                  <div className="error">
                    {formik.touched.mobile && formik.errors.mobile}
                  </div>
                </div>
                <div className="mt-1">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    value={formik.values.password}
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                    style={{
                      backgroundColor: "white",
                      width: "30vw",
                      color: "black",
                    }}
                  />
                  <div className="error">
                    {formik.touched.password && formik.errors.password}
                  </div>
                </div>
                <div>
                  <div className="mt-2 d-flex justify-content-center gap-15 align-items-center">
                    <Link
                      to="/login"
                      className="fs-6"
                      style={{ color: "blue" }}
                    >
                      Already Have an Account? Login
                    </Link>
                  </div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center mb-5">
                    <button className="button prime-btn border-0 btn btn-warning">
                      {loading ? (
                        <Spinner animation="border" size="sm" /> // Show spinner during loading
                      ) : (
                        "Create"
                      )}
                    </button>
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

export default Signup;
