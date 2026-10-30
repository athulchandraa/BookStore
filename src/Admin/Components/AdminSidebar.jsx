import React, { useEffect, useState } from 'react'
import { FaGear } from 'react-icons/fa6'
import { GoGraph } from 'react-icons/go'
import { GrResources } from 'react-icons/gr'
import { MdGraphicEq } from 'react-icons/md'
import { Link } from 'react-router-dom'
import axiosInstance from '../../Api/axiosInstance'


function AdminSidebar() {

    const[username,setUsername]=useState("")
    const[dp,setDp]=useState("")

        useEffect(()=>{
            if(sessionStorage.getItem("token") && sessionStorage.getItem("user")){
              const userToken=sessionStorage.getItem("token")
              const user=JSON.parse(sessionStorage.getItem("user"))
              setDp(user.picture)
              setUsername(user?.username)
            }
          },[])

  return (
    <div className='bg-blue-100 md:min-h-screen h-fit'>
      {/* Image */}
      <div className='flex justify-center '>
        <img width={'100px'} src={dp=="" ? "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" : dp.startsWith("https://lh3.googleusercontent.com/") ? dp : `${axiosInstance.defaults.baseURL}/Uploadss/${dp}`} alt="" />
      </div>
      <div className='flex justify-center'>
        <p className='text-xl font-medium'>{username}</p>
      </div>
      {/* Links */}
      <div className='p-15'>
        <div className='my-2'>
          <Link to={'/admin'} className='text-xl font-medium flex items-center gap-3'><GoGraph/>DashBoard</Link>
        </div>
        <div className='my-2'><Link to={'/admin/resources'} className='text-xl font-medium flex items-center gap-3'><GrResources/>Resources</Link></div>
        <div className='my-2'><Link to={'/admin/settings'} className='text-xl font-medium flex items-center gap-3'><FaGear/>Settings</Link></div>
      </div>
    </div>
  )
}

export default AdminSidebar