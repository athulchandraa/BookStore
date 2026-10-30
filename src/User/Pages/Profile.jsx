import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { FaCheckCircle } from 'react-icons/fa'
import Edit from '../Components/Edit'
import UploadBooks from '../Components/UploadBooks'
import BookStatus from '../Components/BookStatus'
import PurchaseHistory from '../Components/PurchaseHistory'
import axiosInstance from '../../Api/axiosInstance'


function Profile() {
  const[currentTab,setCurrentTab]=useState(1)
    const[token,setToken]=useState("")
   const[dp,setDp]=useState("")
   const[bio,setBio]=useState("")
   const[username,setUsername]=useState("")


    useEffect(()=>{
        if(sessionStorage.getItem("token") && sessionStorage.getItem("user")){
          const userToken=sessionStorage.getItem("token")
          const user=JSON.parse(sessionStorage.getItem("user"))
          setToken(userToken)
          setDp(user.picture)
          setBio(user.bio)
          setUsername(user.username)
        }
      },[token])
      console.log(dp);
      


  return (
    <>
      <Header/>
      <div style={{height:'200px'}} className='bg-black'></div>
        <div style={{width:'230px',height:'230px',borderRadius:'50%',marginTop:'-120px',marginLeft:'60px'}} className='bg-white flex justify-center'>
          <img className='' src={dp=="" ? "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" : dp.startsWith("https://lh3.googleusercontent.com/") ? dp : `${axiosInstance.defaults.baseURL}/Uploadss/${dp}`} style={{width:'260px',height:'240px',borderRadius:'50%',marginLeft:'20px'}} alt="" />
        </div>
        <div className="md:flex justify-between px-5">
          <div className="flex items-center">
            <p>{username}</p>
            <FaCheckCircle className='text-blue-700 ms-3'/>
          </div>
          <div>
            <Edit/>
          </div>
        </div>
        <p className='text-xl font-bold px-5 mt-3'>Bio</p>
        <p className='text-justify ms:px-20 px-5 my-5'>{bio ? bio : "No Bio"}</p>
      <div className='md:px-40'>
        {/* Tabs */}
        <div className='flex justify-center items-center my-8 text-lg font-medium'>
          <p onClick={()=>setCurrentTab(1)} className={currentTab ==1 ? 'p-4 border-gray-200  border-t border-r rounded cursor-pointer' : 'p-4 border-gray-200  border-b border-r rounded cursor-pointer'}>Upload Books</p>
          <p onClick={()=>setCurrentTab(2)} className={currentTab ==2 ? 'p-4 border-gray-200  border-t border-r rounded cursor-pointer' : 'p-4 border-gray-200  border-b border-r rounded cursor-pointer'}>Upload Book Status</p>
          <p onClick={()=>setCurrentTab(3)} className={currentTab ==3 ? 'p-4 border-gray-200  border-t border-r rounded cursor-pointer' : 'p-4 border-gray-200  border-b border-r rounded cursor-pointer'}>Purchase History</p>
        </div>
        <div>
        {
          currentTab==1 && 
          <div>
            <UploadBooks/>
          </div>
        }
        {
          currentTab==2 &&
          <div>
            <BookStatus/>
          </div>
        }
        {
          currentTab==3 &&
          <div>
            <PurchaseHistory/>
          </div>
        }
      </div>
      </div>

      
    </>
  )
}

export default Profile