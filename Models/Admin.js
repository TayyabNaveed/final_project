const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');

const AdminSchema = new Schema({

    username : {
        type: String, 
        lowercase: true, 
        required: [true, "can't be blank"],  
        index: true
        },
    email: {
        type: String, 
        lowercase: true, 
        required: [true, "can't be blank"], 
        index: true},
    password:{
        type: String,
        required: true
    }
}); 


AdminSchema.methods.toAuthJSON= function toAuthJSON(){

    return{
        username: this.username,
        token: this.generateJWT()
    }

};

AdminSchema.methods.generateJWT= function generateJWT(){
    return jwt.sign({
        username: this.username,
    }, 'secretkey');
};




module.exports = Admin = mongoose.model('admin', AdminSchema);

