import './EmployeeList.css'
import TextHeader from '../../components/TextHeader/TextHeader'
import { useParams, useSearchParams } from 'react-router-dom'
import EmployeeDB from '../../EmployeeDB'

import React from 'react'
import ListBlock from './components/ListBlock/ListBlock'
import { useSelector } from 'react-redux'
import { type EmployeeState, type Employee, EmployeeStatus } from '../../store/employee/employee.types'
import { useAppSelector } from '../../store/store'
import { useGetEmployeeListQuery } from '../../api-service/employees/employee.api'

const EmployeeList = () => {
  const [searchParams,setSearchParams]=useSearchParams()
  //const newSearchParams=new URLSearchParams()
  //const condition=searchParams.get("status")
  //const employees=condition? EmployeeDB.filter((e)=>e.Status==condition): EmployeeDB

const {data}=useGetEmployeeListQuery({})
console.log('data from backend',data)

//const result=useSelector(state => state)
// const result=useAppSelector(state => state.employee)
// console.log('result',result)

//   const employees= result?.employees ??[{
//       employeeName: "Alice",
//       employeeId: "E001",
//       joiningDate: "2022-01-01",
//       Role: "Developer",
//       Status: "Active",
//       Experience: "2 years",
//     }]


    let condition=searchParams.get("status")
    // if(condition=='All'){
    //   condition=null;
    // }
   const emp= condition?
     data.filter((e) => {return e.status === condition})
    : data




  //  result?.map((item)=>{
         
  //        console.log(item.employeeId)
  //     })
  

  
  
  return (
    <>
        <TextHeader id='Employee List' filter='Status' feature='Create Employee'/>

        
        <ul className="employeeHeader">
          <li>Employee Name</li>
          <li>Employee Id</li>
          <li>Joining Date</li>
          <li>Role</li>
          <li>Status</li>
          <li>Experience</li>
          <li>Action</li>
      </ul>
      
      <div id='employeeslist'>
        {emp?.map((item)=>{
         return(
          <ListBlock data={item}/> );
        })}
      </div>
    
    
    </>
  )
}

export default EmployeeList