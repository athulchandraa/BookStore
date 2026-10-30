import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'

function PaymentFailed() {
  return (
    <>
    <Header/>
      <div className='md:grid grid-cols-2 p-10 items-center'>
        <div className='text-center'>
          <p className='text-4xl text-red-500 font-medium my-2'>Oops...</p>
          <p className='text-2xl my-2 font-medium mb-10'>Payment Failed !</p>
          <Link to={'/books'} className='bg-red-600 px-3 rounded py-1 text-white font-medium'>Explore More Books</Link>
        </div>
        <div>
          <img src="https://i0.wp.com/nrifuture.com/wp-content/uploads/2022/05/comp_3.gif?fit=800%2C600&ssl=1" alt="" />
        </div>
      </div>
    </>
  )
}

export default PaymentFailed