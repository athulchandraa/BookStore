import apiService from "./Api/apiService";

//register : auth component when clicked Register btn
export const registerAPI=async(userData)=>{
    return await apiService("POST",'/register',userData)
}

//login : auth component when clicked login btn
export const loginAPI=async(userData)=>{
    return await apiService("POST",'/login',userData)
}