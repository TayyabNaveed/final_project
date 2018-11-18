const express = require('express');
const router = express.Router();
const clientModel = require ('../../Models/Client');
const sendResetPasswordEmail = require('../../utils/mailer');
const jwt = require('jsonwebtoken');
router
    .post('/', (req,res) => {
               // console.log(req.body.credentials);
                const {credentials} = req.body; 

                clientModel.findOne({ username: credentials.username})
                        .then( client => {
                        console.log(client);        
                        if(client && client.password === credentials.password ){
                        res.status(200).json({ client: client.toAuthJSON()});
                        }
                        else{

                        res.status(400).json({ errors: { global :"Invalid Credentials"}});
                        }
                        });
        });
router.post('/confirmation', (req,res) => {

        const token = req.body.token;
        clientModel.findOneAndUpdate(
                {confirmationToken: token},
                {confirmationToken:"",confirmed: true},
                {new:true}               
                ).then(client => client ? res.json({client: client.toAuthJSON()}) :
                res.status(400).json({})       
                );

}
);        
router.post ('/reset_password', (req,res) => {
        clientModel.findOne({ email : req.body.email}).then(client => { 
                
                if(client){
                        sendResetPasswordEmail.sendResetPasswordEmail(client);
                        
                        res.json({});

                        
                }else{
                        
                        res.status(400).json ({errors:{ global:"There is no such user with this email" }});
                }
        } )

});
router.post('/validate_token', (req,res) => {
              
        jwt.verify(req.body.token, 'secretkey', err => {

                if (err) {
                        res.status(401).json({});
                } 
                else {
                        res.json({});
                }

        });

}); 
router.post ('/resetpass' ,(req,res) => {
        const {password, token} = req.body.data;
        jwt.verify(token, 'secretkey', (err,decoded)=> {
        
                if(err){
                        res.status(401).json({errors: {global: "Expired Token" }});
                }else {
                        clientModel.findOneAndUpdate(   {_id : decoded._id},
                                                        { password: password },
                                                        {new:true})
                                                        .then((client) => client ?  res.json({}) : res.status(404)
                                                        .json({errors:{global: "Invalid Token"}}));

                }


        });




} );

module.exports = router;