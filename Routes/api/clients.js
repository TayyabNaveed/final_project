const express = require('express');
const router = express.Router();
const parse= require('../../utils/parseErrors');
const _ = require('lodash');
const sendConfirmationEmail = require ('../../utils/mailer');
//Client model
const ClientModel = require ('../../Models/Client');

//@route GET api/client
//@/desc Get All client
//@access Public  

router.get( '/', (req,res) => {

ClientModel.find() 
	.then(client => res.json(client))
});
//@route POST api/client
//@/desc signup a client
//@access Public  

router.post('/',(req,res) => {
	const newClient = new ClientModel({

    username: req.body.cred.username,
    email: req.body.cred.email,
    password: req.body.cred.password

});
newClient.setConfirmationToken();
newClient.save().then(client =>
	{ 	sendConfirmationEmail.sendConfirmationEmail(client);
		//console.log(client.confirmationToken);
		res.json({client: client.toAuthJSON()})})
	.catch(err => res.status(400).json({errors : parse.parseErrors(err.errors) }));
});



//@route Delete api/client:id
//@/desc delete client
//@access Public  

router.delete('/:id',(req,res) => {

	ClientModel.findById(req.params.id)
		.then(client =>  client.remove().then( () => res.json({sucess:true})).catch(err => res.status(404).json({success:false})))
		.catch(err => res.json({sucess:false}));
 
});



module.exports = router;