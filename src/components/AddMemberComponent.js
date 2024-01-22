import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useHistory , useParams} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const AddMemberComponent = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();
    const {id} = useParams();
    // const navigate = useNavigate();

    const saveOrUpdateMember = (e) =>{
        e.preventDefault();
        const member = {name, email};
        // navigate('/animated');
        // console.log(member);

        if(id){
            EmployeeService.updateEmployee(id,member).then((response) => {
                history.push('/employees')
            }).catch (error =>{
                console.log(error)
            })

        } else {
            EmployeeService.createEmployee(member).then((response) => {
                history.push('/employees')
            }).catch (error => {
                console.log(error)
            })
        }
    }

    useEffect(()=>{
        console.log("id "+id)
        EmployeeService.getAllEmployeeById(id).then((response)=>{
            setName(response.data.name)
            setEmail(response.data.email)
        }).catch(error=>{
            console.log(error)
        })
    },[])

    const title = () => {
        if(id){
            return <h2 className='text-center'>Update Member</h2>
        }else{
            return <h2 className='text-center'>Add Member</h2>
        }
    }
    return (
        <div>
            

            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        {
                            title()
                        }
                        <div className='card-body'>
                            <form>
                                <div className='form-group-mb-2'>
                                    <label className='form-label'>Name :</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Name'
                                        name='name'
                                        className='form-control'
                                        value={name}
                                        onChange= {(e)=> setName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                
                                <div className='form-group-mb-2'>
                                    <label className='form-label'>Email :</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Email'
                                        name='email'
                                        className='form-control'
                                        value={email}
                                        onChange={(e)=> setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className='btn btn-success' onClick={(e)=> saveOrUpdateMember(e)}>Submit</button>
                                <Link to = '/employees' className = 'btn btn-danger'>Cancel</Link>
                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddMemberComponent