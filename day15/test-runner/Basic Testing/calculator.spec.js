describe("Calculator", function () {
  it("should add two numbers", function () {
    expect(add(2, 3)).toEqual(5);
  });

  it("should subtract two numbers", function () {
    expect(subtract(5, 3)).toEqual(2);
  });

  it("should multiply two numbers", function () {
    expect(multiply(2, 3)).toEqual(6);
  });

  it("should divide two numbers", function () {
    expect(divide(6, 3)).toEqual(2);
  });
});
