const express = require('express')
const app = express()
const port = 3000
const product = require('./routes/product')
const course = require('./routes/course')
const cors = require('cors')
const mongoose = require('mongoose');

async function connectToDb(){
  await mongoose.connect('mongodb://127.0.0.1:27017/eclerx_db')
  console.log('Connected!')

}

connectToDb();

// custom-middleware
app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

app.use(express.json())
app.use(cors())

app.use("/products", product);
app.use("/courses", course)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})