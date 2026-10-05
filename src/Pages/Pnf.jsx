import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div className='flex flex-col items-center my-2'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGirznB1IzuqWaYRpMQfw5EYcvy2Hc9B72GpAmuxu6eJwaZyerPqacaTy&s=10" alt="" />
      <p></p>
      <Link to={'/'} className='px-3 py-1 bg-gray-600 text-white font-medium rounded shadow'>Go to Home</Link>
    </div>
  )
}

export default Pnf