const dotenv = require('dotenv')
const express = require("express");
const app = express();
const memberRouter = require('../backend/routers/memberRouter');
dotenv.config({path:'../config.env'})

const port = process.env.PORT || 8000;

// call db connection file
require("../backend/db/connection");

// convert object data recived by api to json format
app.use(express.json());
app.use(express.urlencoded({extended:false}))

// recieve studebt router 
app.use(memberRouter);
app.get('/', (req, res) => {
  res.send(process.env.SECRET_KEY);
})

  // create server
  app.listen(port, (req, res) => {
    console.log(`server connected ${process.env.SECRET_KEY} port no. ${port}`);
  });


