const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const uniqueValidator = require('mongoose-unique-validator');
//create a schema

const ClientSchema = new Schema ({
    username : {
        type: String, 
      
        required: [true, "can't be blank"], 
        index: true
        },
    email: {
        type: String, 
        lowercase: true, 
        required: [true, "can't be blank"], 
        index: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    city:{
        type:String,
   },
    bio:{
        type:String
    },
    image:{
        type:String
    },
    confirmed:{
        type:Boolean,
        default:false

    },
    confirmationToken:{
        type:String,
        default: ""
    }
    
},{timestamps:true});

ClientSchema.methods.isValidPassword = function isValidPassword(password){
   console.log(password, this.password);
    return bcrypt.compareSync(password, this.password);
};
ClientSchema.methods.generateJWT= function generateJWT(){
    return jwt.sign({
        username: this.username,
        confirmed: this.confirmed,
        city: this.city,
        bio: this.bio,
        email:this.email
    }, 'secretkey');
};
ClientSchema.methods.setConfirmationToken = function setConfirmationToken(){
    this.confirmationToken = this.generateJWT(); 
};
ClientSchema.methods.generateConfirmationUrl= function generateConfirmationUrl(){
    return "http://localhost:3000/confirmation/"+this.confirmationToken    
};

ClientSchema.methods.generateResetPasswordLink = function generateResetPasswordLink(){

    return "http://localhost:3000/reset_password/"+ this.generateResetPasswordToken();

}

ClientSchema.methods.generateResetPasswordToken= function generateResetPasswordToken(){
    return jwt.sign({
        _id: this._id
    }, 'secretkey',{expiresIn: "1h" } );
};

ClientSchema.methods.toAuthJSON= function toAuthJSON(){

    return{
        username: this.username,
        confirmed: this.confirmed,
        email: this.email,
        bio: this.bio,
        city:this.city,
        token: this.generateJWT()
    }

};

ClientSchema.plugin(uniqueValidator, {message: "This email is already taken"});





module.exports = Client = mongoose.model('client', ClientSchema);
 