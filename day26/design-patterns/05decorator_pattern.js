class Coffee {
    cost() {
      return 5;
    }
  }
  
  function withMilk(coffee) {
    const cost = coffee.cost();
    coffee.cost = () => cost + 2;
    return coffee;
  }
  
  function withSugar(coffee) {
    const cost = coffee.cost();
    coffee.cost = () => cost + 1;
    return coffee;
  }
  
  let myCoffee = new Coffee();
  myCoffee = withMilk(myCoffee); // Adds milk
  myCoffee = withSugar(myCoffee); // Adds sugar

//   export default connect(mapStateToProps)(ListCourses);
  
  console.log(myCoffee.cost()); // Output: 8
  