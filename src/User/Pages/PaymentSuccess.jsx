import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'


function PaymentSuccess() {
  return (
    <>
      <Header/>
      <div className='md:grid grid-cols-2 p-10 items-center'>
        <div className='text-center'>
          <p className='text-4xl text-green-500 font-medium my-2'>Congratulation</p>
          <p className='text-2xl my-2 font-medium mb-10'>Thank you For your Purchase</p>
          <Link to={'/books'} className='bg-green-600 px-3 rounded py-1 text-white font-medium'>Explore More Books</Link>
        </div>
        <div>
          <img src="https://i.pinimg.com/originals/20/b8/1e/20b81edb88baba24e4a0e5c527c6a1f2.gif" alt="" />
        </div>
      </div>
    </>
  )
}

export default PaymentSuccess