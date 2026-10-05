import React, { useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function Edit() {
    const [OffCanvas,setOffCanvas]=useState(false)
  return (
    <div>
        <button onClick={()=>setOffCanvas(true)} className='flex items-center me-2 rounded gap-2 bg-black text-white px-3 py-1 hover:text-black hover:bg-white border cursor-pointer'><FaPen/>Edit</button>
        {/* Off Canvas */}
        {
            OffCanvas &&
            <div>
            <div className='fixed inset-0 bg-gray-400/75 w-full h-full'></div>
            <div className='bg-white h-full w-90 z-50 fixed top-0 left-0'>
                <div className='bg-black px-3 py-4 flex justify-between items-center text-2xl text-white'>
                    <p>Update User Profile</p>
                    <FaX onClick={()=>setOffCanvas(false)}/>
                </div>
                {/* Body */}
                <div className='flex flex-col items-center justify-center'>
                    <label htmlFor='userProfile'>
                        <input type="file" id='userProfile' hidden/>
                        <img className='w-50 h-50 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTwJeq7SUFlnuAgtklwChPpzhuQqNS8pz830n5dpEWQ&s" alt="" />
                        <button className='bg-black text-white p-3 text-xl rounded ml-40 fixed -mt-5'><FaPen/></button>
                    </label>
                    {/* username */}
                    <div className='mt-10 mb-3 w-full px-5'>
                        <input className='border w-full px-3 py-1 rounded border-gray-500' placeholder='Username' type="text" />
                    </div>
                    {/* New Password */}
                    <div className='mt-3 mb-3 w-full px-5'>
                        <input className='border w-full px-3 py-1 rounded border-gray-500' placeholder='New Password' type="text" />
                    </div>
                    {/* Confirm New password */}
                    <div className='mt-3 mb-3 w-full px-5'>
                        <input className='border w-full px-3 py-1 rounded border-gray-500' placeholder='Confirm Password' type="text" />
                    </div>
                    {/* Bio */}
                    <div className='mt-3 mb-3 w-full px-5'>
                        <input className='border w-full px-3 py-1 rounded border-gray-500' placeholder='Bio' type="text" />
                    </div>
                    {/* Reset and Update */}
                    <div className='flex justify-end w-full gap-5 mt-10 px-5'>
                        <button className='bg-yellow-600 px-3 py-1 rounded text-white font-medium'>Reset</button>
                        <button className='bg-green-600 px-3 py-1 rounded text-white font-medium'>Update</button>
                    </div>
                </div>

                
            </div>
        </div>}
    </div>
  )
}

export default Edit