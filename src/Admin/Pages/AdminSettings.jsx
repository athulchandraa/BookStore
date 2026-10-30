import React, { useEffect, useState } from 'react'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'
import { FaPen } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../Api/axiosInstance'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { editAdminApi } from '../../allApiService'
toast



function AdminSettings() {

  const [OffCanvas,setOffCanvas]=useState(false)
      const [userDetails,setUserDetails]=useState({
          username:"",password:"",cPassword:"",bio:"",picture:"",role:"",id:""
      })
      const navigate=useNavigate()
      const [existingPicture,setExistingPicture]=useState("")
      const[preview,setPreview]=useState("")
      const [passwordMatch,setPasswordMatch]=useState(true)
      const [imageFile,setImageFile]=useState(false)


       useEffect(()=>{
              if(sessionStorage.getItem("user")){
                  const user=JSON.parse(sessionStorage.getItem("user"))
                  setUserDetails({...userDetails,username:user.username,role:user.role,password:"",bio:user.bio,id:user._id})
                  setExistingPicture(user.picture)
              }
          },[])
      
          console.log(userDetails);
          console.log(existingPicture);
      
          const handleFileUpload=(e)=>{
      
              const imgFile=e.target.files[0]
              if(imgFile.type.startsWith("image/")){
                  setUserDetails({...userDetails,picture:e.target.files[0]})
                  const url=URL.createObjectURL(e.target.files[0])
                  console.log(url);
                  setPreview(url)
                  setImageFile(true)
              }else{
                  setImageFile(false)
              }
          }
      
          const checkPassword=(data)=>{
              setUserDetails({...userDetails,cPassword:data})
              userDetails?.password==data ? setPasswordMatch(true): setPasswordMatch(false)
          }
      
          const resetProfile=()=>{
               const user=JSON.parse(sessionStorage.getItem("user"))
              setUserDetails({...userDetails,username:user.username,role:user.role,password:"",cPassword:"",bio:user.bio,id:user._id})
              setExistingPicture(user.picture)
              setPreview("")
              setImageFile("")
              setPasswordMatch(false)
              
          }
      
          const handleUpdateUser=async ()=>{
              const{username,password,cPassword,bio,picture,role,id}=userDetails
              if(!username || !password || !cPassword){
                  toast.info("Please fill the form Completely...")
              }else if(passwordMatch){
                  const reqBody=new FormData()
                  for(let key in userDetails){
                      if(key !="picture"){
                          reqBody.append(key,userDetails[key])
                      }else{
                          preview ? reqBody.append("picture",picture) : reqBody.append("picture",existingPicture)
                      }
                  }
                  console.log(userDetails);
                  
                  //api Call
                  const result=await editAdminApi(id,reqBody)
                  console.log(result);
                  if(result.status==200){
                      toast.success("Admin Details Updated Successfully...Please Login")
                      setTimeout(()=>{
                          navigate('/login')
                      },2500)
                  }
                  
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
          <p className='text-3xl font-bold text-center mb-10 mt-5'>Settings</p>
          <div className='md:grid grid-cols-2'>
            <div className=''>
              <p className='text-xl mb-5 font-bold'>Welcome, Admin 👋</p>
              <p className='text-justify'>This is your personal administration space where you can manage your account details, system preferences, and platform roles with ease. From here, you can update essential information such as your username, password, contact details, and notification preferences — ensuring your access remains secure and personalized.</p>
              <p className='text-lg my-5 font-medium'>🔧 What You Can Manage in This Section:</p>
              <ul>
                <li>✏️ Update personal details (name, email, role, profile picture)</li>
                <li>🔐 Change or reset your password</li>
                <li>📢 Configure notification and alert preferences</li>
                <li>👥 Manage permissions based on assigned access leave</li>
                <li>🧩 Customize dashboard visibility and layout</li>
              </ul>
              <p className='my-5 text-justify'>Your profile settings help ensure your administrative tools work the way you need them to — securely, efficiently, and with complete control. Thank you for keeping the platform organized and running smoothly. Continue managing, updating, and improving the system — one step at a time. 🚀📚</p>
            </div>
            {/* Edit Profile */}
            <div className='flex flex-col items-center justify-center m-5 p-3 bg-blue-200 rounded shadow'>
              <label htmlFor='userProfile'>
                  <input onChange={(e)=>handleFileUpload(e)} type="file" id='userProfile' hidden/>
                  <div className='flex justify-center '>
                    {/* <img width={'150px'} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" /> */}
                    {
                        existingPicture==""?
                            <img className='w-50 h-50 rounded-full' src={preview ? preview : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTwJeq7SUFlnuAgtklwChPpzhuQqNS8pz830n5dpEWQ&s"} alt="" />
                            :
                            <img className='w-50 h-50 rounded-full' src={preview ? preview : existingPicture.startsWith("https://lh3.googleusercontent.com/") ? existingPicture : `${axiosInstance.defaults.baseURL}/Uploadss/${existingPicture}`} alt="" />
                    }
                  </div>
                    </label>
                     {!imageFile && 
                        <div className='mt-5 text-yellow-600'>
                            *Only Accept Image File
                        </div>
                    }  
                    {/* username */}
                    <div className='mt-10 mb-3 w-full px-5'>
                        <input value={userDetails.username} onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})} className='border w-full px-3 py-1 rounded border-gray-500' placeholder='Username' type="text" />
                    </div>
                    {/* New Password */}
                    <div className='mt-3 mb-3 w-full px-5'>
                        <input value={userDetails.password} onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})} className='border w-full px-3 py-1 rounded border-gray-500' placeholder='New Password' type="text" />
                    </div>
                    {/* Confirm New password */}
                    <div className='mt-3 mb-3 w-full px-5'>
                        <input value={userDetails.cPassword} onChange={(e)=>checkPassword(e.target.value)} className='border w-full px-3 py-1 rounded border-gray-500' placeholder='Confirm Password' type="text" />
                    </div>
                     {
                        !passwordMatch &&
                        <div className='mt-5 text-yellow-600'>
                            *Password not Matching...
                        </div>
                    }
                    
                    {/* Reset and Update */}
                    <div className='flex justify-end w-full gap-5 mt-10 px-5'>
                        <button onClick={resetProfile} className='bg-yellow-600 px-3 py-1 rounded text-white font-medium'>Reset</button>
                        <button onClick={handleUpdateUser} className='bg-green-600 px-3 py-1 rounded text-white font-medium'>Update</button>
                    </div>
                </div>

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

export default AdminSettings