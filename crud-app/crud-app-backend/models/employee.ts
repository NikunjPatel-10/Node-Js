// const mongoose = require("mongoose");
import { Schema, model } from 'mongoose';

interface IEmployee {
    name: string,
    email: string,
    phoneNumber: number,
    gender: string,
    department: string,
}

const employeeSchema = new Schema<IEmployee>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    gender: { type: String, required: true },
    department: { type: String, required: true },
  }, {collection:"employee"});

  export  const Employee = model<IEmployee>('Employee', employeeSchema)