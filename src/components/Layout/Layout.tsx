import './Layout.css'
import NavBar from '../navBar/navBar'
import BlankHeader from '../BlankHeader/BlankHeader'
import { Outlet , Navigate, useNavigate } from 'react-router-dom'

import React from 'react'

const Layout = () => {

  const navigate=useNavigate()

  const isLoggedIn= () =>{
    //const token= localStorage.getItem("isLoggedIn")
    //return token==="true"
    const token= localStorage.getItem("token")
    if(token)
      return true
    else
    return false
    
  };

  if(!isLoggedIn()){
     return <Navigate to='/login'/>
  }
  
  return (
    <>
    <NavBar/>
    <main id="maincontent">
    <BlankHeader/>
    <Outlet />
    </main>
    </>
  )
}


export default Layout