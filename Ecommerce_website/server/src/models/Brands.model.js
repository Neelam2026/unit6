const mongoose = require("mongoose")

const BrandSchema = new mongoose.Schema({
    Brand_Name:{type:String,required:true},
},
{
    timestamps : true,
    versionKey : false,
})

module.exports=mongoose.model("brand", BrandSchema)