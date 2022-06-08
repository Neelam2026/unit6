const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstname : {type : String, required : true},
    lastname: {type : String, required : true},
    address : [{type : String, required : true}]
 },{
    timestamps : true,
    versionKey : false,
})

module.exports=mongoose.model("user", userSchema)



