const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const auth = require('./router/authroute')

app.use(cors())
app.use(express.json())
app.use('/api',auth)


app.listen(5000, ()=>{
    console.log(`server is running `)
})