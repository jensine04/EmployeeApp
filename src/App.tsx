import { useState } from 'react'
import './App.css'
import Login from './pages/login/login'
import Layout from './components/Layout/Layout'
import NotFound from './pages/NotFound'
import CreateEmployee from './pages/createEmployee/createEmployee'
import Counter from './components/counter/counter'
import UncontrolledLogin from './pages/login/uncontrolledLogin'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Details from './pages/employeeDetails/details'
import EmployeeList from './pages/employee list/EmployeeList'
import EditEmployee from './pages/editEmployee/EditEmployee'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {

// const isLoggedIn= () =>{
//   const token= localStorage.getItem("isLoggedIn")
//   return token==="true"
// };

const router=createBrowserRouter([
  {
    path: "/",
    //element: isLoggedIn() ? <Navigate to="/employees" />: <Login />
    element: <Login />
  },
  {
    path: "/login",
    //element: isLoggedIn() ? <Navigate to="/employees" />: <Login />
    element: <Login />
  },
  {
    path: "/employees",
    element: <Layout />,
    children: [
      {index:true, element:<EmployeeList/>},
      {path: "create", element: <CreateEmployee />},
      {path: ":id", element:<Details />},
      {path: "edit/:id", element:<EditEmployee/>}
    ]
  },
  {
    path: "*",
    element: <NotFound/>
  }
])






  //const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
    </>

   
  )
}

export default App







































 // <>
   
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //   </div>
    // </>