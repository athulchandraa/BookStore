import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { addBookAPI, getBookDetailsAPI } from '../../allApiService'
import useDebounce from '../../hooks/useDebounce'


function UploadBooks() {

    const [bookDetails,setBookDetails]=useState({
        title:"",author:"",imageURL:"",pages:"",price:"",discountPrice:"",abstract:"",publisher:"",isbn:"",language:"",category:"",uploadImages:[]
    })
    const [preview,setPreview]=useState("")  
    const[previewList,setPreviewList]=useState([])
    const debounceTitleSearch=useDebounce(bookDetails.title,2000)

    useEffect(()=>{
        if(debounceTitleSearch){
            console.log("GEMINI API CALL");
            generateBookAbstractAI()
        }
    },[debounceTitleSearch])

       const generateBookAbstractAI=async()=>{
            try{
                const result=await getBookDetailsAPI(debounceTitleSearch)
                if(result.data?.content){
                    setBookDetails({...bookDetails,abstract:result.data.content.abstract})
                }else{
                    console.log("Abstract not Found in API Response : ",result.data)
                }
            }catch(err){
                console.error("Error is generating Book Abstract ",err.response.data || err.message);
            }
   }

    // console.log(bookDetails);

    const handleUploadImage=(e)=>{
        const imageFile=e.target.files[0]
        const uploadedImageArray=bookDetails.uploadImages
        uploadedImageArray.push(imageFile)
        setBookDetails({...bookDetails,uploadImages:uploadedImageArray})
        const url=URL.createObjectURL(imageFile)
        setPreview(url)
        const demoPreviewList=previewList
        demoPreviewList.push(url)
        setPreviewList(demoPreviewList)
    }

   const handleReset=()=>{
    setBookDetails({title:"",author:"",imageURL:"",pages:"",price:"",discountPrice:"",abstract:"",publisher:"",isbn:"",language:"",category:"",uploadImages:[]})
    setPreviewList([])
    setPreview("")
   }
    
   const handleAddBook=async()=>{
    const{title,author,imageURL,pages,price,discountPrice,abstract,publisher,isbn,language,category,uploadImages,sellerMail}=bookDetails

    if(!title||!author||!imageURL||!pages||!price||!discountPrice||!abstract||!publisher||!isbn||!language||!category||uploadImages.length==0){
        toast.info("Please fill the form Completely")
    }else{
        //API CALL
        const reqBody=new FormData()
        for(let key in bookDetails){
            if(key!="uploadImages"){
                reqBody.append(key,bookDetails[key])
            }else{
                bookDetails.uploadImages.forEach(imageFile=>{
                    reqBody.append("uploadImages",imageFile)
                })
            }
        }
        const result=await addBookAPI(reqBody)
        console.log(result);
        if(result.status==201){
            toast.success("Book added Succesfully")
        }else{
            toast.warning(result)
        }
        handleReset()
    }
   }



  return (
    <div className='p-10 my-20 mx-5 bg-gray-200'>
        <p className='text-center font-medium text-3xl'>Upload Book Details</p>
        <div className='md:grid grid-cols-2 mt-10 w-full'>
            <div className='px-3'>
                {/* Book Title */}
                <div className='mb-3'>
                    <input value={bookDetails.title} onChange={(e)=>setBookDetails({...bookDetails,title:e.target.value})} className='w-full bg-white px-3 py-1 rounded' placeholder='Book Title' type="text" />
                </div>
                {/* Author */}
                <div className='mb-3'>
                    <input value={bookDetails.author} onChange={(e)=>setBookDetails({...bookDetails,author:e.target.value})} className='w-full bg-white px-3 py-1 rounded' placeholder='Author' type="text" />
                </div>
                {/* Book Cover */}
                <div className='mb-3'>
                    <input value={bookDetails.imageURL} onChange={(e)=>setBookDetails({...bookDetails,imageURL:e.target.value})} className='w-full bg-white px-3 py-1 rounded' placeholder='Book Cover page URL' type="text" />
                </div>
                {/* Total Pages */}
                <div className='mb-3'>
                    <input value={bookDetails.pages} onChange={(e)=>setBookDetails({...bookDetails,pages:e.target.value})} className='w-full bg-white px-3 py-1 rounded' placeholder='Total Pages' type="text" />
                </div>
                {/* Original Price */}
                <div className='mb-3'>
                    <input value={bookDetails.price} onChange={(e)=>setBookDetails({...bookDetails,price:e.target.value})} className='w-full bg-white px-3 py-1 rounded' placeholder='Original Price' type="text" />
                </div>
                {/* Discount Price */}
                <div className='mb-3'>
                    <input value={bookDetails.discountPrice} onChange={(e)=>setBookDetails({...bookDetails,discountPrice:e.target.value})} className='w-full bg-white px-3 py-1 rounded' placeholder='Discount Price' type="text" />
                </div>
                {/* Abstract */}
                <div className='mb-3'>
                    <textarea value={bookDetails.abstract} onChange={(e)=>setBookDetails({...bookDetails,abstract:e.target.value})} className='w-full bg-white px-3 py-1 rounded h-25' placeholder='Abstract' type="text" />
                </div>
            </div>

            <div className='px-3'>
                {/* Book Publisher */}
                <div className='mb-3'>
                    <input value={bookDetails.publisher} onChange={(e)=>setBookDetails({...bookDetails,publisher:e.target.value})} className='w-full bg-white px-3 py-1 rounded' placeholder='Publisher' type="text" />
                </div>
                {/* ISBN */}
                <div className='mb-3'>
                    <input value={bookDetails.isbn} onChange={(e)=>setBookDetails({...bookDetails,isbn:e.target.value})} className='w-full bg-white px-3 py-1 rounded' placeholder='ISBN' type="text" />
                </div>
                {/* Book Language */}
                <div className='mb-3'>
                    <input value={bookDetails.language} onChange={(e)=>setBookDetails({...bookDetails,language:e.target.value})} className='w-full bg-white px-3 py-1 rounded' placeholder='Language' type="text" />
                </div>
                {/* Category */}
                <div className='mb-3'>
                    <input value={bookDetails.category} onChange={(e)=>setBookDetails({...bookDetails,category:e.target.value})} className='w-full bg-white px-3 py-1 rounded' placeholder='Category' type="text" />
                </div>

                {/* Upload Book Image */}
                <div className='flex justify-center mt-5'>
                    <label htmlFor='BookImage'>
                        <input onChange={(e)=>handleUploadImage(e)} type="file" id='BookImage' hidden/>
                        <img className='w-40 h-40 rounded-full' src={preview ? preview : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsq-DNC7Bdprknx10VFSaI_UrHk1vIFfrYWh_bPj3wfw&s=10"} alt="Book File Not found!" />
                        <button className='bg-black text-white p-3 text-xl rounded ml-40 fixed -mt-5'></button>
                    </label>
                </div>
                {/* Preview Image */}
                {
                    preview &&
                    <div className='flex justify-center items-center'>
                    {
                       previewList?.map((imageURL,index)=>(
                        <img key={index} className='w-30 h-30 mt-5 mx-2' src={imageURL} alt="" />
                       ))
                    }
                    {
                        previewList.length<3 &&
                        <label htmlFor="BookUpload">
                        <input onChange={(e)=>handleUploadImage(e)} type="file" id='BookUpload' hidden/>
                        <FaPlus className='text-3xl ms-2'/>
                    </label>}
                </div>}
                
                
            </div>
            

        </div>
        <div className='flex md:justify-end mt-5 p-5 gap-5'>
            <button onClick={handleReset} className='p-3 bg-blue-500 text-white font-medium  rounded'>Reset</button>
            <button onClick={handleAddBook} className='p-3 bg-green-500 text-white font-medium  rounded'>Add Book</button>
        </div>
        {/* Toast Container */}
        <ToastContainer
            position="top-center"
            autoClose={3000}
            theme="colored"
            transition={Bounce}
        />

    </div>
  )
}

export default UploadBooks