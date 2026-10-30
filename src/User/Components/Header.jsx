import React, { useContext, useEffect, useState } from 'react'
import { FaInstagram, FaPowerOff } from "react-icons/fa";
import { FaFacebook ,FaTwitter , FaUser  } from "react-icons/fa";
import { FaGear } from 'react-icons/fa6';
import { IoMdMenu } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../Api/axiosInstance';
import { routeContext } from '../../contextAPI/RouteGuard';


function Header() {

  const{role,setRole,authorisedUser,setAuthorisedUser}=useContext(routeContext)

  const navigate=useNavigate()

  const [toggle,setToggle]=useState(false)
  const[token,setToken]=useState("")
  const [dp,setDp]=useState("")
  const[userId,setUserId]=useState("")
  const[dropDown,setDropDown]=useState(false)

  useEffect(()=>{

    

    if(sessionStorage.getItem("token") && sessionStorage.getItem("user")){
      const userToken=sessionStorage.getItem("token")
      const user=JSON.parse(sessionStorage.getItem("user"))

      setToken(userToken)
      setDp(user.picture)
      setUserId(user._id)
    }
  },[token])

  const logout=()=>{
    sessionStorage.clear()
    setToggle(false)
    setToken("")
    setDp("")
    setUserId("")
    setUserId("")
    setDropDown(false)
    navigate('/')
    setAuthorisedUser(false)
  }


  return (
    <>
    <div className='grid grid-cols-3 items-center justify-between'>
      {/* Logo */}
      <div>
        <img width={'50px'} height={'50px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrVQ4X9_XO1dEQCiLrw0kvk86AFavysTYLOvgJ7t6xxvCfITrRFc4OuXah&s=10" alt="Books" />
      </div>
      {/* Title */}
      <div className='md:flex justify-center hidden '>
        <p className='text-3xl font-medium'>BookStore</p>
      </div>
      {/* Login */}
      <div className='md:flex gap-3 items-center justify-end px-3 hidden '>
        <FaInstagram/>
        <FaFacebook className=''/>
        <FaTwitter/>
        {
          !token ?
          <Link to={'/login'} className='px-3 py-0.5 border flex items-center rounded'><FaUser/>Login</Link> :
          <div>
            <button onClick={()=>setDropDown(!dropDown)} className=' rounded-full '>
              <img width={'30px'} height={'30px'} style={{borderRadius:'50%'}}  src={dp=="" ? "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" : dp.startsWith("https://lh3.googleusercontent.com") ? dp : `${axiosInstance.defaults.baseURL}/Uploadss/${dp}`} alt="profile Icon" />
            </button>
            {/* DropDown */}
            {
              dropDown &&
              <div className='absolute right-0 z-10 mt-2 bg-white shadow w-40 rounded ring-1 ring-black/5 p-2 focus:outline-hidden'>
              <Link to={`/profile/${userId}`} className='flex items-center  text-gray-600 text-sm px-3 py-2 gap-2'><FaGear/>Profile</Link>
              <button onClick={logout} className='flex items-center text-gray-600 text-sm px-3 py-2 gap-1'><FaPowerOff/>Logout</button>
            </div>}
          </div>
          }
      </div>
    </div>
    {/* Navigation Part */}
    <nav className='bg-black w-ful text-white md:flex justify-center items-center py-2'>
      {/* MenuIcons and Login Btnn */}
      <div className='text-white flex justify-between items-center text-2xl py-2 md:hidden px-3'>
        <button onClick={()=>setToggle(!toggle)}><IoMdMenu className='text-white'/></button>
          {
            !token ?
            <Link to={'/login'} className='px-3 py-0.5 border flex items-center rounded'><FaUser/>Login</Link> :
            <div>
            <button onClick={()=>setDropDown(!dropDown)} className=' rounded-full '>
              <img width={'30px'} height={'30px'} style={{borderRadius:'50%'}}  src={dp=="" ? "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" : dp.startsWith("https://lh3.googleusercontent.com") ? dp : `${axiosInstance.defaults.baseURL}/Uploadss/${dp}`} alt="profile Icon" />
            </button>
            {/* DropDown */}
            {
              dropDown &&
              <div className='absolute right-0 z-10 mt-2 bg-white shadow w-40 rounded ring-1 ring-black/5 p-2 focus:outline-hidden'>
              <Link to={`/profile/${userId}`} className='flex items-center  text-gray-600 text-sm px-3 py-2 gap-2'><FaGear/>Profile</Link>
              <button onClick={logout} className='flex items-center text-gray-600 text-sm px-3 py-2 gap-1'><FaPowerOff/>Logout</button>
            </div>}
          </div>

          }
      </div>
      <ul className={toggle?'flex flex-col' : 'md:flex hidden'}>
        <li><Link className='md:mx-4 mt-2 md:mt-0' to={'/'}>Home</Link></li>
        <li><Link className='md:mx-4 mt-2 md:mt-0' to={'/books'}>Books</Link></li>
        <li><Link className='md:mx-4 mt-2 md:mt-0' to={'/contact'}>Contacts</Link></li>
      </ul>
    </nav>

    </>
  )
}

export default Header