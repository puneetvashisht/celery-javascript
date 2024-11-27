

function abc(){
    var a = "Local thing"
    console.log('Hello ' + name);
}
abc();



// iife

// var name = "Global thing";

(function(){
    var name = "Local thing"
   console.log('Hello ' + name);
})();

console.log('Hello ' + name);
