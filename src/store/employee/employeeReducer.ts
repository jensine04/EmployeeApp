import React from 'react'
import { EMPLOYEE_ACTION_TYPES, type EmployeeAction, type EmployeeState,type Employee } from './employee.types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';


const initialState :EmployeeState ={ employees: []}

	
export const employeeSlice = createSlice({
  name: 'employee',	
  initialState,	
  reducers: {	
    addEmployee: (state, action: PayloadAction<Employee>) => {	
        console.log(action.payload)
      state.employees.push(action.payload);	
    },	
  },	
});
	
 
	
export const { addEmployee } = employeeSlice.actions
	
export default employeeSlice.reducer;

// function employeeReducer  (state: EmployeeState=initialState, action:EmployeeAction)  {
//   switch(action.type){
//     case EMPLOYEE_ACTION_TYPES.DELETE:
//         {
//             return state
//         }
//     case EMPLOYEE_ACTION_TYPES.UPDATE:
//         {
//             return state
//         }
//     case EMPLOYEE_ACTION_TYPES.CREATE:
//         {
//             console.log(action.payload)
//             return {
//              ...state,
//                 employees: [...state.employees, action.payload],
//              };
//     }
//         }
//   }
  


//export default employeeReducer

