function factorial(n) {
    if (n === 0) return 1; // Base case
    return n * factorial(n - 1); // Recursive case
  }
  
  console.log(factorial(5)); // 120


  function sum(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sum(arr.slice(1));
  }
  
  console.log(sum([1, 2, 3, 4])); // 10
  
  