import React, { useEffect, useState } from 'react';
import profileImage1 from '../images/ProfileImage1.png';
import profileImage2 from '../images/ProfileImage2.png';
import profileImage3 from '../images/ProfileImage3.png';
import profileImage4 from '../images/ProfileImage4.png';
import Logo from '../images/logo.png'; 
import EmployeeService from '../Service/EmployeeService.js'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PayrollForm=(props)=> {
  let initialValue={
    name:"",
    gender:"",
    phoneNumber:"",
    email:"",
    profilePic:"",
    checkBoxValue:[],
    checkBoxOption:["HR","IT","Sales","Management"],
    salary:"",
    startDate: new Date().toISOString().substr(0, 10),
    address:"",
    note:"",
    isUpdate:false,

  }
  const[formData,setFormData]=useState(initialValue);
  const params = useParams();


  useEffect(() => {
    console.log("UseEffect");
      if (params.id) {
        console.log("Inside if ");
          getDataById(params.id);
      }
  }, [params.id]);

  const getDataById =(id) =>{
    EmployeeService.getEmployeeByID(id)
    .then((response)=>{
      let object = response.data.data;
      setData(object);
    })
    .catch((err)=>{
      alert("err is ",err)
    })
  }
  const setData = (obj) =>{
    let array =obj.startDate;
    console.log(array);
    console.log(obj);

    setFormData({
      ...formData,
      ...obj,
      id: obj.id,
      email:obj.email,
      
      name:obj.name,
      checkBoxValue:obj.department,
      isUpdate:true,
      startDate:obj.startDate,
      note:obj.note,
    })
  }
  const handleInputChange =(event) => {
    console.log(event.target.name);
    setFormData({...formData,[event.target.name]:event.target.value});

  };
  // const handleSubmit =() =>{
  //   console.log(formData)
  // }
  const handleCheckBoxChange = (event) =>{
    console.log(event.target.name);
    let updateValues = formData.checkBoxValue;
    if(event.target.checked){
      updateValues.push(event.target.name);
    }else{
      updateValues=updateValues.filter((value)=>value !==event.target.name);
    }
  
  setFormData({...formData,checkBoxValue:updateValues});
  };
  const save = async(event) => {
    event.preventDefault();
    console.log(formData)

    let object ={
      name:formData.name,
      email:formData.email,
      phoneNumber:formData.phoneNumber,
      gender:formData.gender,
      profilePic:formData.profilePic,
      department:formData.checkBoxValue,
      salary:formData.salary,
      startDate:formData.startDate,
      note:formData.note,
      address:formData.address,
    };

    console.log(object);

    if (formData.isUpdate) {
  var answer = window.confirm(
    "Data once modified can not be restored, do you want to continue?"
  );
  if (answer === true) {
    EmployeeService.updateEmployee(params.id, object)
      .then((response) => {
        console.log(response.data.data);
        alert("Data updated successfully");
      })
      .catch((error) => {
        alert("Warning: error while updating the data ", error);
      });
  } else {
    window.location.reload();
  }
} else {
  EmployeeService.addEmployee(object)
    .then((response) => {
      console.log(response.data.data);
      alert("Employee added successfully");
    })
    .catch((error) => {
      console.log(error);
      alert("Warning");
    });
}

  }


    return(
      <div className="App">
        <div className='container'>
        
          <img src={Logo} alt="" />
          
         
            <span>Employee</span>
            <br />
            <span>Payroll</span>
            
        </div>
        <form id="payroll-form" className="payroll-form">
          <h2>Employee Payroll Form</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="employee-name" name="name" className="input-text"
            value={formData.name}
             onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="employee-email" name="email" className="input-text"
            value={formData.email}
             onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" id="employee-phoneNumber" name="phoneNumber" className="input-text"
            value={formData.phoneNumber}
             onChange={handleInputChange} />
          </div>
          <div className="form-group">
          <label>Gender</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleInputChange}
              checked={formData.gender === "male"}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleInputChange}
              checked={formData.gender === "female"}
            />{" "}
            Female
          </label>
        </div>

          <div className="form-group">
            <label>Profile Image</label>
            <label>
              <input
                type="radio"
                name="profilePic"
                value={"../images/ProfileImage1.png"}
                onChange={handleInputChange}
                checked={formData.profilePic==='../images/ProfileImage1.png'} required
              />
              <img className ="image1" src={profileImage1} alt="Profile 1" />
            </label>
            <label>
              <input
                type="radio"
                name="profilePic"
                value={"../images/ProfileImage2.png"}
                onChange={handleInputChange}
                checked={formData.profilePic==='../images/ProfileImage2.png'}
              />
              <img src={profileImage2} alt="Profile 2" />
            </label>
            <label>
              <input
                type="radio"
                name="profilePic"
                value={"../images/ProfileImage3.png"}
                onChange={handleInputChange}
                checked={formData.profilePic==='../images/ProfileImage3.png'}
              />
              <img src={profileImage3} alt="Profile 3" />
            </label>
            <label>
              <input
                type="radio"
                name="profilePic"
                value={"../images/ProfileImage4.png"}
                onChange={handleInputChange}
                checked={formData.profilePic==='../images/ProfileImage4.png'}
              />
              <img src={profileImage4} alt="Profile 4" />
            </label>
          </div>
          
          <div className="form-group">
          <label>Departments</label>
          {formData.checkBoxOption.map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                name={option}
               value={option}
                onChange={handleCheckBoxChange}
                checked={formData.checkBoxValue.includes(option)}
              />
              {option}
            </label>
          ))}
        </div>
        
          <div className="form-group">
            <label htmlFor="salary">Salary</label>
            <input type="text" id="salary" name="salary" className="input-text"
            value={formData.salary}
             onChange={handleInputChange}/>
          </div>
          <div className='formGroup'>
  <label htmlFor="address">Address</label>
  <textarea
    id="address"
    name="address"
    className="input-address"
    rows="3"
     value={formData.address}
    onChange={handleInputChange}
  ></textarea>
</div>

          <div className="form-group">
            <label htmlFor="start-date">Start Date</label>
            <input type="date" id="start-date" name="startDate"
            onChange={handleInputChange}
            value={formData.startDate} />
          </div>
          <div className="form-group">
            <label htmlFor="note">note</label>
            <textarea id="note" name="note" rows="4"
            onChange={handleInputChange}
            value={formData.note}></textarea>
          </div>
          <div className="form-group buttons">
            <button type="cancel" id="cancel-btn" className="btn">Cancel</button>
            <Link className='submit' to="/">
            <button type='submit'
            onClick={save} id="submit-btn" value="Submit" >{
              formData.isUpdate ? "Update" : "Submit"
            }</button>
            </Link>
            <button type="reset" id="reset-btn" className="btn">Reset</button>
          </div>
        </form>
      </div>
    );
    };
  
  export default PayrollForm;