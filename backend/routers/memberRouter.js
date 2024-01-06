const express = require('express');
const router = new express.Router();

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
        console.log(MemberData);
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
      if(!_id){
          return res.status(400).send()
      }
      res.send(deleteMember)
    } catch (error) {
      res.status(500).send(error)
    }
  });
  


module.exports = router