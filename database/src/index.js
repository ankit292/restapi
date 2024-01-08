const dotenv = require('dotenv')
const express = require("express");
const app = express();
const memberRouter = require('../backend/routers/memberRouter');
const cookieParser = require('cookie-parser')
dotenv.config({path:'../config.env'})
// console.log(process.env.SECRET_KEY);
const port = process.env.PORT || 8000;

// call db connection file
require("../backend/db/connection");

app.use(cookieParser());
// convert object data recived by api to json format
app.use(express.json());
app.use(express.urlencoded({extended:false}))

// recieve studebt router 
app.use(memberRouter);

  // create server
  app.listen(port, (req, res) => {
    console.log(`server connected ${process.env.SECRET_KEY} port no. ${port}`);
  });


