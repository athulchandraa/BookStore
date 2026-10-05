import React, { useState } from 'react'
import Header from '../Components/Header'
import { FaCheckCircle } from 'react-icons/fa'
import Edit from '../Components/Edit'
import UploadBooks from '../Components/UploadBooks'
import BookStatus from '../Components/BookStatus'
import PurchaseHistory from '../Components/PurchaseHistory'

function Profile() {
  const[currentTab,setCurrentTab]=useState(1)
  return (
    <>
      <Header/>
      <div style={{height:'200px'}} className='bg-black'></div>
        <div style={{width:'230px',height:'230px',borderRadius:'50%',marginTop:'-120px',marginLeft:'60px'}} className='bg-white flex justify-center'>
          <img className='' src="https://img.magnific.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-875.jpg" style={{width:'260px',height:'240px',borderRadius:'50%',marginLeft:'20px'}} alt="" />
        </div>
        <div className="md:flex justify-between px-5">
          <div className="flex items-center">
            <p>Username</p>
            <FaCheckCircle className='text-blue-700 ms-3'/>
          </div>
          <div>
            <Edit/>
          </div>
        </div>
        <p className='text-xl font-bold px-5 mt-3'>Bio</p>
        <p className='text-justify ms:px-20 px-5 my-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia doloribus recusandae nemo ullam unde et, incidunt eius aspernatur exercitationem, odio excepturi corporis corrupti fugiat quaerat ipsam, nesciunt voluptates nam atque.
        Quos similique ducimus alias, neque quidem harum omnis error sunt blanditiis. Aliquam, animi aspernatur quos provident maiores esse, dolore praesentium illo temporibus nemo tempora. Quidem debitis veritatis vel cupiditate natus?
        Ex expedita ad, nam porro a ut consequatur. Alias ipsum suscipit error fuga molestiae reiciendis, accusamus tempore aspernatur repudiandae obcaecati, soluta magni blanditiis voluptatibus eum nam omnis ipsam officia totam.
        Eum, labore dolorum. Veniam debitis error culpa quis quas saepe quo unde ullam dignissimos sapiente! Aspernatur distinctio a deleniti totam nam. Et placeat quos cumque esse minus in aspernatur aliquid?
        Harum, iste? Nemo cumque architecto est, cum dignissimos quam deleniti repellendus fugiat optio vero ea ab aspernatur impedit. Voluptates eum vitae reiciendis? Corporis, nostrum? Enim accusamus inventore distinctio ullam sunt.
        Ipsum mollitia odit commodi quidem aut placeat beatae reprehenderit dolor. Natus quisquam illo non hic unde, corporis consequuntur dolores dolore quaerat commodi molestias, quibusdam odit tenetur soluta qui incidunt quis.</p>
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