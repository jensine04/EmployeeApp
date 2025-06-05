import React, { useEffect, useRef, useState } from 'react'
import './right.css'
import InputField from '../../../../components/inputField/inputField'
import Button from '../../../../components/button/Button'
import LoginInput from '../../loginInput'
import useMousePosition from '../../../../hooks/useMousePosition'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../../../api-service/auth/login.api'
//import uselocalstorage

const Right = () => {

  const [login, {isLoading}]=useLoginMutation();
  
  const navigate=useNavigate()
  const [username,setUsername] =useState("")
  const [password,setPassword] =useState("")
  const [error,setError]=useState("")
  const [usernameError,setUsernameError] =useState("")
  const [passwordError,setPasswordError] =useState("")

  //const [showPassword,setShowPassword]=localStorage.("showPassword",false);
  const usernameRef = useRef<HTMLInputElement>(null)
  const showPasswordRef = useRef<HTMLInputElement>(null)

  function isShowPassword(){
    const token= localStorage.getItem("showPassword")
    return token==="true"
  }
  
 function updateShowPassword(){
  if (showPasswordRef.current?.checked)
    localStorage.setItem("showPassword","true")
  else 
    localStorage.setItem("showPassword","false")
  }
  

  function handleClick(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value)
  }

  function handleClickPassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)
  };

  //console.log(isLoading)

  async function handleSubmit(e) {
    e.preventDefault()
    console.log("in handlesubmit")
    login({email:username, password:password}).unwrap()
    .then((response)=> {
        //localStorage.setItem("isLoggedIn","true")
         localStorage.setItem("token",response.accessToken)
         navigate('/employees')
    }).catch((error) => {
      setError(error.data.message)
    })
  };
       
      
    

    // if(username==="user" && password==="password"){
      
    //   navigate('/employees')
    // }
    // else{
    //   localStorage.setItem("isLoggedIn","false")
    //   console.log("set isloggedin as false")
    //   setPasswordError("Invalid Credentials")
    //   return;
    // }
  


    //const [,setIsLoggedIn] =localStorage("isLoggedIn",false);
    
  // const handleLogin= (event)=> {
  //   event.preventDefault  }

  useEffect(()=>{
    if (username.length>20){
      setUsernameError("Username cannot be more than 20 characters");
    }
    else {
      setUsernameError("");
    }
  },[username]);

  useEffect(()=>{
    if (password.length<5 && password.length>0){
      setPasswordError("Password cannot be less than 5 characters");
    }
    else {
      setPasswordError("");
    }
  },[password]);

  useEffect(()=>{
    if(usernameRef.current)
      usernameRef.current.focus()
  },[]);

  //const mousepositon=useMousePosition();

  return (
    <div id="righthalf">
        <div id="loginbox">
            <div id="logo">
                <img src="./src/assets/kv-logo.png" alt=""/>
            </div>
            <form>
                <div id='trial'>
                <LoginInput id="username" label="Username" type="text" value={username} onChange={(e) => handleClick (e)}  ref={usernameRef} 
                endAdornment={<button id='clear' disabled={username.length===0} name='Clear' type='button' onClick={()=> { setUsername("") }}>Clear</button>}/>
                
                </div>
                {usernameRef? <p className='inputError'>{usernameError}</p>:null}

                <LoginInput id="password" label="Password" type={isShowPassword()? "text":"password" } value={password} onChange={(e) => handleClickPassword (e)} />
                  {passwordError? <p className='inputError'>{passwordError}</p>:null}
                  {error?<p>{error}</p>:null}
                <div><input type='checkbox' id='showPass' onChange={updateShowPassword} ref={showPasswordRef}/> <label className='showpass'> Show Password</label>  </div>


                <Button buttonID="inputfields" name='Login' type='submit' disabled={isLoading ||usernameError!="" || passwordError!="" ||username==""||password==""} onChange={handleSubmit} />
              

            </form>
        </div>

    </div>
  )
}

export default Right
  // <p> X:{mousepositon.x}</p>
  // <p> Y:{mousepositon.y}</p>