import React, { useEffect, useState } from 'react'
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function Edit() {
 
  const [name,setName]=useState('')
  const [desig,setDesig]=useState('')
  const [sal,setSal]=useState(0)
  const [exp,setExp]=useState(0)

  const params=useParams()
  const viewEmployee=async()=>{
    const result=await axios.get(`http://localhost:8000/viewEmployees/${params.id}`)
    setName(result.data.message.name);
    setDesig(result.data.message.designation);
    setSal(result.data.message.salary);
    setExp(result.data.message.experience);
 
    
  }

 const editEmployee =async (e)=>{
  e.preventDefault();
  const body={
    id:params.id,
    name,
    designation:desig,
    salary:sal,
    experience:exp
  }
  const result=await axios.post("http://localhost:8000/editEmployee",body)
  alert(result.data.message)
 }

  useEffect(() => {
    viewEmployee()

  }, [])
  return (
    <div>
      <br />
      <br />
       <form className='w-50 form-control conatiner-fluid' style={{marginLeft:"20rem"}}>
      <MDBInput onChange={(e)=>setName(e.target.value)} value={name} className='mb-4' id='form5Example1' type='text' placeholder='employee name' />
      <MDBInput onChange={(e)=>setDesig(e.target.value)} value={desig} className='mb-4' type='text' id='form5Example2' placeholder='designation' />
      <MDBInput onChange={(e)=>setSal(e.target.value)} value={sal} className='mb-4' type='number' id='form5Example2' placeholder='salary' />
      <MDBInput onChange={(e)=>setExp(e.target.value)} value={exp} className='mb-4' type='number' id='form5Example2' placeholder='experiance' />

     

      <MDBBtn onClick={(e)=>editEmployee(e)} type='submit' block>
        Edit
      </MDBBtn>
    </form>
      
    </div>
  )
}

export default Edit


//stuent admin project angular 
//using findone and anthoer delete one in angular