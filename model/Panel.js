const mongoose = require('mongoose')
const panelSchema = new mongoose.Schema({
    userId: {type:String,require:true},
    text : {type:String,require:true},
    date : {type:String,require:true},
    comment : {type:Array,require:true},
    areaId:{type:Number,require:true},
    
})

module.exports = mongoose.model("Panel",panelSchema)