const mongodb = require('mongoose');

const movies = mongodb.Schema({
    Title: String,
    description: String,
    genre:String,
    director:[String],
    released_at: Date,
    // actors:mongodb.SchemaTypes.ObjectID
})




module.exports=mongodb.model('Movie', movies);