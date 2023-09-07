
import React, { Component } from 'react';
import './EmployeeTable.css';
import addImage from "../images/add-24px.svg";
import { Link } from 'react-router-dom';
import logo from "../images/logo.png"
//import { useEffect } from 'react';
import Display from './display';
import EmployeeService from '../Service/EmployeeService';


class EmployeeTable extends Component{

  constructor(props){
    super(props);
    this.state={
      employeeArray:[],
      AllEmployeeArray:[],
    };
  }

  componentDidMount(){
    console.log("Life cycle method");
    this.getAllEmployee();
  }
  getAllEmployee = () =>{
    EmployeeService.getAllEmployee()
    .then((response) =>{
      console.log(response);
      this.setState({
        employeeArray:response.data.data,
        AllEmployeeArray:response.data.data,
      })
      console.log(response);
    })
    .catch((err)=>{
      alert("Somthing went wrong while getting record ",err);
    })

  }
  render() {
    console.log("--------------------------");
    console.log("render method ");
    console.log("--------------------------");


    return (
    <div>
      <header className='header-content'>
      <div className="employee-Table">
        <div className='logo-content'>
          <Link to="/add">
            <img src={logo} alt=''/>

          </Link>
        </div>
        </div>

        <h2>Employee Details</h2>
        <div className='main-content'>
          <Link className='add-btn' to="/addemployee">
            <img src={addImage} alt="Add User" />
          </Link>
        </div>
        </header>
        
        <div className='table-main'>
          <Display
          employeeArray={this.state.AllEmployeeArray}
          getAllEmployee={this.getAllEmployee}
          />

        </div>
{/* 






        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>phoneNumber</th>
              <th>Email</th>
              <th>profilePic</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Address</th>
              <th>Start Date</th>
              <th>Note</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
            {props.employeeArray&&
            props.employeeArray.map((employee, index) => (
              <tr key={`${index}`}>
                <td><img className='profile' src="employee.profilePic" alt="" /></td>
                <td>{employee.name}</td>
                <td>{employee.gender}</td>
                <td>{employee.phoneNumber}</td>
                <td>{employee.email}</td>
                <td>{employee.profilePic}</td>
                <td>{employee.department}</td>
                <td>{employee.salary}</td>
                <td>{employee.address}</td>
                <td>{employee.startDate}</td>
                <td>{employee.note}</td>
                <td>
                  <img src="{deleteIcon}" alt="delete" />
                  <img src="{editIcon}" alt="edit" />
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    );    
  }
}
  

export default EmployeeTable;