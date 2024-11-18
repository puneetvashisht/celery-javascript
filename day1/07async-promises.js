console.log('starting..');


//asynchronous call
function foo(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('foo function called...');
            resolve("success")
        }, 5000)
    }) 
}

// var result = foo();
foo()
.then(function(result){
    console.log('result:', result)
    return result[0]
})
.then(function(result){
    console.log('result again:', result)
})

// console.log('result:', result);

console.log('ending..');