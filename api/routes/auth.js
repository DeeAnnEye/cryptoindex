var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = config.get('mongoURI');

const client = new MongoClient(db, { useNewUrlParser: true, useUnifiedTopology: true });
