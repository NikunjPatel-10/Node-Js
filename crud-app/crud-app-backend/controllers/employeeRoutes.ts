import express from 'express'
import { deleteEmployee, getEmployee, getEmployeeById, postAddEmployee, updateEmployee } from '../controllers/employee';

const employeeRouter = express.Router();

employeeRouter.route('/').post(postAddEmployee).get(getEmployee);
employeeRouter.route('/:id').delete(deleteEmployee).get(getEmployeeById).put(updateEmployee)

export default employeeRouter