const express = require("express")
const errorHandler = require("./middleware/errorhandle")
const app = express()
const dotenv = require("dotenv").config()
const connectDB = require("./config/dbConnection")

connectDB()
const port = process.env.PORT

app.listen(port, ()=>{
    console.log(`server running on port : ${port}`)
})

app.use(express.json());
app.use(errorHandler)

app.get('/', (req,res) =>{
    res.send("uwu")
})

app.use("/getcontact", require("./routes/contact"))