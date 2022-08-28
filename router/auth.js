const express = require("express");
const Auth = require("../model/Auth")

const router = express.Router()


/// MARK: API

// test api
router.get("/testApi",(req,res)=>{
    res.json("Test Api")
})


router.post("/authCreate",(req,res)=>{
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
})


module.exports = router