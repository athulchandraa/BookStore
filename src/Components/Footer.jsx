import React from 'react'
import { FaArrowRight, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <div className='border w-full bg-black bottom-0 '>
      <div className='grid grid-cols-3 gap-5 p-5'>
        <div className='text-white'>
          <p className='text-2xl mb-2'>About Us</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nulla adipisci nobis doloribus doloremque, corporis commodi unde sint recusandae. Illo vitae quo ad enim nulla assumenda deleniti molestias totam incidunt.
          Nihil, necessitatibus tenetur. Cupiditate obcaecati aliquid itaque, necessitatibus atque, optio laudantium quidem quo inventore culpa impedit, neque sunt accusamus. Fugiat placeat magni </p>
        </div>
        <div className='text-white'>
          <p className='text-2xl mb-2'>NEWS LETTER</p>
          <p>Stay updated with our latest trends</p>
          <div className='flex items-center'>
            <input className='border mt-4 px-3 py-1 bg-white text-black' type="text" placeholder='Email' />
            <button className='border px-2 py-2 mt-4 bg-yellow-500 '><FaArrowRight /></button>
          </div>
        </div>
        <div className='text-white'>
          <p className='text-2xl mb-2'>FOLLOW US</p>
          <p>Let us be social</p>
          <div className='flex gap-5 mt-5 text-2xl'>
            <FaFacebook/>
            <FaInstagram/>
            <FaLinkedin/>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <p className='text-white'>&copy; BookStore 2026 ,All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer