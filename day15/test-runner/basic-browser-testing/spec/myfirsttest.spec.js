// what this file is testing
// var sum = require('../calc')
describe("A suite", function() {

    // individual test 
    it("contains a spec with an expectation", function() {
        expect(true).toBe(false);
    });

    it("2 + 2 should be 4", function(){
        var input1 = 2;
        var input2 = 2
        var result = sum(input1,input2);
        expect(result).toBe(4)
    })


    it("-2 + -2 should be -4", function(){
        var result = sum(-2,-2);
        expect(result).toBe(-4)
    })
});