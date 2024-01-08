const mongoose = require('mongoose')


mongoose.connect(process.env.DB_HOST).then(()=>{
    console.log('databas connected');
}).catch((e)=>{
    console.log(`DB not connect ${e}`);
})

