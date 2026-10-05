import React, { useState } from 'react'
import AdminSidebar from '../Components/AdminSidebar'
import AdminHeader from '../Components/AdminHeader'

function AdminResource() {
    const[currentTab,setCurrentTab]=useState(1)

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
          <div className='shadow rounded p-3 m-4 md:my-0'>
            <img width={'100%'} height={'300px'} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1734004864" alt="" />
            <div className='flex flex-col justify-center items-center'>
              <p className='text-blue-600 font-medium text-xl'>Author</p>
              <p className='text-xl'>Title</p>
              <p className='text-xl text-red-600 font-medium'>Price</p>
              {/* Approve Btn */}
              <button className='bg-green-600 px-3 text-white py-1 mt-2 w-full font-medium rounded'>Approve</button>
            </div>
          </div>
        </div>
        }
        {
          currentTab==2 &&
          <div>
          <div className='md:grid grid-cols-3 md:my-0'>
            {/* Duplicating Cards */}
            <div className='bg-blue-100 rounded p-3 m-4 md:my-0'>
              <p className='text-red-600 font-medium mb-5'>ID : </p>
              <div className='flex items-center gap-10 '>
                <div className='flex justify-center items-center'>
                  <img className='w-20 h-20 rounded-full' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1734004864" alt="" />
                </div>
                <div className='flex flex-col'>
                  <p className='text-blue-600 font-medium text-md'>Username</p>
                  <p className='text-xs'>Mail</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        }
       
      </div>
      </div>

      </div>
    </>
  )
}

export default AdminResource