console.log('starting..');

//synchronous call
function foo(){
    console.log('foo function called...');
    return "success";
}

var result = foo();

console.log('result:', result);

console.log('ending..');