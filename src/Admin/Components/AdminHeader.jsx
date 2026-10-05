import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
    <div>
      <div className='flex justify-between items-center p-3 md:mx-10'>
        <div className='flex items-center'>
          <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrVQ4X9_XO1dEQCiLrw0kvk86AFavysTYLOvgJ7t6xxvCfITrRFc4OuXah&s=10" alt="" />
          <p className='text-2xl font-bold ms-2'>BOOKSTORE</p>
        </div>
        <div>
          <button className='bg-black flex items-center gap-3 text-white font-medium px-3 py-1 rounded hover:bg-white hover:text-black hover:shadow'><FaPowerOff/>Logout</button>
        </div>
        
      </div>
      {/* Header Marquee */}
        <div className='bg-black w-full p-3'>
        <marquee className='text-white font-medium'>Welcome Admin, You are all set to manage and maintain our system, Lets get into the work</marquee>
        </div>
    </div>
  )
}

export default AdminHeader