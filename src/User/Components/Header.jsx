import React, { useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook ,FaTwitter , FaUser  } from "react-icons/fa";
import { IoMdMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';


function Header() {
  const [toggle,setToggle]=useState(false)
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
        <Link to={'/login'} className='px-3 py-0.5 border flex items-center rounded'><FaUser/>Login</Link>
      </div>
    </div>
    {/* Navigation Part */}
    <nav className='bg-black w-ful text-white md:flex justify-center items-center py-2'>
      {/* MenuIcons and Login Btnn */}
      <div className='text-white flex justify-between items-center text-2xl py-2 md:hidden px-3'>
        <button onClick={()=>setToggle(!toggle)}><IoMdMenu className='text-white'/></button>
        <Link to={'/login'} className='px-3 py-0.5 border flex items-center rounded'><FaUser/>Login</Link>
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