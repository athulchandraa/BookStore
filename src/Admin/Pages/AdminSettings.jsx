import React from 'react'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'
import { FaPen } from 'react-icons/fa6'

function AdminSettings() {
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
                  <input type="file" id='userProfile' hidden/>
                  <div className='flex justify-center '>
                    <img width={'150px'} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
                  </div>
                    </label>
                    {/* username */}
                    <div className='mt-10 mb-3 w-full px-5'>
                        <input className='border w-full px-3 py-1 rounded border-gray-500' placeholder='Username' type="text" />
                    </div>
                    {/* New Password */}
                    <div className='mt-3 mb-3 w-full px-5'>
                        <input className='border w-full px-3 py-1 rounded border-gray-500' placeholder='New Password' type="text" />
                    </div>
                    {/* Confirm New password */}
                    <div className='mt-3 mb-3 w-full px-5'>
                        <input className='border w-full px-3 py-1 rounded border-gray-500' placeholder='Confirm Password' type="text" />
                    </div>
                    
                    {/* Reset and Update */}
                    <div className='flex justify-end w-full gap-5 mt-10 px-5'>
                        <button className='bg-yellow-600 px-3 py-1 rounded text-white font-medium'>Reset</button>
                        <button className='bg-green-600 px-3 py-1 rounded text-white font-medium'>Update</button>
                    </div>
                </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default AdminSettings