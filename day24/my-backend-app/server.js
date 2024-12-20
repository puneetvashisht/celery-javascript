const express = require('express')
const logger = require('./logger')
const app = express()
const employee = require('./routes/employee')
const mongoose = require('mongoose');
const cors = require('cors')
const colors = require('colors')

const port = 3000

async function connectToDb(){
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/eclerx_db')
    console.log('Connected!'.underline.green)
    logger.debug('Successfully connected to database!')
  }
  catch(err){
    console.log('Connection problem with DB'.underline.red)
    logger.error('Connection problem with DB')
  }
   
  
  }
  
  connectToDb();
app.use(cors())
app.use(express.json())
app.use('/api/v1/employees' , employee);

app.listen(port, ()=> {
    console.log('Running on port ' + port);
    
})