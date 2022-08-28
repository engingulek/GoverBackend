const { isRejectedWithValue } = require("@reduxjs/toolkit");
const express = require("express");
const Auth = require("../model/Auth")

const router = express.Router()


/// MARK: API

// test api
router.get("/testApi",(req,res)=>{
    res.json("Test Api")
})
function addAuthDatabase(req,res){
    const auth = new Auth({
        name: req.body.name,
        surname : req.body.surname,
        phoneNumber : req.body.phoneNumber,
        email: req.body.email,
        password: req.body.password

    })
    auth.save()
    res.json({
        success: 1,
        message: "success"
    })
    
}
// create auth api
router.post("/authCreate",(req,res)=>{
    Auth.find()
    .then(auths=>{
        if(auths.length == 0) {
            addAuthDatabase(req,res)
        }else{
            var singAuths = auths.filter(x => x.email == req.body.email ||  x.phoneNumber == req.body.phoneNumber)
            if (singAuths.length == 0){
                addAuthDatabase(req,res)
            }else{
                res.json("Aynı email veya eposta adresi bulunmaktadır")
            }
        }
    })
})

// sing in auth api
router.post("/singIn",(req,res)=>{
  Auth.find()
  .then(auth=>{
    // control email and password
    var singAuth = auth.filter(x => x.email == req.body.email && x.password == req.body.password)
    if(singAuth.length == 1){
        res.json("Sing In Success")
    }else
    {
        res.json("Email or password incorrect")
    }
  })
})





module.exports = router