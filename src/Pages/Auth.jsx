import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { FaEye, FaEyeSlash, FaUserAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { GoogleloginAPI, loginAPI, registerAPI } from '../allApiService'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { routeContext } from '../contextAPI/RouteGuard'



function Auth({insideRegistor}) {

  const{role,setRole,authorisedUser,setAuthorisedUser}=useContext(routeContext)

  const navigate=useNavigate()

  const[togglePassword,setTogglePassword]=useState(false)

  const formik=useFormik({
    initialValues:{
      username:"Username",
      email:"",
      password:""
    },
    validationSchema:Yup.object({
      username:Yup.string().min(3,"must be atleast 3 charectors").required("Required"),
      email:Yup.string().email("Invalid Email").required("Required"),
      password:Yup.string().required("Required")
    }),
    onSubmit :(value,{resetForm})=>{
      console.log(value);
      if(insideRegistor){
        console.log("Register API req");
        handleRegister(value)
      }else{
        console.log("Login API Call");
        handleLogin(value)
      }
      resetForm()
    }
  })

  const handleLogin=async(userData)=>{
    const result=await loginAPI(userData)
    console.log(result);
    if(result.status==200){
      toast.success("Succesfully Logged In...!")
      sessionStorage.setItem("token",result.data.token)
      sessionStorage.setItem("user",JSON.stringify(result.data.user))
      console.log(result.data.user.role);
      
      setTimeout(()=>{
        if(result.data.user.role=="admin"){
          setRole("admin")
          navigate('/admin')
        }else{
          setRole("user")
          navigate('/')
        }
      },2500)
    }else{
      toast.error(result)
    }
  }

  //Api Call
  const handleRegister=async (userData)=>{
    const result=await registerAPI(userData)
    console.log(result);
    if(result.status==201){
      toast.success("Successfully Registered... Please Login!")
    }else{
      toast.error(result)
    }
    navigate('/login')
    
  }

  const handleGoogleLogin=async(credentialResponse)=>{
    console.log("Inside GoogleLogin");
    const {email,name,picture}=jwtDecode(credentialResponse.credential)
    const result=await GoogleloginAPI({username:name,email,password:"googleLogin",picture})
    if(result.status==200){
      toast.success("Succesfully Logged In...!")
      sessionStorage.setItem("token",result.data.token)
      sessionStorage.setItem("user",JSON.stringify(result.data.user))
      console.log(result.data.user.role);
      setTimeout(()=>{
        if(result.data.user.role=="admin"){
          setRole("admin")
          navigate('/admin')
        }else{
          setRole("user")
          navigate('/')
        }
      },2500)
    }else{
      toast.error(result)
    }
  }



  return (
    <div className='min-h-screen  w-full flex justify-center items-center bg-[url(/AuthBg.png)] bg-cover bg-center text-blue-500'>
      <div className='p-10'>
        <p className='text-center font-bold text-3xl'>BOOKSTORE</p>
        <div style={{width:'400px'}} className='bg-blue-900  text-white p-5 flex justify-center items-center flex-col my-5'>
          <div style={{width:'80px', height:'80px',borderRadius:'50%'}} className='border mb-5 flex justify-center items-center'>
            <FaUserAlt className='text-3xl'/>
          </div>
          <p className='text-3xl'>{insideRegistor ? "Register" : "Login"}</p>
          <form onSubmit={formik.handleSubmit} className='my-5 w-full'>
            {/* Username */}
            {
              insideRegistor &&
              <>
              <input name='username' value={formik.values.username} onChange={formik.handleChange} className='bg-white w-full py-2 px-3 rounded text-blue-900 my-5' type="text" placeholder='Username' />
              <div className='mb-5 text-yellow-400'>
                {formik.errors.username}
              </div>
              </>
             
              }
              {/* Email */}
              <input name='email' value={formik.values.email} onChange={formik.handleChange} className='bg-white w-full py-2 px-3 rounded text-blue-900 my-5' type="text" placeholder='Email' />
              <div className='mb-5 text-yellow-400'>
                {formik.errors.email}
              </div>
              {/* Password */}
              <div className='flex items-center'>
                <input name='password' value={formik.values.password} onChange={formik.handleChange} className='bg-white w-full py-2 px-3 rounded text-blue-900 mt-5 mb-3' type={togglePassword ? "Password" : "text"} placeholder='Password' />
                
                {
                  togglePassword ? 
                  <FaEye onClick={()=>setTogglePassword(!togglePassword)} className='text-blue-600 -ml-10 mt-2 cursor-pointer'/> :
                  <FaEyeSlash onClick={()=>setTogglePassword(!togglePassword)} className='text-blue-600 -ml-10 mt-2 cursor-pointer'/>
                }
                
              </div>
              <div className='mb-5 text-yellow-400'>
                  {formik.errors.password}
                </div>
              <div className='px-1 flex justify-between'>
                <p className='text-xs text-orange-600'>*Never share password with others</p>
                {
                  !insideRegistor &&
                  <p className='text-xs cursor-pointer text-white-600'>Forgot Password ?</p>}
              </div>
              {/* Buttons */}
              <div>
                {
                  insideRegistor ?
                  <button type='submit' className='w-full mt-2 bg-green-600 text-white px-3 py-2 rounded'>Register</button> :
                <button type='submit' className='w-full mt-2 bg-green-600 text-white px-3 py-2 rounded'>Login</button>}
              </div>
              {/* Google Login */}
              {
               !insideRegistor && 
                <div className='my-5 text-center'>
                  <p>-----------------OR-----------------</p>
                  <div className='mt-2 flex justify-center items-center w-full'>
                      <GoogleLogin
                        onSuccess={credentialResponse => {
                          handleGoogleLogin(credentialResponse)
                        }}
                        onError={() => {
                          console.log('Login Failed');
                        }}
                      />
                  </div>
              </div>}
              {/* Existing User */}
              <div className='flex justify-center items-center mt-2'>
                {
                  insideRegistor ? 
                  <p>Existing user ? <Link className='text-green-500' to={'/login'}>Login</Link></p> :
                <p>New user ? <Link className='text-green-500' to={'/register'}>Register</Link></p>}
              </div>
          </form>

        </div>

      </div>
      {/* Toast Container */}
      <ToastContainer
      position="top-center"
      autoClose={3000}
      theme="colored"
      transition={Bounce}
      />
    </div>
  )
}

export default Auth