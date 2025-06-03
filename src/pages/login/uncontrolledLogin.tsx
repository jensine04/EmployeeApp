import "./uncontrolledLogin.css";
import LoginInput from "./loginInput";
import { useRef, useEffect } from "react";
import kvLogo from "../../assets/kv-logo.png";
import kvLoginImg from "../../assets/kv-login.jpeg";
import UncontrolledButton from "../../components/button/uncontrolledButton";

const UncontrolledLogin = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const clearButtonRef=useRef<HTMLButtonElement | null>(null);

  const clearUsername =()=> {
    if(usernameRef?.current){
      if(clearButtonRef.current)
        clearButtonRef.current.disabled=true
      return usernameRef.current.value=""
    }
  }

  const updateClearButton = () => {
    if(!clearButtonRef.current) return;
    if(usernameRef.current){
      if(usernameRef.current.value.length>0){
        clearButtonRef.current.disabled=false;
        clearButtonRef.current.onclick=clearUsername;
      }
    
    else{
      clearButtonRef.current.disabled=true;
    }
  }
  }


  const handleNativeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log("form submitted : ",form);
    const formdata = new FormData(form);
    console.log(formdata);
    const username = formdata.get("username") ;
    const password = formdata.get("password") ;
    console.log(username);
    console.log(password);
  }

  useEffect(() => {
    if (usernameRef?.current) usernameRef.current.focus();
  }, []);

  return (
    <div className="content">
      <div className="pattern-side">
        <div className="pattern" />
        <div className="circle-large">
          <div className="circle-inner">
            <img src={kvLoginImg} alt="KV Login" className="login-image" />
          </div>
        </div>
      </div>
      <div className="login-side">
        <div className="login-content">
          <img className="logo" src={kvLogo} alt="KV Logo" />
          <form onSubmit={handleNativeSubmit}>
            <LoginInput
              id="login-username-input"
              label="Username"
              name="username"
              ref={usernameRef}
              onChange={updateClearButton}
              endAdornment={<button type='button' onClick={clearUsername} disabled={true}  ref={clearButtonRef}>Clear</button>}
            />

            <LoginInput id="login-password-input" name="password" label="Password" type="text" />
            <UncontrolledButton type="submit" className="login-button">
              Log in
            </UncontrolledButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UncontrolledLogin;