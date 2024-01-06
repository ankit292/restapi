const express = require("express");
const app = express();
const memberRouter = require('../backend/routers/memberRouter')
const port = process.env.PORT || 10000;

// call db connection file
require("../backend/db/connection");

// convert object data recived by api to json format
app.use(express.json());

// recieve studebt router 
app.use(memberRouter);

  // create server
  app.listen(port, (req, res) => {
    console.log(`server connected port no. ${port}`);
  });


