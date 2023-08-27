import React from 'react';
import './EmployeeTable.css';

const EmployeeTable = () => {
  const employees = [
    {
      name: 'Sumit',
      gender: 'Male',
      department: 'IT',
      salary: 50000,
      startDate: '2022-01-15',
    },

  
  ];
  <style>
    
  </style>

  return (<form>
    <div className="employee-Table">
      <h2>Employee Details</h2>
      <div1>
        <input type="button" value="Add user" />
      </div1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Start Date</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through employees and display them as rows */}
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.gender}</td>
              <td>{employee.department}</td>
              <td>{employee.salary}</td>
              <td>{employee.startDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </form>
  );
};

export default EmployeeTable;
