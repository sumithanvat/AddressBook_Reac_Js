import { logDOM } from "@testing-library/react";
import axios from "axios";

class EmployeeService{
    baseUrl="http://localhost:8085";
    addEmployee(data){
        return axios.post(`${this.baseUrl}/add`, data);
    }
    getAllEmployee(){
        return axios.get(`${this.baseUrl}/Getallemployee`);
    }
    deleteEmployee(id){
        return axios.delete(`${this.baseUrl}/DeleteById/${id}`)
    }
    updateEmployee(id,data){
        return axios.put(`${this.baseUrl}/updateemployee/${id}`,data)
    }
    getEmployeeByID(id){
        console.log((`${this.baseurl}/getemployee/${id}`));
        return axios.get(`${this.baseUrl}/getemployee/${id}`)
    }
}



export default  new EmployeeService();