import './ListBlock.css'
import Popup from '../../../../components/popup/popup';
import { CiEdit } from "react-icons/ci";
import { MdOutlineEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import StatusBox from '../Status Box/StatusBox';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDeleteEmployeeMutation } from '../../../../api-service/employees/employee.api';

const ListBlock = ({data}:{data:any}) => {

    const navigate=useNavigate()
    const [showPopup,setShowPopup]=useState(false)

    const [deleteEmployee]=useDeleteEmployeeMutation()

    function handleDelete(e:any){
       setShowPopup(true)
      e.stopPropagation()
    }
    
    const confirmDelete=async ()=>{
        deleteEmployee(data.id).unwrap().then((response)=> {
          alert('Successfully deleted')
        })
        .catch((error) => {
          alert(error)
        })
        setShowPopup(false)
    }

    const cancelDelete=()=>{
        setShowPopup(false)
    }


  function handleEdit(e:any){
    console.log('handle',data)
    navigate(`edit/${data.id}`)
    e.stopPropagation()
  }

  function viewDetails(){
    navigate(`${data.id}`)
  }

  return (
    <>
    <ul className="list-block" onClick={viewDetails}>
            <li>{data.name}</li>
            <li>{data.employeeId}</li>
            <li>{data.dateOfJoining ? new Date(data.dateOfJoining).toLocaleDateString("en-GB") : "N/A"}</li>
            <li>{data.role}</li>
            <li> <StatusBox status={data.status} /> </li>
            <li>{data.experience}</li>
            <li>
              <div className='action'>
              <FaTrash onClick={handleDelete} color="#FA4242"/>   <MdOutlineEdit onClick={handleEdit} />
              </div>
            </li>
            
     </ul>
     {showPopup && <Popup msg="Are you sure?" msg2="Do you really want to delete employee?" onConfirm={confirmDelete } onCancel={cancelDelete}></Popup>}
     </>
  )
}

export default ListBlock