function outer(whattosay){

    return function(name){
        console.log(whattosay + ' ' + name);
        
    }
}

var sayHi = outer("Hi")
sayHi("Ravi");
sayHi("Priya");


// function outerFn(){
//     var arr = []
//     for(var i =0; i< 3; i++){
//         arr.push(
//             function(){
//                 console.log(i);        
//             }
//         )
//     }
//     return arr;
// }

function outerFn(){
    var arr = []
    for(var i =0; i< 3; i++){
        arr.push(
            (function(j){
                return function(){
                    console.log(j);
                    
                }
            }(i))
        )
    }
    return arr;
}

var result = outerFn();
result[0]();
result[1]();
result[2]();