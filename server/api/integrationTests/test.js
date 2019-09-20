const assert = require('assert');
const add = require('../../server.js');
const http = require('http');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const ObjectID = require('mongodb').ObjectID;

chai.use(chaiHttp);

describe('Server.js Integration Test', () => {
    before(() => {
        console.log('Before test');
    });
    
    after(() => {
        console.log('After test');
    });

    describe('get/api/getall', () => {
        it('should return all products', (done) => {
            chai.request(add)
            .get('/api/getall')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
            done();
        });
    });

        describe('POST /api/add', () => {
          it('it should create a new product', (done) => {
            chai.request(add).post('/api/add').type('form').send({
                'name': 'Jesse',
                'description': 'testing',
                'price': 300,
                'units': 1 
              })
              .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('name');
                done();
              });
              done();
          });
        });

        describe('POST /api/delete', () => {
          it('it should remove a product', (done) => {
            chai.request(add).post('/api/delete').type('form').send({
                '_id': ObjectID('5d8317a3e8841c1574bc98b6')
              })
              .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('_id');
                done();
              });
            done();
          });
        });

        describe('POST /api/update', () => {
          it('it should update a product', (done) => {
            chai.request(add).post('/api/update').type('form').send({
                '_id': ObjectID('5d831b2de045870660a15ff5'),
                'name': 'name',
                'description': 'description',
                'price': 400,
                units: 45
              })
              .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('result');
                done();
              });
            done();
          });
        });
});