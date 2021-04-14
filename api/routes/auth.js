var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = config.get('mongoURI');

const client = new MongoClient(db, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
 
    const db = client.db();
    const collection = db.collection('users');

    // POST:Authenticate a user
router.post('/', function(req, res, next) {  

    let email = req.body.email;

    var query = { email };
    var projection = { 'name':1, 'email':1 };
  
    collection.findOne(query,projection) 
      .then(result=> {
        res.json({name:result.name,
                  email:result.email});
        
      }); 
  });

})

module.exports = router;