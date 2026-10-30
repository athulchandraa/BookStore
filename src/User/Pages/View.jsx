import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../Components/Header'
import { FaBackward, FaCamera, FaEye } from 'react-icons/fa'
import { buyBookAPI, getSingleBook } from '../../allApiService'
import axiosInstance from '../../Api/axiosInstance'
import {loadStripe} from '@stripe/stripe-js';


function View() {
  
  const [modal,setModal]=useState(false)
  const[bookData,setBookData]=useState({})
  console.log(bookData);
  
  const{id}=useParams()

  const bookDetails=async()=>{
    const result=await getSingleBook(id)
    setBookData(result.data[0])
  }

  useEffect(()=>{
    bookDetails()
  },[])

  //Stripe Function

  const makePayment=async()=>{
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PK);
    console.log(stripe);
    //API call
    const result=await buyBookAPI(id)
    window.location.href=result.data.checkoutURL
  }

  return (
    <div>
      <Header/>
      <div className='md:m-10 m-5'>
        <div className='border p-5 shadow border-gray-400'>
          <div className='md:grid grid-cols-4 gap-x-10'>
            {/* Images */}
            <div className='col-span-1'>
              <img className='w-ful' src={bookData?.imageURL} alt="" />
            </div>
            {/* Book Details */}
            <div className='col-span-3'>
              <div className='flex justify-between mt-5 md:mt-0'>
                <p className='text-3xl font-bold'>{bookData?.title}</p>
                <button onClick={()=>setModal(true)} className='text-gray-400'><FaEye/></button>
              </div>
              <p className='text-blue-800 font-bold text-xl my-5'>-{bookData?.author}-</p>
              <div className='md:grid grid-cols-3 gap-5 my-10'>
                <p className='font-bold'>Publisher : {bookData?.publisher}</p>
                <p className='font-bold'>Language : {bookData?.language}</p>
                <p className='font-bold'>No of Pages : {bookData?.pages}</p>
                <p className='font-bold'>Category : {bookData?.category}</p>
                <p className='font-bold'>ISBN : {bookData?.isbn}</p>
                <p className='font-bold'>Seller : {bookData?.sellerMail}</p>
              </div>
              <div>
                <p className='text-lg font-bold'>Abstract : {bookData?.abstract}</p>
              </div>
              <div className='flex justify-end gap-2'>
                <Link to={'/books'} className='flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded w-fit'><FaBackward/>Back</Link>
                <button onClick={makePayment} className='px-3 py-1 bg-green-800 text-white font-medium rounded cursor-pointer'>Buy ${bookData?.discountPrice}</button>
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
                  
                  {
                    bookData.uploadImages.length>0 ?
                    
                    bookData.uploadImages.map(item=>(
                         <img className='md:w-75 w-25 md:me-2 md:mt-0' src={`${axiosInstance.defaults.baseURL}/Uploadss/${item}`} alt="" />
                        
                         
                    ))
                   
                   :
                   <div>Images not Found...</div>
                  }

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