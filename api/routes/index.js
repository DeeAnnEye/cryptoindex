var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const config = require('config');
const jwt = require('jsonwebtoken')

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
      collection.insertOne({ ...req.body }, ((err, result) => {
        if(err) throw err;
        jwt.sign({
          name: req.body.name
        },
         config.get('jwtSecret'),
          { expiresIn: 60 * 60 },
          (err,token) => {
            if(err) throw err;
            res.json({
              token,
              msg:'User Created'
            });
          });
         
       
        client.close();
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