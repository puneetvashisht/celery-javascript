// what this file is testing
var sum = require('../calc')
describe("A suite", function() {

    var foo = 0;

    // beforeEach, afterEach
    // afterAll -- only once 
    beforeAll(function() {
        console.log('before each test case is executed')
        foo += 1;
    });

    // individual test 
    it("contains a spec with an expectation", function() {
        expect(true).toBe(true);
        expect(foo).toBe(1)
    });

    it("2 + 2 should be 4", function(){
        var input1 = 2;
        var input2 = 2
        var result = sum(input1,input2);
        expect(result).toBe(4)
        expect(foo).toBe(1)
    })


    it("-2 + -2 should be -4", function(){
        var result = sum(-2,-2);
        expect(result).toBe(-4)
    })
});