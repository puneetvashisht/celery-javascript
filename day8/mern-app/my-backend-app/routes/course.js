const express = require('express')
const router = express.Router()

const courses = [
    {id: 1, title: "React", description: "React is library supported by facebook!"},
    {id: 2, title: "Angular", description: "Angular is framework supported by google!"}
]

router.get('/', (req, res) => {
    res.json(courses)
  })

module.exports = router