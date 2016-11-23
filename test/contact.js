process.env.NODE_ENV = 'test';


var Contact = require('../models/contact');
var models = require('../models/');

//Require the dev-dependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

//chai.use(chaiHttp);
//Our parent block
describe('Contacts', () => {
var json = {
			id : "10",
            name: "The Lord of the Rings",
            email: "J.R.R. Tolkien",
            phone: "fdk"
			
} ;  // beforeEach((done) => { //Before each test we empty the database
      //  Contact.delete({}, (err) => { 
         //  done();         
        //});     
   // });

describe('/GET contacts', () => {
      it('it should GET all the contacts', (done) => {
        chai.request(server)
            .get('/contacts')
            .end((err, res) => {
                res.should.have.status(200);
                //res.body.should.be.a('array');
                //res.body.length.should.be.eql(0);
              done();
            });
      });
  });
     describe('/POST contacts', () => {
      it('it should  POST a contact', (done) => {
            chai.request(server)
            .post('/contacts')
            .send(json)
            .end((err, res) => {
                res.should.have.status(200);
                //res.body.should.be.a('object');
                //res.body.should.have.property('errors');
                //res.body.errors.should.have.property('pages');
                //res.body.errors.pages.should.have.property('kind').eql('required');
              done();
            });
      
	  });

  });
  describe('/PUT/:id book', () => {
      it('it should UPDATE a book given the id', (done) => {
                 chai.request(server)
                .put('/contacts/' + json.id)
                .send({name: "The Chronicles of Narnia", email: "C.S. Lewis", phone:"fg" })
                .end((err, res) => {
                    res.should.have.status(200);
                   // res.body.should.be.a('object');
                   // res.body.should.have.property('message').eql('Book updated!');
                    //res.body.book.should.have.property('year').eql(1950);
                  done();
                });
          });
      });
describe('/DELETE/:id contact', function()  {
      it('it should DELETE a book given the id', function(done)  {
               	chai.request(server)
                .delete('/contacts/' + json.id)
				.end((err, res) => {
                 res.should.have.status(200);
                 done();
                });
          });
      });
 
  });
 