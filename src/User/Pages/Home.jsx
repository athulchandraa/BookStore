import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaSearch } from 'react-icons/fa'
import { getHomeBooksAPI } from '../../allApiService'
import { Link, useNavigate } from 'react-router-dom'
import { searchContext } from '../../contextAPI/ShareContext'
import { Bounce, ToastContainer, toast } from 'react-toastify';


function Home() {

  const navigate=useNavigate()
  const{searchKey,setSearchKey}=useContext(searchContext)
  const[homeBooks,setHomeBooks]=useState([])
  console.log(homeBooks);

  console.log(searchKey);
  
  

  useEffect(()=>{
    getHomeBooks()
  },[])

  const getHomeBooks=async()=>{
    const result=await getHomeBooksAPI()
    if(result.status==200){
      setHomeBooks(result.data)
    }
  }

  const handleSearch=()=>{
    if(!searchKey){
      toast.warning("Plase enter Book Title...")
    }else if(!sessionStorage.getItem("token")){
      toast.warning("Please Login To Explore More...")
      setTimeout(()=>{
        navigate('/login')
      },2000)
    }else if(sessionStorage.getItem('token') && searchKey){
      navigate('/books')
    }else{
      toast.error("Something went Wrong...")
    }
  }

  return (
    <div>
      <Header/>
      {/* Hero */}
      <div style={{height:'500px'}} className='flex flex-col justify-center items-center bg-[url(/LandingBgImg.png)] bg-cover bg-center text-white'>
        <div style={{height:'500px',backgroundColor:'rgba(0,0,0,0.7)'}} className='w-full flex flex-col justify-center items-center'>
          <h1 className='text-6xl font-medium'>Wonderful Books</h1>
          <p className='text-lg'>Gift your family and friends a book</p>
          <div className='flex items-center mt-5'>
            <input onChange={(e)=>setSearchKey(e.target.value)} className='bg-white px-3 py-2 w-100 rounded-3xl text-black outline-blue-500' type="text" placeholder='Search a Book' />
            <FaSearch onClick={handleSearch} className='text-2xl text-gray-500 -ml-10 cursor-pointer'/>
          </div>
        </div>

      </div>
      {/* New Arrivals */}
      <section className='md:px-40 my-5 p-5 flex flex-col justify-center  items-center'>
        <h1 className='text-3xl font-medium'>New Arrivals</h1>
        <p className='text-3xl my-2'>Explore Our Latest Collections</p>
        <div className='md:grid grid-cols-4 md:my-0'>
          {/* Duplicating Cards */}
          {
            homeBooks.length>0 ?
              homeBooks?.map(book=>(
                <div className='shadow rounded p-3 m-4 md:my-0'>
                  <img width={'100%'} height={'300px'} src={book?.imageURL} alt="" />
                  <div className='flex flex-col justify-center items-center'>
                    <p className='text-blue-600 font-medium text-xl'>{book?.author}</p>
                    <p className='text-xl'>{book?.title}</p>
                    <p className='text-xl text-red-600 font-medium'>$ {book?.price}</p>
                  </div>
                </div>
              ))
            :
            <p>Loading....</p>
          }
          
        </div>
        {/* Explore More */}
        <Link to={'/books'} className='bg-black text-white px-3 py-2 rounded cursor-pointer my-2'>Explore More...</Link>
      </section>
      {/* Featured Authors */}
      <section className='md:grid grid-cols-2 justify-center item-center '>
        {/* Review */}
      <div className='p-3'>
        <p className='text-3xl mb-3 font-medium'>Featured Authors</p>

        <p className='mb-3'>Welcome to the Author Spotlight section of our bookstore website! This feature is designed to celebrate writers, showcase their creative journeys, and help readers discover the minds behind their favorite books.</p>
        <p> Our Author Features include:</p>
        <p><span className='font-medium'>✨ Author Profiles :</span> Get to know each author through detailed profiles that highlight their biography, writing style, achievements, and personal inspirations.</p>
        <p><span className='font-medium'>📖 Published Works :</span> Explore a curated list of books written by the author with quick access to book details, reviews, and purchase options.</p>
        <p>🎤 Interviews & Insights : Exclusive interviews, behind-the-scenes stories, and writing tips that offer a deeper look into the author’s creative world</p>
      </div>
      {/* Image */}
      <div className='flex justify-center mb-2'>
        <img className='h-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYwi-Yk_CnTzo_RAQxz25zpjsIQ8FxQ3rAGsHD7bsmCTe4JmRDga0RrM9N&s=10" alt="" />
      </div>
      </section>

      {/* Testimonials */}
      <section className='my-5'>
        <p className='text-center text-3xl font-medium'>TESTIMONIALS</p>
        <p className='text-center'>See what others Saying</p>
        <div className='flex justify-center'>
          <img  className=' w-50 h-50 rounded-full' src="https://i.pinimg.com/originals/d7/37/94/d737946d153beb56555ed95ab0af1ee1.jpg" alt="" />
        </div>
        <p className='text-center font-medium'>Luca</p>
        <div className='my-3 px-5'>
          <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea molestiae, et quibusdam autem unde natus amet odit eaque voluptatum ipsum! Rem quibusdam perferendis hic suscipit laboriosam? Dolore officia magnam sapiente!
          Nemo deleniti similique, culpa corporis doloremque accusamus dicta aperiam recusandae! Architecto similique perspiciatis aliquid ab nam! Ipsa reprehenderit labore aspernatur provident dicta, maiores sit minus omnis rerum molestias dolor quidem.
          Animi iure quia consequuntur aperiam molestiae odit repudiandae voluptas, illo unde dignissimos voluptatum facere vitae, ex, repellendus eum. Perferendis error reiciendis sint, omnis ut incidunt sunt natus. Quo, libero unde!</p>
        </div>
      </section>

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

export default Home