const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BidSchema= new Schema({

    bidinfo:{
        type:String
    },
    PhotographerId:[
        {type: Schema.Types.ObjectId, ref: 'photographer'}

    ],
    JobId:[{
        type: Schema.Types.ObjectId, ref: 'jobs'}
     ],
    status:{
        type:Boolean
    }   
     



});
module.export = Bid= mongoose.model('bid',BidSchema); 