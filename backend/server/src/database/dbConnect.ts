import mongoose = require('mongoose');
const URI:string = 'mongodb://localhost:27017';

export default () => {mongoose.connect(URI,{useNewUrlParser:true, useUnifiedTopology:true},(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('connected to Mongo');
    }
})}