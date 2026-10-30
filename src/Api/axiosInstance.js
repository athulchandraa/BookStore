import axios from "axios";

const axiosInstance=axios.create({
    baseURL:"https://bookstore-backend-ban3.onrender.com/",
    timeout:10000
})

//Request Interceptors : Handling Token append to Headers
axiosInstance.interceptors.request.use(
    (config)=>{
        const token=sessionStorage.getItem("token")
        if(token){
            config.headers.Authorization=`Bearer ${token}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

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