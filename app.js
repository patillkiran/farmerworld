const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");


const dotenv = require('dotenv');
const app = express();
dotenv.config({path: './config.env'});
const farmerRoute = require('./routes/farmerRoute');

app.use(express.json())

const db = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(db, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(con => {
    console.log('DB connection successful')
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

var options = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }
  app.use(cors(options));


app.use('/api', farmerRoute);


const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`app is running on ${port}`);
})

