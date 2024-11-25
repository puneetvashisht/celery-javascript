
var sum = (a, b)=> a + b;

var employees = 
    [{"id":1,"first_name":"Ximenez","last_name":"Duker","email":"xduker0@meetup.com","gender":"Male","ip_address":"61.11.220.203"},
{"id":2,"first_name":"Allister","last_name":"Peto","email":"apeto1@parallels.com","gender":"Male","ip_address":"84.209.243.90"},
{"id":3,"first_name":"Tabitha","last_name":"Gillise","email":"tgillise2@altervista.org","gender":"Female","ip_address":"5.182.209.179"},
{"id":4,"first_name":"Jerad","last_name":"Nairns","email":"jnairns3@reference.com","gender":"Male","ip_address":"65.108.44.71"},
{"id":5,"first_name":"Dion","last_name":"Kasman","email":"dkasman4@cornell.edu","gender":"Female","ip_address":"169.125.39.76"},
{"id":6,"first_name":"Lief","last_name":"Gath","email":"lgath5@weather.com","gender":"Male","ip_address":"51.15.234.173"},
{"id":7,"first_name":"Merilee","last_name":"Sarll","email":"msarll6@stanford.edu","gender":"Female","ip_address":"190.54.167.199"},
{"id":8,"first_name":"Greer","last_name":"Dabernott","email":"gdabernott7@rambler.ru","gender":"Female","ip_address":"232.90.59.41"},
{"id":9,"first_name":"Godwin","last_name":"Kobierzycki","email":"gkobierzycki8@shutterfly.com","gender":"Male","ip_address":"90.143.44.218"},
{"id":10,"first_name":"Flynn","last_name":"Jime","email":"fjime9@abc.net.au","gender":"Male","ip_address":"144.162.54.174"}]
  

// function filterEmployeesByGender(employees, gender) {
//     return employees.filter(employee => employee.gender === gender);
// }

// var listMaleEmployees = employees.filter(function(employee){
//     return employee.gender === 'Male';
// })

var listMaleEmployees = employees.filter(employee => employee.first_name.startsWith("A"))
console.log(listMaleEmployees);


var listOfEmployeeNames = employees.map(e => e.first_name)

console.log(listOfEmployeeNames);

