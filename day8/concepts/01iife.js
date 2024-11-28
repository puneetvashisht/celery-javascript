

// without iife's
// const arrayUtils = {
//     max: function(arr){
//         return Math.max(...arr);
//     },
//     min: function(arr){
//         return Math.min(...arr);
//     }
// }

const arrayUtils = (function(){
    
    // private functions like isArray
    function isArray(arr){
        return Array.isArray(arr);
    }

    // public methods
    return {  
       max: function(arr){
            if(isArray(arr))
                return Math.max(...arr);
       },
       min: function(arr){
            return Math.min(...arr);
       }
    }
})();

const numbers = [1,101,2,33,4,43,67,89]

// console.log(arrayUtils.isArray(numbers))

console.log(arrayUtils.max(numbers))
console.log(arrayUtils.min(numbers))



//avoid global namespace pollution

const classUtility = (function(){
    return {
        addClass: function(element, className){
            if(!element.classList.contains(className)){
                element.classList.add(className)
            }
        },
        removeClass: function(element, className){
            if(!element.classList.contains(className)){
                element.classList.remove(className)
            }
        },
    }
})()