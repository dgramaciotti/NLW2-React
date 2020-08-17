import mongoose = require('mongoose');

const userCredentialsSchema = new mongoose.Schema({
    passHash:{type:String, required:true},
    email:{type:String, required:true},
    _id:{type:mongoose.Schema.Types.ObjectId, ref:"User",required:true},
})


export default mongoose.model("UserCredential",userCredentialsSchema);

