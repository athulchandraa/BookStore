import React from 'react'
import { FaGear } from 'react-icons/fa6'
import { GoGraph } from 'react-icons/go'
import { GrResources } from 'react-icons/gr'
import { MdGraphicEq } from 'react-icons/md'
import { Link } from 'react-router-dom'


function AdminSidebar() {
  return (
    <div className='bg-blue-100 md:min-h-screen h-fit'>
      {/* Image */}
      <div className='flex justify-center '>
        <img width={'100px'} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
      </div>
      <div className='flex justify-center'>
        <p className='text-xl font-medium'>Book Store Admin</p>
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