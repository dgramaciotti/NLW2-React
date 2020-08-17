import mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type:String},
    photoLink:{type:String},
    whatsappNumber:{type:Number},
    biografy:{type:String},
    class:{type:String}, 
    cost:{type:Number}, 
    availableTimes:[{
        week_day:String,
        from:String,
        to:String
    }],
    _id:{type:mongoose.Schema.Types.ObjectId, ref:"UserCredential",required:true},
});


export default mongoose.model("User",userSchema);

