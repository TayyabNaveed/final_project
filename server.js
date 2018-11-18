const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-Parser');
const clients = require ('./Routes/api/clients');
const loginAuth = require('./Routes/api/loginAuth');
const photographers = require ('./Routes/api/photographers');
const admins = require ('./Routes/api/admins');
const path = require('path');

const app= express();
//bodyparser middleware

app.use(bodyParser.json());


mongoose
.connect ('mongodb://localhost:27017/picturesque', {useNewUrlParser:true})
.then(() => console.log('Connection Successful'))
.catch(err => console.log('err'));

app.use('/api/clients',clients);
app.use('/api/photographers', photographers);
app.use('/api/loginAuth',loginAuth);
app.use('/api/admins', admins );

//serve static assets if in production

/*if(process.env.NODE_ENV === 'production'){

    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
    });

}*/


const port = process.env.PORT || 5500;
app.listen (port, () => console.log (`Server started on port ${port}`));