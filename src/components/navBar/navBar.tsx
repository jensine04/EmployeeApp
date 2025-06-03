import './navBar.css'
import { useNavigate } from 'react-router-dom'


const NavBar = () => {
  const navigate=useNavigate()

function goToList(){
    
    navigate('/employees')
  }

  function handleLogOut(){
    localStorage.removeItem("token")
    navigate('/')
  }


  return (
    <div id="asidebardiv">
        <aside>
        <div id="kvlogo">
        <img src="/src/assets/kv-logo.png" width="220 " height="50" />   
        </div>
        <div id="leftdiv">
            
            <ul id='leftDivUl'> <li onClick={goToList}>
            <img src="/src/assets/icon.svg" /> Employee List
            </li>
            <li id='logOutLi' onClick={handleLogOut}>
              Log Out
            </li>
            </ul>

        </div>
        </aside>
        </div>
  )
}

export default NavBar