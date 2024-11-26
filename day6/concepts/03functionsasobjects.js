foo();

function foo(){
    console.log("foo called...");
}


var foo = function(){
    console.log("foo called...");
}
foo
console.log(a);
var a = 343;


// console.log(window)



// // Functions as objects (first-citizens in Javascript)
foo.abc ="abc value"
console.log(foo.abc);


function print(fn){
    fn();
    var inner = function(){
        console.log("Inner function called...");
    }
    return inner;
}

var result = print(foo)
result();

// foo();



