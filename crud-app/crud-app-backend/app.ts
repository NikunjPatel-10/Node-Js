import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import employeeRoutes from './routes/employeeRoutes';
;

const app = express()

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/employee', employeeRoutes)
mongoose.connect('mongodb+srv://nikunjpatel:96JK3mBqIDPj6GWR@cluster0.skpu7ya.mongodb.net/Employee?retryWrites=true&w=majority&appName=Cluster0').then((res:any)=>{
  app.listen(8080, ()=>{
    console.log(`Server is running on http://localhost:8080`);
  })
}  
)