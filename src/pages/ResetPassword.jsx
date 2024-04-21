import React from 'react'
import Meta from '../components/Meta'
import {  useLocation } from 'react-router-dom'
import Container from '../components/Container'
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { resetPassword } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
const passwordSchema = Yup.object({
  password: Yup.string()
    .required("Password should not be empty")
    .min(6, "password should be minimum 6 char"),
  conpassword: Yup.string()
    .required("Password should not be empty")
    .min(6, "password should be minimum 6 char"),
});

function ResetPassword() {
  const location = useLocation();
  const userId = location.pathname.split("/")[2]
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      password: "",

      conpassword: "",
    },
    validationSchema: passwordSchema,
    onSubmit: (values) => {
      dispatch(resetPassword({id:userId,password:values.password}));

  navigate('/login');

    }
  });
  
  return (
 <>
  <Meta  title={"ResetPassword"} />
    <BreadCrumb title ='ResetPassword' />
    <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
  <div className="col-12">
    <div className="auth-card">
      <h3 className='text-center mb-3'>ResetPassword</h3>
      <form  onSubmit = {formik.handleSubmit} action='' className='d-flex flex-column gap-15'>
      <div>
    <input type="password" name="password" placeholder="New Password" className="form-control" 
        value={formik.values.password}
        onChange={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
      />
      <div className="error text-center">
        {formik.touched.password && formik.errors.password}
      </div>
  </div>
  <div className='mt-1'>
    <input type="password" name="confpassword" placeholder='Confirm Password' className="form-control" 
        value={formik.values.conpassword}
        onChange={formik.handleChange("conpassword")}
        onBlur={formik.handleBlur("conpassword")}
      />
      <div className="error text-center">
        {formik.touched.conpassword && formik.errors.conpassword}
      </div>
  </div>
  <div>
  <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
    <button className='button border-0 prime-btn'>RESET</button>
   
    </div>
    </div>
      </form>
    </div>
  </div>
  </div>
  </Container>
 </>
  )
}

export default ResetPassword