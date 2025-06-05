import employeeBaseApi from "../api";
//import type { empRequest,empResponse } from "./types";

export const departmentApi = employeeBaseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDepartmentList: builder.query({
            query: ()=> '/department',

            }),

    })
});

export const {useGetDepartmentListQuery}=departmentApi
