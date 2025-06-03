import './EditEmployee.css'
import TextHeader from '../../components/TextHeader/TextHeader'
import InputField from '../../components/inputField/inputField'
import Select from '../../components/select/select'
import Button from '../../components/button/Button'
import { useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDetailsEmployeeQuery, useEditEmployeeMutation } from '../../api-service/employees/employee.api'
import EmployeeDB from '../../EmployeeDB'
import { useNavigate } from 'react-router-dom'
import { useSelector , useDispatch} from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { EMPLOYEE_ACTION_TYPES,type Employee } from '../../store/employee/employee.types'
import { store } from '../../store/store'

const EditEmployee = () => {
   const dispatch=useAppDispatch()
   const [editEmployee]=useEditEmployeeMutation()
    const navigate=useNavigate()

  const [values,setValues]=useState({
            name: "",
            age:0,
            password:"",
            email:"",
            employeeId: "",
            dateOfJoining: "",
            departmentId:"",
            role: "",
            status: "",
            experience: 0,
            address:{
            line1:"",
            line2:"",
            houseNo:"",
            pincode:""
            }
          })

    // const empid=useParams()       
    // const data=useAppSelector((state)=>state.employee.employees)
    //   const user=data?.find((e)=>e.employeeId==empid.id)

        const {id}=useParams();
        //console.log('id',id)
        const {data}=useDetailsEmployeeQuery(Number(id))
        console.log('data',data)

      useEffect(()=>{
        if(data){
          console.log('deptid',data.department.id)
          const formattedDate = data.dateOfJoining?.split("T")[0] || ""; 
          setValues({
            name: data.name,
            age:data.age,
            password:"",
            email:data.email,
            employeeId: data.employeeId,
            dateOfJoining:formattedDate,
            departmentId:data.department.id,
            role: data.role,
            status: data.status,
            experience: data.experience,
            address:{
            line1:data.address.line1,
            line2:data.address.line2,
            houseNo:data.address.houseNo,
            pincode:data.address.pincode
            }
        })
        }
        else{
          setValues({
            name: "",
            age:0,
            password:"",
            email:"",
            employeeId: "",
            dateOfJoining: "",
            departmentId:"",
            role: "",
            status: "",
            experience: 0,
            address:{
            line1:"",
            line2:"",
            houseNo:"",
            pincode:""
            }
        })
        }
      },[data])

    
 

    const updateField = (field: string, value: string) => {
    
    setValues({
      ...values,
      [field]: value,
    });
  };

   const updateAddressField = (field: string, value: string) => {
    setValues((prev) => {
      return {...prev, address: { ...prev.address, [field]: value  }}
    })
  }

    const payload = {
      name: values.name,
      email: values.email,
      age: Number(values.age),
      role: values.role,
      departmentId: Number(values.departmentId),
      password: values.password,
      employeeId: values.employeeId,
      dateOfJoining: new Date(values.dateOfJoining),
      experience: Number(values.experience),
      status: values.status,
      address: values.address
  };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        console.log('final values:',values)
        console.log('payload:',payload)
        await editEmployee({id,payload}).unwrap();
        alert("Employee edited successfully");
        navigate("/");
      } catch (error) {
          console.error("Error:", error);
          alert(error.data.message);
      }
      navigate("/")
    };

    const handleCancel =() => {
        navigate("/")
    };

  return (
    <>
        <TextHeader id='Edit Employee'/>

        <div id="mainsection"> 
            <form className="mainform" onSubmit={handleSubmit}>

            <div id="inputdiv">
                <InputField id='createEmployeeInput' classname='Employee Name' label='Employee Name' type='text' value={values.name} onChange={(e) => updateField('name',e.target.value) }/>
                <InputField id='createEmployeeInput' classname='Employee ID' label='Employee ID' type='text' value={values.employeeId} disabled={true} onChange={(e) => updateField('employeeId',e.target.value) }/>
                <InputField id='createEmployeeInput' classname='Email' label='Email' type='text' value={values.email} onChange={(e) => updateField('email',e.target.value) }/>

                <InputField id='createEmployeeInput' classname='Joining Date' label='Joining Date' type='date' value={values.dateOfJoining} onChange={(e) => updateField('dateOfJoining',e.target.value) }/>
                <InputField id='createEmployeeInput' classname='Experience' label='Experience (Yrs)' type='number' value={values.experience} onChange={(e) => updateField('experience',e.target.value) }/>
                <InputField id='createEmployeeInput' classname='Age' label='Age' type='number' value={values.age} onChange={(e) => updateField('age',e.target.value) }/>





             <div className="inputfield">
                <Select label='Department' options={[1,2,3,4,5,8]} placeholder='Department' value={values.departmentId} onChange={(e) => updateField('departmentId',e.target.value) } />
            </div>
            

            <div className="inputfield">
                <Select label='Role' options={["DEVELOPER","UI","UX","HR"]} placeholder='Choose Role' value={values.role} onChange={(e) => updateField('role',e.target.value) }/>
            </div>

            <div className="inputfield">
                <Select label='Status' options={["ACTIVE","PROBATION","INACTIVE"]} placeholder='Status' value={values.status} onChange={(e) => updateField('status',e.target.value) }/>
            </div>
            
            
            <div id='addressfields' >
                <InputField id='createEmployeeInput' classname='Flat No. / House No.' label= 'Address' type='text' value={values.address.houseNo} onChange={(e) => updateAddressField('houseNo',e.target.value) }/>
                <InputField id='createEmployeeInput' classname='Address Line 1' label= '' type='text' value={values.address.line1} onChange={(e) => updateAddressField('line1',e.target.value) }/>
                <InputField id='createEmployeeInput' classname='Address Line 2' label= '' type='text' value={values.address.line2} onChange={(e) => updateAddressField('line2',e.target.value) }/>
                <InputField id='createEmployeeInput' classname='Pincode' label= '' type='text' value={values.address.pincode} onChange={(e) => updateAddressField('pincode',e.target.value) }/>
            </div>

            
            </div>
            

            <div id="last">
                <Button buttonID='createEmployee' name='Save' type='submit'/>
                <Button buttonID='createEmployee' name='Cancel' type='reset' onChange={handleCancel}/>

            </div>
            </form>
        </div>
        
    </>
  )
}

export default EditEmployee