import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import { FaBackward, FaCamera, FaEye } from 'react-icons/fa'


function View() {
  const [modal,setModal]=useState(false)
  return (
    <div>
      <Header/>
      <div className='md:m-10 m-5'>
        <div className='border p-5 shadow border-gray-400'>
          <div className='md:grid grid-cols-4 gap-x-10'>
            {/* Images */}
            <div className='col-span-1'>
              <img className='w-ful' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmTMK-XzecU-GEDv_X1J1aQyy6u06c8sqzGNJh3NaSbg&s=10" alt="" />
            </div>
            {/* Book Details */}
            <div className='col-span-3'>
              <div className='flex justify-between mt-5 md:mt-0'>
                <p className='text-3xl font-bold'>Title</p>
                <button onClick={()=>setModal(true)} className='text-gray-400'><FaEye/></button>
              </div>
              <p className='text-blue-800 font-bold text-xl my-5'>Author</p>
              <div className='md:grid grid-cols-3 gap-5 my-10'>
                <p className='font-bold'>Publisher :</p>
                <p className='font-bold'>Language :</p>
                <p className='font-bold'>No of Pages :</p>
                <p className='font-bold'>Category :</p>
                <p className='font-bold'>ISBN :</p>
                <p className='font-bold'>Seller :</p>
              </div>
              <div>
                <p className='text-lg font-bold'>Abstract :</p>
              </div>
              <div className='flex justify-end gap-2'>
                <Link to={'/books'} className='flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded w-fit'><FaBackward/>Back</Link>
                <button className='px-3 py-1 bg-green-800 text-white font-medium rounded'>Buy $230</button>
              </div>
            </div>

          </div>

        </div>
        {/* Modal View */}
        {
          modal &&
          <div className='relative z-10 overflow-y-auto' onClick={()=>setModal(false)}>
          <div className='bg-gray-500/75 fixed inset-0'>
          <div className='flex justify-center items-center min-h-screen'>
            <div className='bg-white rounded-2xl md:w-250 w-100'>
              {/* Modal Title */}
              <div className='bg-black text-white p-3'>
                <p>Book Images</p>
              </div>
              {/* Modal Body */}
              <div className="relative p-5">
                <p className="text-blue-600 flex items-center gap-2">
                  <FaCamera/>Camera Clicks of the Books
                </p>
                <div className='md:flex flex-wrap my-4'>
                  {/* duplicating Images */}
                  <img className='md:w-75 w-25 md:me-2 md:mt-0' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP4LQsATWYekhjhIDorgj-oGDfniC6FaZ9ZVOMXEaACA&s=10" alt="" />

                </div>
              </div>

            </div>

          </div>

          </div>
        </div>}
      </div>
    </div>
  )
}

export default View