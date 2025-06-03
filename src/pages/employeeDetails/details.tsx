import { use } from "react"
import TextHeader from "../../components/TextHeader/TextHeader"
import { useParams, useSearchParams } from "react-router-dom"
import './details.css'
import EmployeeDB from "../../EmployeeDB"
import StatusBox from "../employee list/components/Status Box/StatusBox"
import { useAppSelector } from "../../store/store"
import { useDetailsEmployeeQuery } from "../../api-service/employees/employee.api"

const Details = () => {
    const {id}=useParams();
    //console.log('id',id)
    const {data}=useDetailsEmployeeQuery(id)
    console.log('data',data)

    
    //const employees=EmployeeDB

    // const result=useAppSelector(state => state.employee.employees)
    // console.log('result',result)
    // const user=result.find((emp)=>emp.employeeId==id)



  return (
    <>
    <TextHeader id={`Employee Details ${id}`} feature='Edit' empid={id} />
    <div id="detailsCard">
      <div className="box1">
        <div className="individual">
           <h3>Employee Name</h3>
            <h5>{data?.name}</h5>
        </div>
        <div className="individual">
            <h3>Joining Date</h3>
            <h5>{data?.dateOfJoining?.slice(0,10)}</h5>
        </div>
        <div className="individual">
            <h3>Experience</h3>
            <h5>{data?.experience}</h5>
        </div>
        <div className="individual">
           <h3>Role</h3>
            <h5>{data?.role}</h5>
        </div>
        <div className="individual indstatus">
             <h3>Status</h3>
              <StatusBox status={data?.status} />
         </div>
      </div>
       <div className="box2">
            <div className="individual">
                <h3>Address</h3>
                <h5>{data?.address.houseNo}</h5>
                <h5>{data?.address.line1}</h5>
                <h5>{data?.address.line2}</h5>
                <h5>{data?.address.pincode}</h5>
             </div>
             <div className="individual">
                <h3>Employee ID</h3>
                <h5>{data?.employeeId}</h5>
             </div>
         </div>
       
        
    </div>
    </>
  )
}

{/* <button id='getParams' onClick={fetchSearchParams}>Get searchParams</button>
        <button id='setParams' onClick={updateSearchParams}>Set searchParams</button> */}

export default Details