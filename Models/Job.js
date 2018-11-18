const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const JobSchema = new Schema({
    title:{
        type:String    
    },
    description:{
        type:String
    },
    category:{
        type:String,
    },
    budget:{
        type:String 
    },
    status:{
        type:String,
        enum:['Open','pending','Closed']
    },
    deadline:{
        type:Date    
    },
    expiry:{
        type:Date
    } 
 //Yet to add User foreign key
});

module.exports = Job = mongoose.model('job', JobSchema);