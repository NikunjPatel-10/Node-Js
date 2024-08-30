import axios from "axios"

const baseUrl = 'http://localhost:8080/employee'

export const postEmployeeData = async( data:any)=>{
 return await axios.post(baseUrl,data)
}

export const getEmployeeData = async()=>{
   return await axios.get(baseUrl)
}

export const deleteEmployeeData = async(id:any)=>{
  return await axios.delete(`${baseUrl}/${id}`)
}
export const getEmployeeById = async(id:any)=>{
  return await axios.get(`${baseUrl}/${id}`)
}

export const updateEmployee = async(data:any, id:any)=>{

  return await axios.put(`${baseUrl}/${id}`,data)
}