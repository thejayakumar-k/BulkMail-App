const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI).then(function(){
    console.log("Connected to DB")
}).catch(function(error){console.log("DB Error:",error)})

const credential = mongoose.model("credential",{},"bulkmail")


app.post("/sendemail",function(req,res){

    var msg = req.body.msg
    var emailList = req.body.emailList

    credential.find().then(function(data){
        const transporter = nodemailer.createTransport({
  service:"gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },  
}) 

new Promise( async function(resolve,reject){

    try{
    
        for (var i=0; i<emailList.length;i++){
        
           await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to:emailList[i],
                subject:"A message from Bulk Mail App",
                text:msg
            }
                   
            )
            console.log("Email sent to:"+emailList[i]);
            
        }
        resolve("Success")
    }
    catch(error){
        reject("Failed")
    }

}).then(function(){
    res.send(true)
}).catch(function(){
    res.send(false)
})


}).catch(function(error){
    console.log(error)    
})

})

app.listen(5000,function(){
    console.log("Server Started")
})