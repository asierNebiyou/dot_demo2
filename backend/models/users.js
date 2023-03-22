const mongodb=require('../dbinstance/mongooseinst')

const users = mongodb.model('User', { name: 'String' ,
password:'Number',                          
});

module.exports=users