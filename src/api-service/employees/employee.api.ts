import employeeBaseApi from "../api";


export const employeeApi = employeeBaseApi.injectEndpoints({
    endpoints: (builder) => ({
        getEmployeeList: builder.query({
            query: ()=> '/employee',
            providesTags:['EMPLOYEES']
            }),
        createEmployee: builder.mutation({
            query: (payload) =>({
                url: `/employee`,
                method: 'POST',
                body: payload
            }),
            invalidatesTags:['EMPLOYEES']
        }),
        editEmployee: builder.mutation({
            query: ({id,payload}) =>({
                url: `/employee/${id}`,
                method: 'PUT',
                body: payload
            }),
        }),
        detailsEmployee: builder.query({
            query: (id) =>`/employee/${id}`,
            providesTags: ['EMPLOYEE_DETAILS']
            }), 
          
        deleteEmployee: builder.mutation({
            query: (id) =>({
                url: `/employee/${id}`,
                method: 'DELETE'
            }),
        invalidatesTags:['EMPLOYEES']
        })
    })
});

export const {useGetEmployeeListQuery, useDetailsEmployeeQuery , useDeleteEmployeeMutation, useCreateEmployeeMutation, useEditEmployeeMutation}=employeeApi
