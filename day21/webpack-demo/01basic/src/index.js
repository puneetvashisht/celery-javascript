
var user = require('./user')

var app = document.getElementById('message')
app.innerHTML = `<p> Welcome ${user.name} to ${user.training} training session</p>`