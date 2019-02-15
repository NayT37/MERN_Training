/* To use this server */

//Call Express
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const API_URL = '/api/task/';
const { mongoose } = require('./database');
// This is my server 
const app = express();

/* Configuration Stuff */

//Settings
app.set('port', process.env.PORT || 3000); //For cloud services, am I gonna use it? I think not

//Middelwares (actions before the routes)
app.use(morgan('dev')); //So i can see operation results in console
app.use(express.json()); //Validate if Json

//Routes
app.use(API_URL, require('./routes/task.routes'));

//Static Files (HTMLS CSS js)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});