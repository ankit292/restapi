const express = require("express");
const router = new express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

// call Member scheema
const Member = require("../model/members");

// get(read) Members data
router.get("/member", async (req, res) => {
  try {
    const MembersData = await Member.find();
    res.send(MembersData);
  } catch (error) {
    res.status(401).send(error);
  }
});

// create Member then and catch
// router.post("/Member", async (req, res) => {
//   const user = await new Member(req.body);
//   console.log(user);
//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user);
//     })
//     .catch((e) => {
//       res.status(400).send(`Studant not find ${e}`);
//     });
// });

// create Member async await

router.post("/member", async (req, res) => {
  try {
    const member = new Member(req.body);
    const craeteMember = await member.save();
    res.status(200).send(craeteMember);
  } catch (error) {
    res.status(401).send("Not found " + error);
  }
});

//get Member data
router.get("/member/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const MemberData = await Member.findById(_id);
    if (!MemberData) {
      res.status(404).send();
    } else {
      res.send(MemberData);
    }
  } catch (error) {
    res.status(400).send();
  }
});

// update Members data

router.patch("/member/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateMember = await Member.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    console.log(updateMember);
    res.send(updateMember);
  } catch (error) {
    res.status(400).send(error);
  }
});

// delete Member data

router.delete("/member/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteMember = await Member.findByIdAndDelete(_id);
    if (!_id) {
      return res.status(400).send();
    }
    res.send(deleteMember);
  } catch (error) {
    res.status(500).send(error);
  }
});

// register user add database

router.post("/register", async (req, res) => {
  try {
    const { password, cpassword } = req.body;
    if (password === cpassword) {
      const member = new Member(req.body);

      // genrate auth token
      const token = await member.generatToken();

      // save token in cookie
      res.cookie("authToken", token,{
        expires: new Date(Date.now() + 30000),
        httpOnly:true
      });
      
      // save schema 
      const craeteMember = await member.save();
      res.status(200).send(craeteMember);
    }else{
      res.send("Password invalid")
    }
  } catch (error) {
    res.status(401).send("Not found " + error);
  }
});

// login user
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const findEmail = await Member.findOne({ email });
    const comparePass = await bcrypt.compare(password, findEmail.password);
    if ( comparePass === true) {
      // genrate auth token after login
      // const token =  jwt.sign({_id: findEmail._id},'ankitkumarvermalodhirajpoot',{expiresIn:'2 min'});
      // findEmail.tokens =  findEmail.tokens.concat({token})
      const token = await findEmail.generatToken();

      // save token in cookie
      res.cookie("authToken", token,{
        expires: new Date(Date.now() + 30000),
        httpOnly:true
      });

      res.send("Login Successfully");
      console.log("Login Successfully ");
    } else {
      res.send("!Invalids login Credentials!");
    }
  } catch (error) {
    res.status(401).send("Invalid login Credentials");
  }
});


module.exports = router;
