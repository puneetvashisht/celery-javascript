const express = require('express')
const app = express()
const employee = require('./routes/employee')
const mongoose = require('mongoose');

const port = 3000

async function connectToDb(){
    await mongoose.connect('mongodb://127.0.0.1:27017/eclerx_db')
    console.log('Connected!')
  
  }
  
  connectToDb();
app.use(express.json())
app.use('/api/v1/employees' , employee);


app.listen(port, ()=> {
    console.log('Running on port ' + port);
    
})