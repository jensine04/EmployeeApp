import React from 'react'
import Left from './components/loginLeft/left'
import Right from './components/loginRight/right'
import useMousePosition from '../../hooks/useMousePosition'
import './login.css'
import Button from '../../components/button/Button'
import { Navigate } from 'react-router-dom'

const Login = () => {

  // const isLoggedIn= () =>{
  //   const token= localStorage.getItem("isLoggedIn")
  //   return token==="true"
  // };

  // if(isLoggedIn()){
  //    return <Navigate to='/employees'/>
  // }
  if(localStorage.getItem("token")){
    return <Navigate to='/employees'/>
  }

  //  const isLoggedIn= () =>{
  //     const token= localStorage.getItem("token")
  //     if(token)
  //       return true
  //     else
  //     return false
      
  //   };
  
  //   if(!isLoggedIn()){
  //      return <Navigate to='/login'/>
  //   }

  return (
    <main>
    <Left/>
    <Right/>
    </main>
    
  )
}

export default Login
