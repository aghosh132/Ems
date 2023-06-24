import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';


function View() {
  const [employee,setEmployee]=useState([])
  //object creation for useParams
  const params=useParams();
  // console.log(params.id);
 
  //api call
  const viewEmployee=async()=>{
    const result=await axios.get(`http://localhost:8000/viewEmployees/${params.id}`)
    setEmployee(result.data.message);
    
  }
  console.log(employee);
  useEffect(() => {
    viewEmployee()
  }, [])
  return (
    <div>
      
      <MDBCard style={{ maxWidth: '540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
           
                <MDBCardTitle>Employee id : {employee.id}</MDBCardTitle>
                <MDBCardTitle>Employee Name : {employee.name}</MDBCardTitle>
                <MDBCardTitle> Designation : {employee.designation}</MDBCardTitle>
                <MDBCardTitle>Salary: {employee.salary}</MDBCardTitle>
                <MDBCardTitle>Experience: {employee.experience}</MDBCardTitle>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>

    </div>
  )
}

export default View
