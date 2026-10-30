import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './User/Pages/Home'
import Books from './User/Pages/Books'
import Contact from './User/Pages/Contact'
import Profile from './User/Pages/Profile'
import View from './User/Pages/View'

import AdminDashboard from './Admin/Pages/AdminDashboard'
import AdminResource from './Admin/Pages/AdminResource'
import AdminSettings from './Admin/Pages/AdminSettings'

import Auth from './Pages/Auth'
import Pnf from './Pages/Pnf'

import PreLoader from './Components/PreLoader'
import Footer from './Components/Footer'
import { useContext, useState } from 'react'
import PaymentSuccess from './User/Pages/PaymentSuccess'
import PaymentFailed from './User/Pages/PaymentFailed'
import RouteGuard, { routeContext } from './contextAPI/RouteGuard'


function App() {

  const{role,setRole,authorisedUser,setAuthorisedUser}=useContext(routeContext)

  const [isLoading,setIsLoading]=useState(true)

  setTimeout(()=>{
    setIsLoading(false)
  },2000)


  return (
    <>
    <Routes>
      <Route path='/' element={isLoading ? <PreLoader/> :<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth insideRegistor/>}/>

      {
        role=="user" && 
        <>
          <Route path='/books' element={<Books/>}/>
          <Route path='/profile/:id' element={<Profile/>}/>
          <Route path='/books/:id' element={<View/>}/>
          <Route path='/success' element={<PaymentSuccess/>}/>
          <Route path='/failed' element={<PaymentFailed/>}/>
        </>
      }

      {
        role=="admin" && 
        <>
          <Route path='/admin' element={<AdminDashboard/>}/>
          <Route path='/admin/resources' element={<AdminResource/>}/>
          <Route path='/admin/settings' element={<AdminSettings/>}/>
        </>
      }

      <Route path='/*' element={<Pnf/>}/>

    </Routes>
    <Footer/>
    </>
  )
}

export default App
