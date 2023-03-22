var express = require('express');
var router = express.Router();
const mongo=require('../dbinstance/mongooseinst');
const movies=require('../models/movies');
const users=require('../models/users');


router.get('/', function(req, res, next) {
  let movie=movies.find()
  console.log(movie)
  res.send(movie)
});



module.exports = router;
