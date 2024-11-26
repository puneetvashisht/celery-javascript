// // 1. Creation Global[a: undef, b: fn]
// inner[x: undef]

// 2. Execution Phase
// [a: 'Some value', b: fn]



// Global Execution Context
// var a = 'x';
// b();

// function b(){
//     // Function Execution Context for b()

//     var a = 'y';
//     console.log('In B', a)
//     console.log('b function called...');
// }

// console.log(a);
// var a  = 'Some value';


// 1. Creation Phase
// global [a:fn, b:fn, myVar:undef ]
// a[myVar: undef]
// b[]

// 2. Execution 
// global [a:fn, b:fn, myVar:1 ]
// a[myVar: 2]
// b[]

function b(){
    let myVar = 10
    console.log(myVar);
    console.log(this); 
}

function a(){
    var myVar = 2
    b()
}



var myVar = 1;
a();
console.log('Global ', myVar);







// console.log(window)

// console.log(this)


