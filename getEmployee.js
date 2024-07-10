import express from'express';

import Employee from '../model/employee.js';
const router = express.Router();

router.get("/rest/getEmployees",async(req,res)=>{
    try{
        const employees = await Employee.find();
        res.json(employees);

    }
    catch(error)
    {
        res.status(404).json({message:error.message});
    }
})

export default router;