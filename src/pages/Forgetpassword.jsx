import React from 'react'
import Meta from '../components/Meta'
import { Link, useNavigate } from 'react-router-dom'
import Container from '../components/Container'
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { forgotPasswordToken } from '../features/user/userSlice'

const emailSchema = Yup.object({
  email: Yup.string()
    .required("Email should not be empty")
    .email("Invalid email"),
  });

function Forgetpassword() {

  const authState = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      dispatch(forgotPasswordToken(values));
      setTimeout(()=>{
if(authState.isSuccess){
  navigate('/')
}
      },300)
    },
    validationSchema:emailSchema,
  });
  
  return (
<>
<Meta  title={"Forgetpassword"} />
    <BreadCrumb title ='Forgetpassword' />
    <Container class1="login-wrapper home-wrapper-2 py-5">
    
      <div className="row">
  <div className="col-12">
    <div className="auth-card">
      <h3 className='text-center mb-3'>Reset Your Password</h3>
      <p className="text-center mt-2 mb-3">
        We will Send you an email to reset your password 
      </p>
      <form onSubmit={formik.handleSubmit} action='' className='d-flex flex-column gap-15'>
      <div>
    <input type="email" name="email" placeholder="email" className="form-control" 
    value={formik.values.email}
    onChange={formik.handleChange("email")}
    onBlur={formik.handleBlur("email")}
  />
  <div className="error text-center">
    {formik.touched.email && formik.errors.email}
  </div>
  </div>
 
  <div>
  <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
    <button className='button border-0 prime-btn' type='submit'>Submit</button>
   
    <Link to='/login'>Cancel</Link>
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

export default Forgetpassword