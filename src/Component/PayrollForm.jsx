import React, { useState } from 'react';

import profileImage1 from '../images/ProfileImage1.png';
import profileImage2 from '../images/ProfileImage2.png';
import profileImage3 from '../images/ProfileImage3.png';
import profileImage4 from '../images/ProfileImage4.png';

function PayrollForm() {
  let initialValue={
    name:"",
    gender:"",
    profile:"",
    checkBoxValue:[],
    checkBoxOption:["HR","IT","Sales","Management"],
    salary:"25000",
    date:"",
    notes:""

  }
  const[formData,setFormData]=useState(initialValue);

  const handleInputChange =(event) => {
    console.log(event.target.name);
    setFormData({...formData,[event.target.name]:event.target.value});

  };
  const handleSubmit =() =>{
    console.log(formData)
  }
  const handleCheckBoxChange = (event) =>{
    let updateValues = formData.checkBoxValue;
    if(event.target.checked){
      updateValues.push(event.target.name);
    }else{
      updateValues=updateValues.filter((value)=>value !==event.target.name);
    }
  
  setFormData({...formData,checkBoxValue:updateValues});
  };



    return(
      <div className="App">
        <form id="payroll-form" className="payroll-form">
          <h2>Employee Payroll Form</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="employee-name" name="name" className="input-text"
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
                name="profile"
                value={profileImage1}
                onChange={handleInputChange}
                checked={formData.profile===profileImage1}
              />
              <img src={profileImage1} alt="Profile 1" />
            </label>
            <label>
              <input
                type="radio"
                name="profile"
                value={profileImage2}
                onChange={handleInputChange}
                checked={formData.profile===profileImage2}
              />
              <img src={profileImage2} alt="Profile 2" />
            </label>
            <label>
              <input
                type="radio"
                name="profile"
                value={profileImage3}
                onChange={handleInputChange}
                checked={formData.profile===profileImage3}
              />
              <img src={profileImage3} alt="Profile 3" />
            </label>
            <label>
              <input
                type="radio"
                name="profile"
                value={profileImage4}
                onChange={handleInputChange}
                checked={formData.profile===profileImage4}
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
                name="department"
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
             onChange={handleInputChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="start-date">Start Date</label>
            <input type="date" id="start-date" name="date"
            onChange={handleInputChange}
            value={formData.date} />
          </div>
          <div className="form-group">
            <label htmlFor="notes">Notes</label>
            <textarea id="notes" name="notes" rows="4"
            onChange={handleInputChange}
            value={formData.notes}></textarea>
          </div>
          <div className="form-group buttons">
            <button type="button" id="cancel-btn" className="btn">Cancel</button>
           <input type='button' id="submit-btn" value="Submit" onClick={handleSubmit}/>
            <button type="reset" id="reset-btn" className="btn">Reset</button>
          </div>
        </form>
      </div>
    );
    };
  
  export default PayrollForm;