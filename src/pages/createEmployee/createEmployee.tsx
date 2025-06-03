import './createEmployee.css'
import Layout from '../../components/Layout/Layout'
import TextHeader from '../../components/TextHeader/TextHeader'
import BlankHeader from '../../components/BlankHeader/BlankHeader'
import InputField from '../../components/inputField/inputField'
import Button from '../../components/button/Button'
import Select from '../../components/select/select'
import { useState } from 'react'
import { EMPLOYEE_ACTION_TYPES, type Employee } from '../../store/employee/employee.types'
import { store, useAppDispatch } from '../../store/store'
import { useParams } from 'react-router-dom'
import { useSelector} from 'react-redux'
import { addEmployee } from '../../store/employee/employeeReducer'
import { useCreateEmployeeMutation } from '../../api-service/employees/employee.api'
import { useNavigate } from 'react-router-dom'

const CreateEmployee = () => {
  const navigate=useNavigate();

    const dispatch=useAppDispatch()
    const [createEmployee]=useCreateEmployeeMutation()

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
  

  async function handleSubmit(){
    try {
      console.log('final values:',values)
      console.log('payload:',payload)
      await createEmployee(payload).unwrap();
      alert("Employee created successfully");
      navigate("/");
  } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
  }
  navigate("/")
    //dispatch(addEmployee(values));
  }

  function handleCancel () {
    navigate("/")
  };





    
  return (
    <>
        <TextHeader id='Create Employee'/>

        <div id="mainsection"> 
            <form className="mainform" onSubmit={(e)=>{e.preventDefault(); handleSubmit();}}>

            <div id="inputdiv">
                <InputField id='createEmployeeInput' classname='Employee Name' label='Employee Name' type='text' value={values.name} onChange={(e) => updateField('name',e.target.value) }/>
                <InputField id='createEmployeeInput' classname='Employee ID' label='Employee ID' type='text' value={values.employeeId} onChange={(e) => updateField('employeeId',e.target.value) }/>
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

            <InputField id='createEmployeeInput' classname='Password' label='Password' type='text' value={values.password} onChange={(e) => updateField('password',e.target.value) }/>
           
            </div>
            

            <div id="last">
                <Button buttonID='createEmployee' name='Create' type='submit'/>
                <Button buttonID='createEmployee' name='Cancel' type='reset' onChange={handleCancel}/>

            </div>
            </form>
        </div>
        
    </>
  )
}
//style="background-color: #03AEEE;color: white;"

//<button type="submit" >Submit</button>
  //              <button type="reset" >Cancel</button>
//<Button buttonID='createEmployee' name='Create' type='submit'/>
//<Button buttonID='createEmployee' name='Cancel' type='reset'/>
export default CreateEmployee