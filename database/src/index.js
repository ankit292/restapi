const express = require("express");
const app = express();
const memberRouter = require('../backend/routers/memberRouter')
const port = process.env.PORT || 8000;

// call db connection file
require("../backend/db/connection");

// convert object data recived by api to json format
app.use(express.json());
app.use(express.urlencoded({extended:false}))

// recieve studebt router 
app.use(memberRouter);


const jwt = require('jsonwebtoken');

// const authToken = async ()=>{
//   const token = await jwt.sign(
//     {_id:"65998b630199f5361ff99e84"},
//     "ankitkumarvermalodhirajpoot",
//     {expiresIn:'2 min'})
//     console.log(token);

//     const verifyToken = await jwt.verify(token,"ankitkumarvermalodhirajpoot");
//     console.log(verifyToken);
// }

// authToken()

  // create server
  app.listen(port, (req, res) => {
    console.log(`server connected port no. ${port}`);
  });


