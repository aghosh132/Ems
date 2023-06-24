const db=require("./db")

//get  All employees


getAllEmployees=()=>{
    return db.Employee.find().then(users=>{
        if(users){
            return{
                status:true,
                statusCode:200,
                message:users
            }
        }

        else{
            return{
                status:false,
                statusCode:400,
                message:'no employees present'
            }

        }
    })
}



viewEmployees =(id)=>{
    return db.Employee.findOne({id}).then(users=>{
      
        if(users){
            return{
                status:true,
                statusCode:200,
                message:users
            }
        }

        else{
            return{
                status:false,
                statusCode:400,
                message:'no employees present'
            }

        }
    })
}

deleteEmployees =(id)=>{
    return db.Employee.deleteOne({id}).then(users=>{
      
        if(users){
            return{
                status:true,
                statusCode:200,
                message:"employee deleted"
            }
        }

        else{
            return{
                status:false,
                statusCode:400,
                message:'no employees present'
            }

        }
    })
}



addNewEmployee =(id,name,designation,salary,experience)=>{
    return db.Employee.findOne({id}).then(users=>{
      
        if(users){
            return{
                status:false,
                statusCode:400,
                message:"employee already present"
            }
        }

        else{

            newEmployee= new db.Employee({
                id,
                name,
                designation,
                salary,
                experience

            })
            newEmployee.save()
            return{
                status:true,
                statusCode:200,
                message:'new employee added'
            }

        }
    })
}



editEmployee =(id,name,designation,salary,experience)=>{
    return db.Employee.findOne({id}).then(users=>{
        console.log(users);
      
        if(users){
            users.name=name,
            users.designation=designation,
            users.salary=salary,
            users.experience=experience
            users.save()
          return{
            status:true,
            statusCode:200,
            message:' employee data added'
        }
        }

        else{
            return{
                status:false,
                statusCode:400,
                message:'employee not present'
            }

        }
    })
}








module.exports={
    getAllEmployees,
    viewEmployees,
    deleteEmployees,
    addNewEmployee,
    editEmployee
}

//single employee
//add new employee
//edit employee
//delete