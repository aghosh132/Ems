import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
function Home() {
  const [employees,setEmployees]=useState([])
  //api call
  const fetchEmployees=async()=>{
    const result=await axios.get('http://localhost:8000/getEmployees')
    setEmployees(result.data.message)
  }
  console.log(employees);

  useEffect(() => {
    fetchEmployees()
  }, [])

  const deleteEmployee=async(id)=>{
    const result=await axios.delete("http://localhost:8000/deleteEmployee/"+id)
    alert(result.data.message)
    fetchEmployees()
  }

  return (
    <div className='container'>
        <Row></Row>
      <div className='p-5'>
        <h1>CrewConnect</h1>
        <p>
        CrewConnect is an advanced employee management web application designed to streamline and simplify the process of managing a workforce in various industries. It provides a centralized platform that enables businesses to efficiently manage their employees' information, schedules, and communications.
       
        </p>
        <br />
   <Link to={'/add'}>
        <button style={{borderRadius:"4px",height:"3rem"}} className='bg-dark'>Add New Employee</button>
  
   </Link>      </div>

      <h1 className='text-center'>List of Employees</h1>

      <div className='table-responsive'>
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              <th>#</th>
              <th>Id</th>
              <th>Full Name</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Experience</th>
              <th>Actions</th>

            </tr>
          </thead>
          <tbody>

            {
              employees?.map((employees,index)=>(
                <tr>
                <td>{index}</td>
                <td>{employees.id}</td>
                <td>{employees.name}</td>
                <td>{employees.designation}</td>
                <td>{employees.salary}</td>
                <td>{employees.experience}</td>
                <td className='btn-1'>

                    <Link to={`view/${employees.id}`}>       
                    <button className='bg-danger'><i class="fa-solid fa-eye"></i><a style={{textDecoration: "none"}} href="">view</a></button>
                    </Link>

                    <Link to={`edit/${employees.id}`}>
                    <button  className='bg-success'><i class="fa-solid fa-pencil"></i><a style={{textDecoration: "none"}} href="">edit</a></button> 
  
                    </Link>  

                    <Link>
                  <button  onClick={() => deleteEmployee(employees.id)} className='bg-primary'><i class="fa-solid fa-trash-can"></i><a   style={{textDecoration: "none"}} href="">delete</a></button>
  
                </Link>                </td>
              </tr>

              ))
            }

         
          
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Home;
