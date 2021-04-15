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
    let password = req.body.password;

    if(!email || !password){
      res.status(400).send("Enter all fields.");
  }

    var query = { email };
    // var projection = { 'name':1, 'email':1 };
  
    collection.findOne(query) 
      .then(result=> {
       if(result === null){
         res.status(400).json({msg:"EmailID not found."});
       }else{
       let auth = bcrypt.compareSync(password, result.password);
       if(auth === true){
        jwt.sign({
          name:result.name
        },
         config.get('jwtSecret'),
          { expiresIn: 60 * 60 },
          (err,token) => {
            if(err) throw err;
            res.status(200).json({
              token,
              msg:'Login Successful.'
            });
          });
       }else{
         res.status(400).json({msg:"Login Failed."})
       }
      }
       
        
      }); 
  });

  // PUT:Change password
  router.post('/:name', (req,res,next) => {
   
    if(req.body.password != req.body.confirmpassword){
      res.json({msg:"Password did not match."});
    }

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    password = hash;
    
    const params = req.params;

    var query = { name: params.name };
    var newvalues = { $set: { password } };

    collection.updateOne(query,newvalues, ((err, result) => {
      if(err) throw err;
      res.status(200).json({msg:'Password Updated'});
     
    })); 


});

})

module.exports = router;