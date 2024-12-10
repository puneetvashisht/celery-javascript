const chai = require('chai')
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http')
const app = require('../app')

chai.use(chaiHttp)


describe('Test Http stuff', () => {
  it('/courses get operation should be success', (done) => {
    chai.request(app)
    .get('/courses')
    .end((err, res)=> {
      res.should.have.status(200);
      res.body.should.be.a('array')
     done();
    })
  });


  it('/products get operation should be success', (done) => {
    chai.request(app)
    .get('/products')
    .end((err, res)=> {
      res.should.have.status(200);
      res.body.should.be.a('array')
     done();
    })
  });


  it('/products create operation should be success', (done) => {

    const product = {name:"test_product","price":99999};

    chai.request(app)
    .post('/products')
    .send(product)
    .end((err, res)=> {
      res.should.have.status(201);
      // insert your assertions to check on body!
      console.log(res.body)
     done();
    })
  });
});