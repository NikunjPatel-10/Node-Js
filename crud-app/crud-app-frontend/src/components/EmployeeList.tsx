import { Table, Box, Group, ActionIcon, Tooltip } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import {
  deleteEmployeeData,
  getEmployeeById,
} from "../service/employeeService";

const EmployeeList = ({setEmployeeDetails, employeeData , setEmployeeData}:any) => {


  const deleteEmployee = async (id: any) => {
    if (id) {
      await deleteEmployeeData(id);
      setEmployeeData((prev:any) =>
        prev.filter((employee: any) => employee._id !== id)
      );
    }
  };

  const editEmployee = async (id: any) => {
    console.log(id);
    if(id){
      await getEmployeeById(id).then((res)=>{
        setEmployeeDetails(res.data.data); 
      })
    }
  };

  return (
    <Box
      mx="auto"
      mt={5}
      p={4}
      style={{
        maxWidth: "80%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        backgroundColor: "#fff",
      }}
    >
      <Table highlightOnHover striped>
        <thead style={{ backgroundColor: "#f7f7f7", textAlign: "left" }}>
          <tr>
            <th style={{ padding: "10px" }}>Name</th>
            <th style={{ padding: "10px" }}>Email</th>
            <th style={{ padding: "10px" }}>Phone</th>
            <th style={{ padding: "10px" }}>Gender</th>
            <th style={{ padding: "10px" }}>Department</th>
            <th style={{ padding: "10px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee: any) => (
            <tr key={employee._id} style={{ padding: "10px" }}>
              <td style={{ padding: "10px" }}>{employee.name}</td>
              <td style={{ padding: "10px" }}>{employee.email}</td>
              <td style={{ padding: "10px" }}>{employee.phoneNumber}</td>
              <td style={{ padding: "10px" }}>{employee.gender}</td>
              <td style={{ padding: "10px" }}>{employee.department}</td>
              <td style={{ padding: "10px" }}>
                <Group>
                  <Tooltip
                    label="Edit"
                    onClick={() => editEmployee(employee._id)}
                  >
                    <ActionIcon color="blue">
                      <IconEdit size={20} />
                    </ActionIcon>
                  </Tooltip>
                  <Tooltip
                    label="Delete"
                    onClick={() => deleteEmployee(employee._id)}
                  >
                    <ActionIcon color="red">
                      <IconTrash size={20} />
                    </ActionIcon>
                  </Tooltip>
                </Group>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};

export default EmployeeList;
