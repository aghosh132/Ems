import React, { useEffect, useState } from 'react'
import {v4 as uuid} from 'uuid';



import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Add() {

  const [id,setId]=useState('')
  const [name,setName]=useState('')
  const [desig,setDesig]=useState('')
  const [sal,setSal]=useState(0)
  const [exp,setExp]=useState(0)


useEffect(() => {
  setId(uuid().slice(0,3));
}, [])

let location=useNavigate()

const addEmployee=async (e)=>{
  e.preventDefault()
  setId(uuid().slice(0,3))
  const body={
id,
name,
designation:desig,
salary:sal,
experience:exp
  }
const result=await axios.post('http://localhost:8000/addEmployee',body)
location('/')
alert(result.data.message)
}
console.log(id);
console.log(name);
console.log(desig);
console.log(sal);
console.log(exp);


  return (
    <div>
      <br />
      <form className='w-50 form-control conatiner-fluid' style={{marginLeft:"20rem"}}>
      <MDBInput onChange={(e)=>setName(e.target.value)} className='mb-4' id='form5Example1' type='text' placeholder='employee name' />
      <MDBInput onChange={(e)=>setDesig(e.target.value)} className='mb-4' type='text' id='form5Example2' placeholder='designation' />
      <MDBInput onChange={(e)=>setSal(e.target.value)} className='mb-4' type='number' id='form5Example2' placeholder='salary' />
      <MDBInput onChange={(e)=>setExp(e.target.value)} className='mb-4' type='number' id='form5Example2' placeholder='experiance' />

     

      <MDBBtn onClick={(e)=>addEmployee(e)} type='submit' block>
        Add
      </MDBBtn>
    </form>
    </div>
  )
}

export default Add
