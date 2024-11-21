
const express = require('express')
const cors = require('cors')
const app = express()

const port = 3000
const courses = [
    {id: 1, title: "React", description: "React is library supported by facebook!"},
    {id: 2, title: "Angular", description: "Angular is framework supported by google!"}
]

app.use(express.json());
app.use(cors())

app.get('/courses', (req, res) => {
  res.json(courses)
})


app.post('/courses', function(req, res){
    const newCourse = req.body
    console.log(req.body)
    newCourse.id = courses.length + 1
    courses.push(newCourse)
    res.status(201).json(newCourse)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})