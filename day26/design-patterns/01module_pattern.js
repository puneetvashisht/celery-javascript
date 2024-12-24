const Module = (function () {
    // Private variables and methods
    let privateCounter = 0;
  
    function privateMethod() {
      console.log("Private method");
    }
  
    // Public API
    return {
      incrementCounter() {
        privateCounter++;
      },
      getCounter() {
        return privateCounter;
      },
    };
  })();
  
  Module.incrementCounter();
  console.log(Module.getCounter()); // Output: 1
  