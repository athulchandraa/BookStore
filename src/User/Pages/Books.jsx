import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Header'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { getAllBooks } from '../../allApiService'
import { searchContext } from '../../contextAPI/ShareContext'


function Books() {

  const [toggle,setToggle]=useState(false)
  const[token,setToken]=useState("")
  const[allBooks,setAllBooks]=useState([])
  const[categoryList,setCategoryList]=useState([])
  const[dummyAllBooks,setDummyAllBooks]=useState([])
    console.log(categoryList);

    const{searchKey,setSearchKey}=useContext(searchContext)

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
    const userToken=sessionStorage.getItem("token")
    setToken(userToken)
    getBooks()
  }
  },[searchKey])

  const getBooks=async()=>{
    const result=await getAllBooks(searchKey)
    setAllBooks(result.data);
    setDummyAllBooks(result.data)
    const tempCategory=result.data?.map(item=>item.category)
    setCategoryList([...new Set(tempCategory)])
  }

  const filterBooks=(category)=>{
    if(category !="all"){
      setAllBooks(dummyAllBooks.filter(item=>item.category==category))
    }else{
      getBooks()
    }
   }

  return (
    <>
      <Header/>
     { token ?
      <>
        <div className='flex flex-col justify-center items-center my-5'>
          <p className='text-3xl font-bold my-5'>All Books</p>
          <div className='flex my-5'>
            <input value={searchKey} onChange={(e)=>setSearchKey(e.target.value)} className='p-2 border border-gray-200 w-100 rounded-s px-3' type="text" placeholder='Search by Book Title' />
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
                  <input onClick={()=>filterBooks("all")} type="radio" name='filter' id="all" />
                  <label htmlFor="no-filter" className='ms-3'>All</label>
               </div>
               {/* Duplicate Filter Category */}
               {
                categoryList.map(item=>(
                  <div className='mt-3'>
                  <input onClick={()=>filterBooks(item)} type="radio" name='filter' id={item} />
                  <label htmlFor="no-filter" className='ms-3'>{item}</label>
               </div>
                ))
               }
              </div>
            </div>
            {/* Book Card */}
            <div className='col-span-3 '>

              <div className='md:grid grid-cols-4 md:my-0'>
          {/* Duplicating Cards */}
          {
            allBooks?.length>0 ?
            allBooks.map(item=>(
              <div key={item?.id} className='shadow rounded p-3 m-4 md:my-0'>
            <img width={'100%'} height={'300px'} src={item?.imageURL} alt="" />
            <div className='flex flex-col justify-center items-center'>
              <p className='text-blue-600 font-medium text-xl'>{item?.title}</p>
              <p className='text-md'>{item?.author}</p>
              <Link to={`/books/${item?._id}`} className='px-3 py-1.5 bg-blue-600 rounded text-white font-medium'>View Book</Link>
            </div>
          </div>
            ))
          :
          <div className='text-center font-medium my-5'>
            No Books Found!!
          </div>
          }
        </div>

            </div>
            </div>
        
      </>
      :
      <div>
        <div className='flex flex-col items-center my-2'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGirznB1IzuqWaYRpMQfw5EYcvy2Hc9B72GpAmuxu6eJwaZyerPqacaTy&s=10" alt="" />
              <p>Access Only for Logined Users...</p>
              <Link to={'/login'} className='px-3 py-1 bg-gray-600 text-white font-medium rounded shadow'>Login</Link>
            </div>
      </div>}
    </>
  )
}

export default Books