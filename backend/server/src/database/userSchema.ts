import mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type:String, required:true},
    photoLink:{type:String, required:true},
    whatsappNumber:{type:Number, required:true},
    biografy:{type:String, required:true},
    class:{type:String,required:true}, 
    cost:{type:Number,required:true}, 
    availableTimes:[{
        week_day:String,
        from:String,
        to:String
    }]
});


export default mongoose.model("User",userSchema);

