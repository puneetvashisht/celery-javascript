const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
    name: String,
    salary: Number,
    created_at: { type: Date, default: Date.now }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;