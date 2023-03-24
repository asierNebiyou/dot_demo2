// const mongodb=require('../dbinstance/mongooseinst')
const mongodb = require('mongoose');

const users = mongodb.Schema({
            name: String,
            password:Number,                          
});



module.exports=mongodb.model('User', users);