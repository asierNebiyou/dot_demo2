const mongodb=require('../dbinstance/mongooseinst')

const movies = mongodb.model('Movie', { name: 'String' ,
rating:'Number', 

                                       
});

module.exports=movies