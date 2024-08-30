import { Request, Response } from "express";
import { Employee } from "../models/employee";

export const postAddEmployee = async(req:Request,res:Response, )=>{
    const {name, email, phoneNumber, gender, department} = req.body;
    const employeeData = new Employee({name, email, phoneNumber, gender, department});
   await  employeeData.save();
    res.status(201).json({
        status:"success",
        message:"employee added successfully"
    })
}

export const getEmployee = async(req:Request, res:Response)=>{
    const employeeData = await Employee.find();
    res.status(200).json({
        status: 'success',
        data: employeeData
    })

}

export const deleteEmployee = async(req:Request, res:Response)=>{
    const employeeId = req.params.id;
await Employee.findByIdAndDelete(employeeId)
   res.status(201).json({
    status:'success',
    message: 'Employee deleted successfully',
   })
}

export const getEmployeeById = async(req:Request, res:Response)=>{
    const employeeId = req.params.id;
   const employee = await Employee.findById(employeeId);

   res.status(200).json({
    status:'success',
    data:employee
   })
}

export const updateEmployee = async(req:Request, res:Response)=>{
    try {
        const employeeId = req.params.id;
        const updatedData = req.body
         await Employee.findByIdAndUpdate(employeeId, updatedData)
        //  await Employee.findOneAndUpdate(employeeId)
        res.status(200).json({
            status : 'success',
            message : 'employee updated successfully'
        })
    }
    catch(error){
        res.status(500).json({
            status:'error',
            message: 'An error occurred while updating the employee'
        })
    }
    
}




