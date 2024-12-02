
const Employee = require('../schemas/employee')

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

const getEmployee = async(req, res) => {
    // res.send('Fetch Employee by ID: ' + req.params.id)
    const employee = await Employee.findById(req.params.id);
    if(!employee) return res.status(404).send('Employee not found')
    res.json(employee)
}

const deleteEmployee = (req, res) => {
    res.send('Delete Employee by ID: ' +  req.params.id)
}

const updateEmployee = async(req, res) => {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {new: true})  
    if(!employee) {
        return res.status(404).send('Employee not found')
    } 
    console.log(employee);
    
    res.json(employee)
}

module.exports = {getEmployees, addEmployee, getEmployee, deleteEmployee, updateEmployee}