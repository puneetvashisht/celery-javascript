const { fetchDataWithDelay, fetchDataWithDelayReject } = require('../src/asyncFunction');
const { getData } = require('../src/fetchdemo');

const assert = require('chai').assert;


const expect = require('chai').expect;


describe('Async function test', () => {
  it('should resolve the promise after delay', () => {
    const data = "Promise Data!"
    fetchDataWithDelay(data, 1000)
    .then((result)=> {
        expect(result).to.equal(data)
    })

  });


  it('using async await should resolve the promise after delay', async() => {
    const data = "Promise Data!"
    const result = await fetchDataWithDelay(data, 1000);
    expect(result).to.equal(data)

  });

  // it('using async await to call http', async() => {

  //   const result = await getData()
  //   expect(result).to.be.a('array')

  // });


  it('using async await should reject the promise after delay', async() => {
    const data = "Promise Data!"
    try{
        const result = await fetchDataWithDelayReject(data, 1000);
        
    }
    catch(error){
        expect(error).to.equal('Some error!')
    }
   

  });
});
