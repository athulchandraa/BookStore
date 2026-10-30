import React, { useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'
import { getUserPurchasedBooks } from '../../allApiService';



function PurchaseHistory() {
    const[purchaseBooks,setPurchaseBooks]=([])
    console.log(purchaseBooks);

    useEffect(()=>{
        getPurchasedBooks()
    },[])

    const getPurchasedBooks=async()=>{
        const result=await getUserPurchasedBooks()
        setPurchaseBooks(result.data)
    }
    
  return (
        <div className='p-10 my-15 shadow rounded'>
        {/* Duplicate */}
        {
            purchaseBooks?.length >0 ?
            purchaseBooks.map(item=>(
                <div className='p-5 rounded mt-4 shadow'>
            <div className='md:grid grid-cols-[3fr_1fr]'>
                <div className='px-4'>
                    <p className='text-2xl'>{item.title}</p>
                    <p className='text-xl'>{item.author}</p>
                    <p className='text-lg text-blue-700'>$ {item.discounrPrice}</p>
                    <p className='text-justify'>{item.abstract}</p>
                    {/* Status Image */}
                    <div className='flex my-3'> 
                        {/* Pending */}
                        {/* <img className='w-40 rounded-full h-40' src="https://t4.ftcdn.net/jpg/15/42/78/73/360_F_1542787314_EJF9wn3UH9Nd8BvShQ6VSKKYgaSQByuS.png" alt="" />
                        <img className='w-40 h-40 rounded-full' src="https://png.pngtree.com/png-vector/20221009/ourmid/pngtree-original-approved-stamp-and-badget-design-red-grunge-png-image_6293837.png" alt="" />
                        <img className='w-40 h-40 rounded-full' src="https://png.pngtree.com/png-vector/20250506/ourmid/pngtree-rounded-sold-out-label-with-stamp-effect-for-product-availability-of-vector-png-image_16083971.png" alt="" /> */}
                        <img className='w-40 h-40 rounded-full' src="https://static.vecteezy.com/system/resources/previews/023/629/698/non_2x/web-button-icon-purchase-button-free-png.png" alt="" />
                    </div>

                </div>
                <div className='px-4 mt-4 md:mt-0'>
                    <img className='w-50 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsdo5fnB0yhnhydc-4vAKWgQmd1itUpZRc4LzMnM6GiUiGfNgmQrhCeA&s=10" alt="" />
                    
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

export default PurchaseHistory