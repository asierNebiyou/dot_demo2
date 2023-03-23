const mongodb=require('../dbinstance/mongooseinst')

const movies = mongodb.Schema({
    name:String ,
    rating:Number, 

})




module.exports=mongodb.model('Movie', movies);