import apiService from "./Api/apiService";

//register : auth component when clicked Register btn
export const registerAPI=async(userData)=>{
    return await apiService("POST",'/register',userData)
}

//login : auth component when clicked login btn
export const loginAPI=async(userData)=>{
    return await apiService("POST",'/login',userData)
}

//Google login Api : auth component when clicking authentication from google btn
export const GoogleloginAPI=async(userData)=>{
    return await apiService("POST",'/google-login',userData)
}

//Edit User Api : edit component when user click edit btn
export const userEditAPI=async(userId,userData)=>{
    console.log(userId,userData);
    
    return await apiService("PUT",`/user/${userId}`,userData)
}


//Add Book api :  Upload Books 

export const addBookAPI=async(BookDetails)=>{
    return await apiService("POST",'/book',BookDetails)
}

//Get Home books when page load
export const getHomeBooksAPI=async()=>{
    return await apiService("GET",'/home-books',{})
}

//When page load get all Books By Books Component

export const getAllBooks=async(searchKey)=>{
    return await apiService("GET",`/all-books?search=${searchKey}`,{})
}

//get user Books:Book Component when Opend

export const getUserBooks=async()=>{
    return await apiService("GET",'/user-books',{})
}


//get user Purchased Books:Book Component when Opend

export const getUserPurchasedBooks=async()=>{
    return await apiService("GET",'/purchased-books',{})
}

//delete user Purchased Books:Book status Component when Click Delete Button

export const deleteUploadedBook=async(BookId)=>{
    return await apiService("DELETE",`/book/${BookId}`,{})
}

//Get Single Book Details

export const getSingleBook=async(id)=>{
    return await apiService("GET",`/view-book/${id}`)
}

//buy Book

export const buyBookAPI=async(id)=>{
    return await apiService("PUT",`/book/${id}/buy`)
}

//edit Admin Data

export const editAdminApi=async(adminId,adminData)=>{
    return await apiService("PUT",`/admin/${adminId}`,adminData)
}

//Get all Users List
export const getAllUsers=async()=>{
    return await apiService("GET",'/users-list',{})
}

//Get all Books
export const getAllBooksAPI=async()=>{
    return await apiService("GET","/book-list",{})
}

//Update Status
export const updateBookStatusAPI=async(id)=>{
    return await apiService("PUT",`/book/${id}`,{})
}


//Get AI Abstract
export const getBookDetailsAPI=async(title)=>{
    return await apiService("POST",`/book-ai`,{title})
}