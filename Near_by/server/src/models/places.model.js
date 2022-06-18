const mongoose = require("mongoose")

const placeSchema = new mongoose.Schema({
    location: {type: Object, required: true,coordinates:[]},
    name: {type: String, required: true},
    category: {type: String}
 },{
    timestamps : true,
    versionKey : false,
})

module.exports=mongoose.model("place", placeSchema)