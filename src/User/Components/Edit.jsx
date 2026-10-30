import React, { useEffect, useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import axiosInstance from '../../Api/axiosInstance'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { userEditAPI } from '../../allApiService';
import { useNavigate } from 'react-router-dom';

function Edit() {
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
        setUserDetails({...userDetails,username:user.username,role:user.role,password:"",bio:user.bio,id:user._id})
        setExistingPicture(user.picture)
        setPreview("")
        setImageFile("")
        setPasswordMatch(false)
    }

    const handleUpdateUser=async ()=>{
        const{username,password,cPassword,bio,picture,role,id}=userDetails
        if(!username || !password || !cPassword || !bio){
            toast.info("Please fill the form Completely...")
        }else if(passwordMatch){
            const reqBody=new FormData()
            for(let key in userDetails){
                if(key !=picture){
                    reqBody.append(key,userDetails[key])
                }else{
                    preview ? reqBody.append("picture",picture) : reqBody.append("picture",existingPicture)
                }
            }
            console.log(userDetails);
            
            //api Call
            const result=await userEditAPI(id,reqBody)
            console.log(result);
            if(result.status==200){
                toast("User Details Updated Successfully...Please Login")
                setTimeout(()=>{
                    navigate('/login')
                },2500)
            }
            
        }
    }

    
    

  return (
    <div>
        <button onClick={()=>setOffCanvas(true)} className='flex items-center me-2 rounded gap-2 bg-black text-white px-3 py-1 hover:text-black hover:bg-white border cursor-pointer'><FaPen/>Edit</button>
        {/* Off Canvas */}
        {
            OffCanvas &&
            <div>
            <div className='fixed inset-0 bg-gray-400/75 w-full h-full'></div>
            <div className='bg-white h-full w-90 z-50 fixed top-0 left-0'>
                <div className='bg-black px-3 py-4 flex justify-between items-center text-2xl text-white'>
                    <p>Update User Profile</p>
                    <FaX onClick={()=>setOffCanvas(false)}/>
                </div>
                {/* Body */}
                <div className='flex flex-col items-center justify-center'>
                    <label htmlFor='userProfile'>
                        <input onChange={(e)=>handleFileUpload(e)} type="file" id='userProfile' hidden/>
                        {
                        existingPicture==""?
                            <img className='w-50 h-50 rounded-full' src={preview ? preview : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTwJeq7SUFlnuAgtklwChPpzhuQqNS8pz830n5dpEWQ&s"} alt="" />
                            :
                            <img className='w-50 h-50 rounded-full' src={preview ? preview : existingPicture.startsWith("https://lh3.googleusercontent.com/") ? existingPicture : `${axiosInstance.defaults.baseURL}/Uploadss/${existingPicture}`} alt="" />
                    }
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
                    {/* Bio */}
                    <div className='mt-3 mb-3 w-full px-5'>
                        <input value={userDetails.bio} onChange={(e)=>setUserDetails({...userDetails,bio:e.target.value})} className='border w-full px-3 py-1 rounded border-gray-500' placeholder='Bio' type="text" />
                    </div>
                    {/* Reset and Update */}
                    <div className='flex justify-end w-full gap-5 mt-10 px-5'>
                        <button onClick={resetProfile} className='bg-yellow-600 px-3 py-1 rounded text-white font-medium'>Reset</button>
                        <button onClick={handleUpdateUser} className='bg-green-600 px-3 py-1 rounded text-white font-medium'>Update</button>
                    </div>
                </div>

                
            </div>
        </div>}
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

export default Edit