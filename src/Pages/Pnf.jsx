import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routeContext } from '../contextAPI/RouteGuard'

function Pnf() {

    const{role,setRole,authorisedUser,setAuthorisedUser}=useContext(routeContext)

    const navigate=useNavigate()
    const gotoHome=()=>{
      if(role=="user"){
        navigate('/')
      }else{
        navigate('/admin')
      }
    }
  
  return (
    <div className='flex flex-col items-center my-2'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGirznB1IzuqWaYRpMQfw5EYcvy2Hc9B72GpAmuxu6eJwaZyerPqacaTy&s=10" alt="" />
      <p></p>
      {
        authorisedUser ?
        <button onClick={gotoHome} className='px-3 py-1 bg-gray-600 text-white font-medium rounded shadow'> Home</button>:
        <Link to={'/'} className='px-3 py-1 bg-gray-600 text-white font-medium rounded shadow'>Go to Home</Link>
        }
    </div>
  )
}

export default Pnf