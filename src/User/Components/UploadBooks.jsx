import React from 'react'
import { FaPlus } from 'react-icons/fa'

function UploadBooks() {
  return (
    <div className='p-10 my-20 mx-5 bg-gray-200'>
        <p className='text-center font-medium text-3xl'>Upload Book Details</p>
        <div className='md:grid grid-cols-2 mt-10 w-full'>
            <div className='px-3'>
                {/* Book Title */}
                <div className='mb-3'>
                    <input className='w-full bg-white px-3 py-1 rounded' placeholder='Book Title' type="text" />
                </div>
                {/* Author */}
                <div className='mb-3'>
                    <input className='w-full bg-white px-3 py-1 rounded' placeholder='Author' type="text" />
                </div>
                {/* Book Cover */}
                <div className='mb-3'>
                    <input className='w-full bg-white px-3 py-1 rounded' placeholder='Book Cover page URL' type="text" />
                </div>
                {/* Total Pages */}
                <div className='mb-3'>
                    <input className='w-full bg-white px-3 py-1 rounded' placeholder='Total Pages' type="text" />
                </div>
                {/* Original Price */}
                <div className='mb-3'>
                    <input className='w-full bg-white px-3 py-1 rounded' placeholder='Original Price' type="text" />
                </div>
                {/* Discount Price */}
                <div className='mb-3'>
                    <input className='w-full bg-white px-3 py-1 rounded' placeholder='Discount Price' type="text" />
                </div>
                {/* Abstract */}
                <div className='mb-3'>
                    <textarea className='w-full bg-white px-3 py-1 rounded h-25' placeholder='Abstract' type="text" />
                </div>
            </div>

            <div className='px-3'>
                {/* Book Publisher */}
                <div className='mb-3'>
                    <input className='w-full bg-white px-3 py-1 rounded' placeholder='Publisher' type="text" />
                </div>
                {/* ISBN */}
                <div className='mb-3'>
                    <input className='w-full bg-white px-3 py-1 rounded' placeholder='ISBN' type="text" />
                </div>
                {/* Book Language */}
                <div className='mb-3'>
                    <input className='w-full bg-white px-3 py-1 rounded' placeholder='Language' type="text" />
                </div>
                {/* Category */}
                <div className='mb-3'>
                    <input className='w-full bg-white px-3 py-1 rounded' placeholder='Category' type="text" />
                </div>

                {/* Upload Book Image */}
                <div className='flex justify-center mt-5'>
                    <label htmlFor='BookImage'>
                        <input type="file" id='BookImage' hidden/>
                        <img className='w-40 h-40 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsq-DNC7Bdprknx10VFSaI_UrHk1vIFfrYWh_bPj3wfw&s=10" alt="Book File Not found!" />
                        <button className='bg-black text-white p-3 text-xl rounded ml-40 fixed -mt-5'></button>
                    </label>
                </div>
                {/* Preview Image */}
                <div className='flex justify-center items-center'>
                    <img className='w-30 h-30' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFPMa0TxF7lcpVSzXwwqNrPCX6TrA1ZGHKHk5C-ZlWUP45aesKsVldayo&s=10" alt="" />
                    <label htmlFor="BookUpload">
                        <input type="file" id='BookUpload' hidden/>
                        <FaPlus className='text-3xl ms-2'/>
                    </label>
                </div>
                
                
            </div>
            

        </div>
        <div className='flex md:justify-end mt-5 p-5 gap-5'>
            <button className='p-3 bg-blue-500 text-white font-medium  rounded'>Reset</button>
            <button className='p-3 bg-green-500 text-white font-medium  rounded'>Add Book</button>
        </div>

    </div>
  )
}

export default UploadBooks