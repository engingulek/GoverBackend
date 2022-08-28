const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require("body-parser");
const cors = require("cors")

app.use(bodyParser.json());
app.use(cors()); 

const authRouter  = require("./router/auth")

mongoose.connect("mongodb+srv://adminName:password@cluster0.8ri27fr.mongodb.net/glkGoverDatabase?retryWrites=true&w=majority")

mongoose.connection.once("open",()=>{
    console.log("Connect to DB!")

}).on("error",(error)=>{
    console.log("Failed to connect" + error)
})

app.use("/",authRouter)


app.listen(3000,()=> { // server fonksiyonu dinlenmeye başladığında bu callback fonksiyonu çalıştırlacak
    console.log("Server is running on port 8080")
    })
