const mongoose = require('mongoose')
const panelSchema = new mongoose.Schema({
    userId: {type:Number,require:true},
    text : {type:String,require:true},
    date : {type:String,require:true},
    comment : {type:Array,require:true},
    
})

module.exports = mongoose.model("Panel",panelSchema)