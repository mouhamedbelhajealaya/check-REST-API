const express = require('express')
const connectDB = require('./helpers/connectDB')
const userRouter = require('./routers/userRouter')
const app = express()
app.use(express.json())

const dotenv = require('dotenv')
dotenv.config()
connectDB()
const port = process.env.PORT
app.use('/user',userRouter)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))