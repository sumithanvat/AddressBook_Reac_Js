 import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import deleteIcon from '../images/delete-black-18dp.svg';
import editIcon from '../images/create-black-18dp.svg'
import '../Component/Display.css';



import EmployeeService from "../Service/EmployeeService";


const Display = (props) => {
    let navigate = useNavigate();
    
    const update = (id) =>{
      console.log("Update method calling",id);
        navigate(`editform/${id}`);
    };

    useEffect(()=> {
        //getAllEmployees();
        console.log(props);
        console.log(" UseEffect Method ");
         }, []);
         
         const remove=(id) =>{
            console.log(id);
            var answer = window.confirm( "If Data is delete you can not restore     do you want to continue ? "
             );
             if (answer === true) {
                EmployeeService.deleteEmployee(id)
                .then ((response) =>{
                    alert("Employee deleted successfully",response.data.data);
                    window.location.reload();
                    props.getAllEmployee();
                })
                .catch((error)=>{
                    alert("somthing went wrong");
                });
             }
             else{
                alert("Employee not deleted")
             }
         };

         return(
    
              <>
              <table id="display" className="display">
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
                      
                      <td>{employee.name}</td>
                      <td>{employee.gender}</td>
                      <td>{employee.phoneNumber}</td>
                      <td>{employee.email}</td>
                      {/* <td><img className='profile'src="employee.profilePic" alt="" /></td> */}
                      <td>{employee.profilePic}</td>
                      <td>{employee.department.join(', ')}</td>
                      <td>{employee.salary}</td>
                      <td>{employee.address}</td>
                      <td>{employee.startDate}</td>
                      <td>{employee.note}</td>
                      <td>
                        <img
                        onClick={()=> remove(employee.id)} src={deleteIcon} alt="delete" />
                        
                        <img onClick={()=>update(employee.id)} src={editIcon} alt="edit" />
         
                        
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          );
        };
        
        export default Display;