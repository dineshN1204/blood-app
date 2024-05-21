const express = require('express')
require('dotenv').config()
const cors=require('cors')
const connectDb = require('./configs/db')
const users = require('./routes/user')
const app = express()
app.use(cors)

app.use('/users',users)
connectDb()
app.get('/',(req,res)=>{
    res.send('Home page')
})
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`)
})