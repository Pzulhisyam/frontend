import React, {useState,useEffect} from 'react'
import EmployeeService from '../services/EmployeeService'
import {Link} from 'react-router-dom'

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
            <Link to = '/add-employee' className = 'btn btn-primary mb-2'>Add Member</Link>
            <h2> </h2>
            <Link to = '/members' className = 'btn btn-primary mb-2'>Second View</Link>
            <h2> </h2>
            <Link to = '/animated' className = 'btn btn-primary mb-2'>Animated</Link>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee name</th>
                        <th>Employee Email</th>
                        <th>Actions </th>
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
                            <td>
                                <Link className='btn btn-info' to={`/edit-employee/${employee.id}`}>Update </Link>
                            </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeCompoenent