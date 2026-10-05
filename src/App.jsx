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
import { useState } from 'react'


function App() {

  const [isLoading,setIsLoading]=useState(true)

  setTimeout(()=>{
    setIsLoading(false)
  },2000)


  return (
    <>
    <Routes>
      <Route path='/' element={isLoading ? <PreLoader/> :<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/books' element={<Books/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth insideRegistor/>}/>

      <Route path='/profile/:id' element={<Profile/>}/>
      <Route path='/books/:id' element={<View/>}/>

      <Route path='/admin' element={<AdminDashboard/>}/>
      <Route path='/admin/resources' element={<AdminResource/>}/>
      <Route path='/admin/settings' element={<AdminSettings/>}/>

      <Route path='/*' element={<Pnf/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
