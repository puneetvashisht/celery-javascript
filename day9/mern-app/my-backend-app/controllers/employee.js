
const Employee = require('../schemas/employee')

const getEmployees = (req, res) => {
    res.send('Fetch employee!')
}


const addEmployee = async(req, res) => {
    const employee = new Employee(req.body)
    const e = await Employee.create(employee);
    // res.send('Add Employee!')
    res.json(e)
}

const getEmployee = (req, res) => {
    res.send('Fetch Employee by ID: ' + req.params.id)
}

const deleteEmployee = (req, res) => {
    res.send('Delete Employee by ID: ' +  req.params.id)
}

module.exports = {getEmployees, addEmployee, getEmployee, deleteEmployee}