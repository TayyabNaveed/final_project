const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');

//create a schema

const PhotographerSchema = new Schema ({
    username : {
        type: String, 
        required: [true, "can't be blank"], 
        index: true
        },
    email: {
        type: String, 
        required: [true, "can't be blank"],  
        index: true},
        
    password:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required:true
    },
    category:{ 
        type: Object,
        required: true
    },
    bio:{
        type:String
    },
    image:{ 
        data: Buffer, 
        contentType: String 
    },
  
    rank:{
        type: Number
    }
    
},{timestamps:true});
PhotographerSchema.methods.toAuthJSON= function toAuthJSON(){

    return{
        username: this.username,
       
        token: this.generateJWT()
    }

};

PhotographerSchema.methods.generateJWT= function generateJWT(){
    return jwt.sign({
        username: this.username,
        confirmed: this.confirmed,
        city: this.city,
        category: this.category,
        bio: this.bio,
        email: this.email
    }, 'secretkey');
};


module.exports = Photographer = mongoose.model('photographer', PhotographerSchema);
 