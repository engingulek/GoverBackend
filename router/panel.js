const express = require("express");
const Panel  = require("../model/Panel")
const Auth  = require("../model/Auth")
const router = express.Router()


/// MARK: API


router.get("/allPanel",(req,res)=>{

    var comment = []
    
    Panel.find()
    .then(panels=>{
        panels.forEach((panel)=>{
            Auth.find()
            .then(auths=>{
                var panelAuths = auths.filter(auth=> auth._id == panel.userId)
                panelAuths.forEach((panelAuth)=>{
                    panel.comment.forEach((panelComment) => {
                        var panelCommentAuth = auths.filter(auth=> auth._id == panelComment.userId)
                        panelCommentAuth.forEach((a)=>{
                            var commentData = {
                                "name" : a.name,
                                "surname" : a.surname,
                                "textComment" : panelComment.textComment
                            }
                            comment.push(commentData)
                        })
                    })
                    var panels = []
                    var data = {
                        //"_id" : panel._id,
                        "name" : panelAuth.name,
                        "surname" : panelAuth.surname,
                        "text" : panel.text,
                        "date" : panel.date,
                        "comment" : comment,
                        
                        
                    }
                    
                    panels.push(data)
                    res.json({
                        "panels":panels,
                        "success":1
                    })
                })
              
            })
        })
    
    
        
       /* panels.forEach((panel)=>{
            panel.comment.forEach((element)=>{
                Auth.find()
                .then(auths=>{
                    
                 var commentAuth = auths.filter(auth=> auth._id == element.userId)
               commentAuth.forEach((a)=>{
                var data = {
                    "_id":panel._id,
                    "name":a.name,
                    "surname":a.surname,
                    "text":panel.text,
                    "date":panel.date
                }

               })
               
               
                
                })
            })
            
        })
        
      // res.json(comment)*/

    })
})


router.post("/createPanel",(req,res)=>{
    const panel = new Panel({
        userId:req.body.userId,
        text:req.body.text,
        date: req.body.date,
        comment: req.body.comment,
        areaId:req.body.areaId
    })
    panel.save()
    res.json("1")
})
module.exports = router