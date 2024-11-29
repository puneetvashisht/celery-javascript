const express = require('express')
const router = express.Router()
const {getEmployees, addEmployee, getEmployee, deleteEmployee} = require('../controllers/employee')

router.route('/')
    .get(getEmployees)
    .post(addEmployee);

router.route('/:id')
    .get(getEmployee)
    .delete(deleteEmployee)


module.exports = router;