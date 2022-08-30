const express = require("express");
const Panel  = require("../model/Panel")
const router = express.Router()


/// MARK: API

router.get("/allPanel",(req,res)=>{
    Panel.find()
    .then(panels=>{
        res.json(panels)

    })
})


router.post("/createPanel",(req,res)=>{
    const panel = new Panel({
        userId:req.body.userId,
        text:req.body.text,
        date: req.body.date,
        comment: req.body.comment
    })
    panel.save()
    res.json("1")
})
module.exports = router