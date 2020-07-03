const express =require('express');
const app=express();
const morgan=require('morgan');
const { mongoose } = require('./database')
const jwt = require('jsonwebtoken')
const path =require('path');


const cors= require('cors');
//setting
app.set('port',process.env.PORT || 8080);


//middleawares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());



//routes

app.use(express.static(path.resolve(__dirname,'../public/')))


app.use(require('./routes/user.routes'));
//strating the server

app.listen(app.get('port'),()=>{
    console.log('server on port ', app.get('port'));
});