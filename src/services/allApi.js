import { BASE_URL } from "./baseUrl"
import { commonApi } from "./commonApi"

//Register api 
export const registerApi = async (userDetails) => {
    return await commonApi("POST", `${BASE_URL}/user-register`, userDetails, "")
}
//login api
export const loginApi = async (userDetails) => {
    return await commonApi("POST", `${BASE_URL}/user-login`, userDetails, "")
}

//get items for the products page only the approved 
export const getItemsApi = async(reqHeader)=>{
    return await commonApi('GET',`${BASE_URL}/items`,{},reqHeader)
}

//get farmer items of the farmer
export const getFarmerItems = async(reqHeader)=>{
    return await commonApi('GET',`${BASE_URL}/items/farmId`,{},reqHeader)
}

//add items by farmer

export const addItemsApi = async(reqBody, reqHeader)=>{
    return await commonApi("POST",`${BASE_URL}/items/add`,reqBody,reqHeader)
}

//delete the items 

export const deleteItems = async(itemId,reqHeader)=>{
    return await commonApi("DELETE",`${BASE_URL}/items/delete/${itemId}`,{},reqHeader)
}


//get event

export const getEvensApi = async(reqHeader)=>{
    return commonApi("GET",`${BASE_URL}/event/farmId`,{},reqHeader)
}

//add events

export const addEventApi = async(reqBody,reqHeader)=>{
    return await commonApi("POST",`${BASE_URL}/events/add`,reqBody,reqHeader)
}

//delete events

export const deleteEventApi = async(eventid,reqHeader)=>{
    return await commonApi("DELETE",`${BASE_URL}/events/delete/${eventid}`,{},reqHeader)
}
