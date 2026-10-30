import React, { useEffect, useState } from 'react'
import { deleteUploadedBook, getUserBooks } from '../../allApiService'

function BookStatus() {

    const [uploadBooks,setUploadBooks]=useState([])
    console.log(uploadBooks);

    useEffect(()=>{
        getUploadBooks()
    },[])
    

    const getUploadBooks=async()=>{
        const result=await getUserBooks()
        setUploadBooks(result.data)
    }

    const deleteBook=async(id)=>{
        const result=await deleteUploadedBook(id)
        getUploadBooks()
    }

  return (
    <div className='p-10 my-15 shadow rounded'>
        {/* Duplicate */}
        {
            uploadBooks.length>0 ?
            uploadBooks.map(item=>(
                <div key={item.id} className='p-5 rounded mt-4 bg-blue-100'>
            <div className='md:grid grid-cols-[3fr_1fr]'>
                <div className='px-4'>
                    <p className='text-2xl'>{item.title}</p>
                    <p className='text-xl'>{item.author}</p>
                    <p className='text-lg text-blue-700'>$ {item.discountPrice}</p>
                    <p className='text-justify'>{item.abstract}</p>
                    {/* Status Image */}
                    <div className='flex my-3'> 
                        {/* Pending */}
                        {item.status=="Pending" ? <img className='w-40 rounded-full h-40' src="https://t4.ftcdn.net/jpg/15/42/78/73/360_F_1542787314_EJF9wn3UH9Nd8BvShQ6VSKKYgaSQByuS.png" alt="" /> :
                        item.status=="approve" ? <img className='w-40 h-40 rounded-full' src="https://png.pngtree.com/png-vector/20221009/ourmid/pngtree-original-approved-stamp-and-badget-design-red-grunge-png-image_6293837.png" alt="" /> :
                        <img className='w-40 h-40 rounded-full' src="https://png.pngtree.com/png-vector/20250506/ourmid/pngtree-rounded-sold-out-label-with-stamp-effect-for-product-availability-of-vector-png-image_16083971.png" alt="" />}
                    </div>

                </div>
                <div className='px-4 mt-4 md:mt-0'>
                    <img className='w-50 ' src={item.imageURL} alt="" />
                    <div className='flex justify-end px-9'>
                        <button onClick={()=>deleteBook(item?._id)} className='bg-red-600 px-3 py-1 rounded text-white my-2'>DELETE</button>
                    </div>
                </div>

            </div>

        </div>
            ))
             :
        <div>
            No Books Found...
        </div>
        }

    </div>
  )
}

export default BookStatus