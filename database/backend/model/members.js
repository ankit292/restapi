const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

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
   },
   tokens:[{
    token:{
        type:String,
        required:true
    }
   }]
});


// generate auth token
memberScheema.methods.generatToken = async function() {
    try {
        const token = jwt.sign({_id:this._id.toString()}, process.env.SECRET_KEY,{expiresIn:'2 min'});
        this.tokens = this.tokens.concat({token});
        await this.save();
        return token;
    } catch (error) {
        res.send('auth token not genrate');
    }
    
}

// hashing password
memberScheema.pre('save', async function(next){
    if(this.isModified('password')){
        // const hashPass = await bcrypt.hash(this.password, 10);
        this.password = await bcrypt.hash(this.password, 10);
        this.cpassword = await bcrypt.hash(this.password, 10);
    }
       
    next()
})

const Member = new mongoose.model("Member",memberScheema);
module.exports = Member;
