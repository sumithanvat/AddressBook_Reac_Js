import React from 'react';
import { Route, Routes, Link } from 'react-router-dom'; 
import './Component/PayrollForm.css';

import EmployeeTable from './Component/EmployeeTable'; 
import PayrollForm from './Component/PayrollForm';

function App() {
  return (
    <div>
      <nav>
        <Link to="/add">PayrollForm</Link>
        <br />
        <Link to="/">EmployeeTable</Link>
        <br />
      </nav>

      <Routes>
  <Route path="/add" element={<PayrollForm />} />
  <Route path="/addEmployee" element={<PayrollForm />} />
  <Route path="/editform/:id" element={<PayrollForm />} />
  <Route path="/" element={<EmployeeTable />} />
</Routes>

    </div>
  );
}

export default App;
