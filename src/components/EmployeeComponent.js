import React, {useState,useEffect} from 'react'
import EmployeeService from '../services/EmployeeService'

function EmployeeCompoenent(){
    const [employees,setEmployees] = useState([])

    useEffect(()=>{
        EmployeeService.getAllEmployees().then((response) =>{
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    },[]);

    return (
        <div className='container'>
            <h1 className='text-center'>Employee List</h1>

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee name</th>
                        <th>Employee Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                            <tr key = {employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeCompoenent