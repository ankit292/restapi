const mongoose = require('mongoose')


mongoose.connect('mongodb://0.0.0.0:27017/members').then(()=>{
    console.log('databas connected');
}).catch((e)=>{
    console.log(`DB not connect ${e}`);
})

