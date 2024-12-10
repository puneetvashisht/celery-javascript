const expect = require('chai').expect;
// const should = require('chai').should;
var should = require('chai').should()
const {readFromFileAsync} = require('../src/filereaddemo')


describe('File Read', () => {
    // positive test case
    it('should be able to read the file', async () => {
       const contents = await readFromFileAsync('./src/dummy.txt')
       contents.should.include('Node')
       contents.should.be.a('string');

    });

    // negative test case
    it('should not be able to read a file with incorrect path', async () => {
        try{
            const contents = await readFromFileAsync('./abc.pdf')
        }
        catch(err){
            expect(err.code).to.equal('ENOENT')
        }
        

 
     });


    // it('test the should ', ()=> {
    //      //actually call the function
    //         var foo = 'bar'
            

    //         foo.should.be.a('string');
    //         foo.should.equal('bar');
    //         foo.should.have.lengthOf(3)
    // })
  });