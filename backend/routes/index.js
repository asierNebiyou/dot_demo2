var express = require('express');
var router = express.Router();
const movies=require('../models/movies');
const users=require('../models/users');




router.get('/', function (req, res, next) {
  // fetch('https://www.omdbapi.com/?i=tt3896188&apikey=1b4003e0').then(
    
     
    
  // )
  
  let movie=movies.find({})
  console.log(movie)
  res.send(movie)
});



module.exports = router;
