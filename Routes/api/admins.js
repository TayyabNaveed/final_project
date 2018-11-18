const express = require('express');
const router = express.Router();


const AdminModel = require('../../Models/Admin');



router
    .post('/login', (req,res) => {
               // console.log(req.body.credentials);
                const {credentials} = req.body; 

                AdminModel.findOne({ username: credentials.username})
                        .then( admin => {
                               
                        if(admin && admin.password === credentials.password ){
                        res.status(200).json({ admin: admin.toAuthJSON()});
                        }
                        else{

                        res.status(400).json({ errors: { global :"Invalid Credentials"}});
                        }
                        });
        });

        
router.post('/',(req,res) => {
                const newAdmin = new AdminModel({
                
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                       
                });
                
                newAdmin.save().then(admin => res.json(admin));
                });
router.get( '/', (req,res) => {

                    AdminModel.find() 
                        .then(admin => res.json(admin))
                    });

module.exports = router;