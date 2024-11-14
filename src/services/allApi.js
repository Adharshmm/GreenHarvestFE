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
//get all events 

export const getAllEventsApi = async(reqHeader)=>{
    return await commonApi("GET",`${BASE_URL}/events`,{},reqHeader)
}

//get all items 

export const getAllItemsApi = async(reqHeader)=>{
    return await commonApi("GET",`${BASE_URL}/items`,{},reqHeader)
}

//update event status

export const updateEventStatusApi = async(reqBody,reqHeader)=>{
    return await commonApi("PUT",`${BASE_URL}/event/status`,reqBody,reqHeader)
}
export const updateItemStatusApi = async(reqBody,reqHeader)=>{
    return await commonApi("PUT",`${BASE_URL}/item/status`,reqBody,reqHeader)
}

export const userDetailsApi = async(reqHeader)=>{
    return await commonApi("GET",`${BASE_URL}/userdetails`,{},reqHeader)
}
export const farmerDetailsApi = async(reqHeader)=>{
    return await commonApi("GET",`${BASE_URL}/farmerdetails`,{},reqHeader)
}

export const addItemToCartApi = async(reqBody,reqHeader)=>{
   return await commonApi("POST",`${BASE_URL}/add-cart`,reqBody,reqHeader);
}

export const getAllCartItemAPi = async(reqHeader)=>{
    return await commonApi("GET",`${BASE_URL}/all-cart`,{},reqHeader)
}