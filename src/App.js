
import EmployeeTable from './Component/EmployeeTable.jsx';
import PayrollForm from './Component/PayrollForm.jsx';
import React from 'react';
import {Route,Routes,Link} from "react-router-dom";
import './Component/EmployeeTable.css'
import './Component/PayrollForm.css'

function App() {
  
  return (
    <div>
     <nav>
      <Link to="/add">PayrollForm</Link><br></br>
      <Link to="/EmployeeTable">EmployeeTable</Link><br></br>
      
     </nav>
      
      <Routes>
        <Route path='/add'element={<PayrollForm/>}/>
           
        <Route path='/EmployeeTable' element={<EmployeeTable/>}/>

             </Routes>
    </div>
  );
}

export default App;