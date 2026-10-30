import React, { useEffect, useState } from 'react'
import AdminSidebar from '../Components/AdminSidebar'
import AdminHeader from '../Components/AdminHeader'
import { getAllBooksAPI, getAllUsers, updateBookStatusAPI } from '../../allApiService'
import axiosInstance from '../../Api/axiosInstance'
import { Bounce, toast, ToastContainer } from 'react-toastify'



function AdminResource() {
    const[currentTab,setCurrentTab]=useState(1)
    const[usersList,setUsersList]=useState([])
    const [allBooks,setAllBooks]=useState([])
    console.log(usersList);
    console.log(allBooks);
    

    useEffect(()=>{
      if(currentTab==2){
        getAllUsersList()
      }else{
        getAllBooksList()
      }
    },[currentTab])
    

    const getAllUsersList=async()=>{
      const result=await getAllUsers()
      if(result.status==200){
        setUsersList(result.data)
      }
    }

      const getAllBooksList=async()=>{
      const result=await getAllBooksAPI()
      if(result.status==200){
        setAllBooks(result.data)
      }
    }

    const updateBookStatus=async(id)=>{
      console.log(id);
      
      const result=await updateBookStatusAPI(id)
      if(result.status==200){
        toast.success("Book Updated Success")
        getAllBooksList()
      }
    }

  return (
     <>
      <AdminHeader/>
      <div className='md:grid grid-cols-5 gap-2'>
        <div className='col-span-1'>
          <AdminSidebar/>
        </div>
        <div className='col-span-4 p-10'>
          <p className='text-3xl text-center font-medium'>All Resources</p>
        {/* Tabs */}
        <div className='flex justify-center items-center my-8 text-lg font-medium'>
          <p onClick={()=>setCurrentTab(1)} className={currentTab ==1 ? 'p-4 border-gray-200  border-t border-r rounded cursor-pointer' : 'p-4 border-gray-200  border-b border-r rounded cursor-pointer'}>Books</p>
          <p onClick={()=>setCurrentTab(2)} className={currentTab ==2 ? 'p-4 border-gray-200  border-t border-r rounded cursor-pointer' : 'p-4 border-gray-200  border-b border-r rounded cursor-pointer'}>Users</p>
        </div>
        <div>
        {
          currentTab==1 && 
          <div className='md:grid grid-cols-4 md:my-0'>
          {/* Duplicating Cards */}
          {
            allBooks.length>0 ?
            allBooks.map(item=>(
              <div key={item._id} className='shadow rounded p-3 m-4 md:my-0'>
            <img width={'100%'} height={'300px'} src={item?.imageURL} alt="" />
            <div className='flex flex-col justify-center items-center'>
              <p className='text-blue-600 font-medium text-xl'>{item.author}</p>
              <p className='text-xl'>{item.title}</p>
              <p className='text-xl text-red-600 font-medium'>{item.status}</p>
              {/* Approve Btn */}
              { 
              item?.status=="Pending" ?
                <button onClick={()=>updateBookStatus(item._id)} className='bg-green-600 px-3 text-white py-1 mt-2 w-full font-medium rounded'>Approve</button> :
                <div>
                  <img className='w-10' src="https://png.pngtree.com/png-vector/20250408/ourmid/pngtree-correct-icon-vector-with-transparent-background-png-image_15946021.png" alt="" />
                </div>
                }
            </div>
          </div>
            ))
             :
          <div>
            No Books Found
          </div>
          }
        </div>
        }
        {
          currentTab==2 &&
          <div>
          <div className='md:grid grid-cols-3 md:my-0'>
            {/* Duplicating Cards */}
            {
              usersList.length>0 ? 
              usersList?.map(item=>(
                <div className='bg-blue-100 rounded p-3 m-4 md:my-0'>
              <p className='text-red-600 font-medium mb-5'>ID : {item._id} </p>
              <div className='flex items-center gap-10 '>
                <div className='flex justify-center items-center'>
                  <img className='w-20 h-20 rounded-full' src={item.picture=="" ? "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" : item.picture.startsWith("https://lh3.googleusercontent.com/") ? item.picture : `${axiosInstance.defaults.baseURL}/Uploadss/${item.picture}`} alt="" />
                </div>
                <div className='flex flex-col'>
                  <p className='text-blue-600 font-medium text-md'>{item.username}</p>
                  <p className='text-xs'>{item.email}</p>
                </div>
              </div>
            </div>
              )) :
              <div>
                No Users Found
              </div>
              }
          </div>
          </div>
        }
       
      </div>
      </div>

       {/* Toast Container */}
      <ToastContainer
      position="top-center"
      autoClose={3000}
      theme="colored"
      transition={Bounce}
      />

      </div>
    </>
  )
}

export default AdminResource