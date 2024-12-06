// var p = T$("Puneet", "jp")
// console.log(p)
// p.validate();
// console.log(p.sayHello())
// console.log(p.greeting())

$('#login').click(function(){
    // var p = T$("Puneet", "jp")
    var p = Translate("Priya", "en")


    p.setLanguage($('#lang').val()).HTMLGreeting("#greeting").log()
})
