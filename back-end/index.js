const express= require ("express")
const server=express()
const cors=require("cors")
server.use(cors({origin:"http://localhost:3000"}))
//convert json to js 
server.use(express.json())
const logic=require('./services/logic')

server.listen(8000, () => {
    console.log("ems server started at port 8000");
  });
  
  //get all employee
  server.get("/getEmployees", (req, res) =>{
    logic.getAllEmployees().then(result=>{
      res.status(result.statusCode).json(result)
    })
  })
//view employees
  
  server.get("/viewEmployees/:id", (req, res) =>{
    console.log(req.params);
    logic.viewEmployees(req.params.id).then(result=>{
      res.status(result.statusCode).json(result)
    })
  })

  //delete employees 

  server.delete("/deleteEmployee/:id", (req, res) =>{
    console.log(req.params);
    logic.deleteEmployees(req.params.id).then(result=>{
      res.status(result.statusCode).json(result)
    })
  })

  server.post("/addEmployee", (req, res) =>{
   
    logic.addNewEmployee(
      req.body.id,
      req.body.name,
      req.body.designation,
      req.body.salary,
      req.body.experience).then(result=>{
      res.status(result.statusCode).json(result)
    })
  })

  server.post("/editEmployee", (req, res) =>{
   
    logic.editEmployee(
      req.body.id,
      req.body.name,
      req.body.designation,
      req.body.salary,
      req.body.experience).then(result=>{
      res.status(result.statusCode).json(result)
    })
  })
