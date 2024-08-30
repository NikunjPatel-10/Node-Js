import {
  Box,
  TextInput,
  RadioGroup,
  Radio,
  Select,
  Button,
  Flex,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { postEmployeeData, updateEmployee } from "../service/employeeService";
import { useEffect } from "react";

const EmployeeForm = ({emloyeeDetails , fetchEmployees}:any) => {

  const employeeForm = useForm({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: null,
      gender: "",
      department: '',
    },
  });

  useEffect(()=>{
    if(emloyeeDetails){
      employeeForm.setValues({
        name: emloyeeDetails.name || '',
        email: emloyeeDetails.email || '',
        phoneNumber: emloyeeDetails.phoneNumber || '',
        gender : emloyeeDetails.gender || '',
        department : emloyeeDetails.department || ''
      })
    }
  },[emloyeeDetails])



  const handleSubmit = async (values: any) => {


    if(emloyeeDetails && emloyeeDetails._id){
      await updateEmployee(values, emloyeeDetails._id)
    }
    else{
      await postEmployeeData(values)
    }
    await fetchEmployees()
    employeeForm.reset()
  };

  return (
    <Box mx="auto" style={{ maxWidth: '400px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', backgroundColor: '#fff' }}>
    <form onSubmit={employeeForm.onSubmit(handleSubmit)} >
      <TextInput
        label="Name"
        {...employeeForm.getInputProps("name")}
        required
        style={{ marginBottom: '10px' }}
      />
      <TextInput
        label="Email"
        {...employeeForm.getInputProps("email")}
        required
        style={{ marginBottom: '10px' }}
      />
      <TextInput
        label="Phone"
        type="number"
        {...employeeForm.getInputProps("phoneNumber")}
        required
        style={{ marginBottom: '10px' }}
      />
      <RadioGroup
        label="Gender"
        {...employeeForm.getInputProps("gender")}
        required
        style={{ marginBottom: '10px' }}
      >
        <Flex>
        <Radio value="male" label="Male" />
        <Radio ms={10} value="female" label="Female" />
        </Flex>
      </RadioGroup>
      <Select
        label="Department"
        data={[
          { value: "FrontEnd", label: "Frontend" },
          { value: "Backend", label: "Backend" },
          { value: "Data", label: "Data" },
        ]}
        {...employeeForm.getInputProps("department")}
        required
        style={{ marginBottom: '10px' }}
      />
      <Button type="submit" fullWidth mt="md">
        Add Employee
      </Button>
    </form>
  </Box>
  );
};

export default EmployeeForm

