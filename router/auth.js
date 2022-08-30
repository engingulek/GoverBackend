
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
    res.json("1")
    
}
// create auth api
router.post("/authCreate",(req,res)=>{
    Auth.find()
    .then(auths=>{
        if(auths.length == 0) {
            addAuthDatabase(req,res)
        }else{

            if (auths.length == 0) {
                // database null
                addAuthDatabase(req,res)
            
            }else{
               var check = auths.filter(auth => auth.email == req.body.email && auth.phoneNumber == req.body.phoneNumber)
               if(check.length == 0 ) {
                addAuthDatabase(req,res)
               }else{
                res.json("0")
               }

                 
           
                }



           
            
        }
    })
})

// sing in auth api
router.post("/singIn",(req,res)=>{
   
    
  Auth.find()
  .then(auths=>{

    // control email and password
    var check = auths.filter(auth => auth.email == req.body.email && auth.password == req.body.password)
    if (check.length == 1) {
        res.json("0")
    }else{
        res.json("1")
    }
    
    
  })
})





module.exports = router