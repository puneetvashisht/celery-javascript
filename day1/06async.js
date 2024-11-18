console.log('starting..');


//asynchronous call
function foo(callback){
    setTimeout(function(){
        console.log('foo function called...');
        // return "success";
        callback("success")
    }, 5000)
}

// var result = foo();
foo(function(result){
    console.log('result:',result)
})

// console.log('result:', result);

console.log('ending..');