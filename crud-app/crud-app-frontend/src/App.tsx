
import { Container, Title } from '@mantine/core'
import './App.css'
import EmployeeForm from './components/EmployeeForm'
import EmployeeList from './components/EmployeeList'
import { useEffect, useState } from 'react'
import { getEmployeeData } from './service/employeeService'

function App() {
const [emloyeeDetails, setEmployeeDetails] = useState()
const [employeeData, setEmployeeData] = useState([]);
console.log(emloyeeDetails);

const fetchEmployees = async () => {
  return  await getEmployeeData().then((res) => {
    setEmployeeData(res.data.data);
  });
};
useEffect(() => {
  fetchEmployees();
}, []);


  return (
    <Container>
      <Title  mb="xl" ta={'center'}>Employee Management</Title>
      <EmployeeForm emloyeeDetails={emloyeeDetails} fetchEmployees= {fetchEmployees} />
      <EmployeeList setEmployeeDetails = {setEmployeeDetails} employeeData = {employeeData} setEmployeeData={setEmployeeData} />
    </Container>
  )
}

export default App
