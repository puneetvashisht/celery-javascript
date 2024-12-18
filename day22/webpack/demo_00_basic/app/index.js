var message = require('./message');
console.log(message);

// var name = "Arun";
// var str = `Welcome ${name}`;

var app = document.getElementById('mount');
app.innerHTML = '<p>' + message.hi + ' ' + message.event + '</p>';

if(module.hot){
	// module.hot.accept();
	console.log(module.hot)
} 


