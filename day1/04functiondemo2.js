// 1. Creation outer[x: undef, inner: undef]
// inner[x: undef]

// 2. Execution outer[x: 2, inner: fn]
// inner[x: undef]

function outer(){
    console.log('outer fn invoked...')
    var x = 2;
    var inner = function(){
        console.log('inner fn invoked...')
        console.log('x:', x + 2);
        var x = 10
    }
    return inner;
}

// var myInnerFn = outer();
// myInnerFn();

outer()();