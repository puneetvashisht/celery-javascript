const express = require('express')
const app = express()
const port = 3000

const courses = [
    {id: 1, title: "React", description: "React is library supported by facebook!"},
    {id: 2, title: "Angular", description: "Angular is framework supported by google!"}
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/courses', (req, res) => {
  res.json(courses)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})