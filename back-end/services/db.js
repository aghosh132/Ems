const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/ems")
const Employee=mongoose.model('Employee',
{
    id:String,
    name:String,
    designation:String,
    salary:Number,
    experience:Number
}
 

)
module.exports={
    Employee
}