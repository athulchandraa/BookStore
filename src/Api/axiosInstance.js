import axios from "axios";

const axiosInstance=axios.create({
    baseURL:"http://localhost:3000/",
    timeout:5000
})

//Axios Interceptors for Global Error Handling

axiosInstance.interceptors.response.use((response)=>{
    console.log("Response Recieved...!");
    return response
},(error)=>{
    if(error.response){
        const status=error.response.status
        if(status==401){
            console.log("Unauthorized User---Redirecting to Loginpage");
        }else if(status==404){
            console.log("API Not Found");
        }else if(status==500){
            console.log("Server Error");
        }else if(error.request){
            console.log("No Response from API");
            return error.request.response
        }else{
            console.log(`Error : ${error}`);
        }
        return Promise.reject(error)
    }
})

export default axiosInstance