const sinon = require('sinon');


// spy - watch the funciton but don't alter it
const myFunction = () => { 
    console.log('My func');
    return "My func";
}

const obj = { myMethod: () => {}}


describe('Test Mocha Fakes (spy, stubs, mocks)', ()=>{
    it('Spy test', ()=> {
        const spy = sinon.spy(myFunction);
        spy();

        console.log(spy.called);
        
    })

 // replacement to existing function
    it('Stub test', ()=> {
        const stub = sinon.stub().returns('Dummy value');
        console.log(stub());
        console.log(stub.called);
        
    })


// mock
    it('Mock test', ()=> {
        
        
        const mock = sinon.mock(obj);
        mock.expects('myMethod').once().withArgs(23)

        obj.myMethod(23)

        mock.verify();
        
    })
})

