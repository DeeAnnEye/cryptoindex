var express = require('express');
var router = express.Router();

 // GET: all users
 router.get('/', function(req, res, next) {        
  res.json({msg : 'hello'});  
})



module.exports = router;