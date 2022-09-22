

const mongoose = require('mongoose');
//connect to mongodb
module.exports=()=>{
    mongoose.connect('mongodb://localhost:27017/JobAtlas_database');
    mongoose.connection.once('open',()=>{
        console.log('connection has been made');
    }).on('error',(error)=>console.log(error));
}