import express from'express';
import mongoose from 'mongoose';
import newEmployeeRouter from'./routes/addEmployeeservice.js'
import getEmployeeRouter from'./routes/getEmployee.js'


const app = express();

//middle ware logic
app.use(express.json());
app.use(express.urlencoded({extended:true}))


//how to connect mongodb
mongoose.connect("mongodb://127.0.0.1:27017/erp")
.then(()=>console.log("database connected"))
.catch((err)=>console.log(err));
app.use("/add",newEmployeeRouter);
app.use("/get",getEmployeeRouter);

//server logic
app.listen(4000,
    ()=>console.log("server running on port 4000"));

    