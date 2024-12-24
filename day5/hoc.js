// A higher-order function is a function that takes one or more functions as arguments and/or returns a function.

function multiplyBy(factor) {
    return function (num) {
      return num * factor;
    };
  }
  
  const double = multiplyBy(2);
  console.log(double(5)); // 10