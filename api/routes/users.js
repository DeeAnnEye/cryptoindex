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

    // GET: all users
    router.get('/', function(req, res, next) {        
        collection.find().toArray(function (err, result) {
        if(err) throw err;
        res.send(result);
        });       
    })

    // POST:Create a new user
router.post('/', function(req, res, next) { 

   let email = req.body.email;
   let password = req.body.password;
   let userName = req.body.name;

   if(!email || !password || !userName){
       res.status(400).send("Enter all fields.");
   }

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    password = hash;

        
      collection.insertOne({ email,password,userName }, ((err, result) => {
        if(err) throw err;
        jwt.sign({
          name: userName
        },
         config.get('jwtSecret'),
          { expiresIn: 60 * 60 },
          (err,token) => {
            if(err) throw err;
            res.status(200).json({
              token,
              msg:'User Created'
            });
          });
         
      }));   
  });

// PUT:Update a user
router.put('/:name', function(req, res, next) {  
    const params = req.params;
    
      var query = { name: params.name };
      var newvalues = { $set: { ...req.body } };
  
      collection.updateOne(query,newvalues, ((err, result) => {
        if(err) throw err;
        res.json({msg:'User Updated'});
        client.close();  
      })); 
  });

  // DELETE:Delete a user
router.delete('/:name', function(req, res, next) {  
    const params = req.params;
    var query = { name: params.name };
      
      collection.deleteOne(query,((err, result) => {
        if(err) throw err;
        res.json({msg:'User Deleted'});
        client.close();
  
      }));
    
  });
  
 
})

module.exports = router;