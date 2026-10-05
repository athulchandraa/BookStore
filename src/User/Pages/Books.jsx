import React, { useState } from 'react'
import Header from '../Components/Header'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Books() {

  const [toggle,setToggle]=useState(false)
  return (
    <>
      <Header/>
      <>
        <div className='flex flex-col justify-center items-center my-5'>
          <p className='text-3xl font-bold my-5'>All Books</p>
          <div className='flex my-5'>
            <input  className='p-2 border border-gray-200 w-100 rounded-s px-3' type="text" placeholder='Search by Book Title' />
            <button className='p-2 bg-blue-800 text-white cursor-pointer '>Search</button>
          </div>
          </div>
          {/* Grid Filter & Cards*/}
            <div className='md:grid grid-cols-4 p-5 md:px-40 mb-10'>
            {/* Filter */}
            <div className='col-span-1 '>
              <div className='flex justify-between'>
                <p className='text-2xl font-bold'>Filter</p>
                <button onClick={()=>setToggle(!toggle)} className='font-bold text-2xl md:hidden'><FaBars/></button>
              </div>
              {/* Filter Category */}
              <div className={toggle ? "block" : "hidden md:block"}>
               <div className='mt-3'>
                  <input type="radio" name='filter' id='no-filter' />
                  <label htmlFor="no-filter" className='ms-3'>No Filter</label>
               </div>
              </div>
            </div>
            {/* Book Card */}
            <div className='col-span-3 '>

              <div className='md:grid grid-cols-4 md:my-0'>
          {/* Duplicating Cards */}
          <div className='shadow rounded p-3 m-4 md:my-0'>
            <img width={'100%'} height={'300px'} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1734004864" alt="" />
            <div className='flex flex-col justify-center items-center'>
              <p className='text-blue-600 font-medium text-xl'>Author</p>
              <p className='text-xl'>Title</p>
              <Link to={'/books/:id'} className='px-3 py-1.5 bg-blue-600 rounded text-white font-medium'>View Book</Link>
            </div>
          </div>
        </div>

            </div>
            </div>
        
      </>
    </>
  )
}

export default Books