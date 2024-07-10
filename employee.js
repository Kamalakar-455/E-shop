import mongoose from "mongoose";
const employeeSchema = mongoose.Schema({
    eid:{
        type:Number,
        required:true
    
    },
    ename:{
        type:String,
        required:true
    },
    esal:{
        type:Number,
        required:true
    },
    eadd:{
        type:String,
        required:true
    }

})
const Employee = mongoose.model("employee_infos",employeeSchema);

export default Employee;