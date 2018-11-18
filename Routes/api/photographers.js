const express = require('express');
const router = express.Router();

//Photographer model

const Photographer = require ('../../Models/Photographer');

//@route GET api/photographer
//@/desc Get All photographer
//@access Public  

router.get( '/', (req,res) => {

Photographer.find() 
	.then(photographer => res.json(photographer))
});
//@route POST api/photographer
//@/desc create a photographer
//@access Public  

router.post('/',(req,res) => {
const newPhotographer = new Photographer({

    username: req.body.username,
    email: req.body.email,
	password: req.body.password,
	city: req.body.city,
	category:req.body.category 

});

newPhotographer.save().then(photographer => res.json(photographer));
});
// login a photograpaher

router
    .post('/login', (req,res) => {
                const {credentials} = req.body; 

                	Photographer.findOne({ username: credentials.username})
                        .then( photographer => {
                                
                        if(photographer && photographer.password === credentials.password ){
                        res.status(200).json({ photographer: photographer.toAuthJSON()});
                        }
                        else{

                        res.status(400).json({ errors: { global :"Invalid Credentials"}});
                        }
                        });
        });

//@route Delete api/photographer:id
//@/desc delete photographer
//@access Public  

router.delete('/:id',(req,res) => {

	Photographer.findById(req.params.id)
		.then(photographer =>  photographer.remove().then( () => res.json({sucess:true})).catch(err => res.status(404).json({success:false})))
		.catch(err => res.status(404).json({sucess:false}));
 
});



module.exports = router;