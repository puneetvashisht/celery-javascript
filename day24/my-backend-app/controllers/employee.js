
const Employee = require('../schemas/employee')
const logger = require('../logger')
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/ErrorResponse');

const getEmployees = async(req, res) => {
    // res.send('Fetch employee!')
    const employees =  await Employee.find();
    res.json(employees)
}


const addEmployee = async(req, res) => {
    const employee = new Employee(req.body)
    const e = await Employee.create(employee);
    // res.send('Add Employee!')
    res.json(e)
}

const getEmployee = asyncHandler(async(req, res,next) => {
    // res.send('Fetch Employee by ID: ' + req.params.id)
    try{
        const employee = await Employee.findById(req.params.id);
        if(!employee) throw Error('Employee not found!')
        res.json(employee)
    }
    catch(err){
        logger.error(err)
        // return res.status(404).send('Employee not found')
        next(
            new ErrorResponse(`Employee not found`, 404)
        );
    }
    
})

const deleteEmployee = (req, res) => {
    res.send('Delete Employee by ID: ' +  req.params.id)
}

const updateEmployee =  async(req, res, next) => {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {new: true})  
    if(!employee) {
        return res.status(404).send('Employee not found')
    } 
    console.log(employee);
    
    res.json(employee)
}

module.exports = {getEmployees, addEmployee, getEmployee, deleteEmployee, updateEmployee}