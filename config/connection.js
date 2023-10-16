const mongoose = require('mongoose')
require("dotenv").config();

    const connectDB = mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("database connected")
    }).catch((e)=>{
        console.log("error while connecting to database",e)
    })
    


module.exports = connectDB
