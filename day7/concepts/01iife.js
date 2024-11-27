// Immediately Invoked Functional Express (IIFE)
var result = function(str){
    console.log(str); 
    return str;   
}('foo called...');

console.log(result);


3;
"any string stuff heree ";

(function(){
    var x = 'xyz'
    console.log("xyz...");   
})();


function pqr(){
    var x = 'pqr'
    console.log(this);
    
}
pqr();


