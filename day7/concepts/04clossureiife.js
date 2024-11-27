



// Avoiding global variable pollution with IIFE

// private variable that cant be set directly
const counter = (function(){
    let count = 0;

    return {
        increment: function(){
            count +=1
            return count;
        },
        decrement: function(){
            count -=1
            return count;
        },

    }
})();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
