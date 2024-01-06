const mongoose = require('mongoose');
const validator = require('validator')

const memberScheema = new mongoose.Schema({
   name:{
    type: String,
    required:true,
    minLength:4
   },
   email:{
    type: String,
    required:true,
    minLength:4,
    unique: true,
    validate(value){
        if(!validator.isEmail(value)){
            throw Error('Email already exsist')
        }
    }
   },
   phone:{
    type:Number,
    required:true,
    min:10,
    unique:true
   },
   address:{
    type:String,
    required:true,
   },
   password:{
    type:String,
    required:true,
    minLength:5
   },
   cpassword:{
    type:String,
    required:true,
    minLength:5
   }
});

const Member = new mongoose.model("Member",memberScheema);
module.exports = Member;
