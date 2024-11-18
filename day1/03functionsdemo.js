
function printMe(fn){
    fn();
}

function foo(){
    console.log("foo fn...");
}
function bar(){
    console.log("bar fn...");
}

printMe(foo)
printMe(bar)