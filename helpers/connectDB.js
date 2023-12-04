const mongoose = require('mongoose')


const dotenv = require('dotenv')
dotenv.config()
const dbURL = process.env.DB_URL

const connectDB = ()=>{
    try {
        mongoose.connect(dbURL) 
        console.log("connected")
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectDB