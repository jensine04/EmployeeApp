import { type Role } from "../../store/employee/employee.types"

export type LoginResponse ={
                tokenType: "Bearer";
                accessToken: string;
            }

    export type LoginPayload={
        email:string;
        password: string;
    }