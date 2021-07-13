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
  router.post('/', async (req, res, next) => {

    const { email, password } = req.body;

    // console.log(email,password);

    if (!email || !password) {
      return res.status(400).json({ msg: "Login Failed." });
    }

    var query = { email };
    const result = await collection.findOne(query);

    if (result) {
      let auth = bcrypt.compareSync(password, result.password);
      if (auth === true) {
        jwt.sign({
          name: result.name
        },
          config.get('jwtSecret'),
          { expiresIn: 60 * 60 },
          (err, token) => {
            if (err) {
              return res.status(400).json({ msg: "Login Failed.", err })
            }
            return res.status(200).json({
              name:result.name,
              role:result.role,
              token,
              msg: 'Login Successful.'
            });
          });
      } else {
        return res.status(400).json({ msg: "Login Failed." })
      }
    } else {
      return res.status(400).json({ msg: "Login Failed." });
    }
  });

  // PUT:Change password
  router.put('/:name', (req, res, next) => {

    if (req.body.password != req.body.confirmpassword) {
      res.json({ msg: "Password did not match." });
    }

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    password = hash;

    const params = req.params;

    var query = { name: params.name };
    var update = { $set: { password } };
    var options = { returnNewDocument: true };

    collection.findOneAndUpdate(query, update, options)
      .then(result => {

        if (!result) {
          res.status(400).json({ msg: 'Could not update password' });
        } else {
          res.status(200).json({ msg: 'Password Updated' });
        }

      });


  });

})

module.exports = router;