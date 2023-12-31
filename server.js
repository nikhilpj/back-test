const express = require('express')

const app = express()

const connectDB = require('./config/connection')

const userRouter = require('./Routes/user')

const cors = require('cors')



const allowedOrigins = ['https://nikhil-71qs.onrender.com']

app.use(cors({
    origin:function (origin,callback)
     {
        
         if(allowedOrigins.indexOf(origin) !== -1)
         {
             callback(null,true)
         }
         else
         {
             callback(new Error('Not allowed by  cors'))
         }
     },
     
     methods: ['GET', 'POST', 'PUT','HEAD','OPTIONS'],
     
    
  })) 

  

  app.use(express.json({limit:'10mb'}))

connectDB

app.use('/',userRouter)

app.listen(5000,()=>{
    console.log("server is running on port 5000")
})