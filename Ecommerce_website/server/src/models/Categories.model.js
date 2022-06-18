const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({
    category_name : [{type : String, required : true}],
},{
    timestamps : true,
    versionKey : false,
})

module.exports=mongoose.model("category",  CategorySchema)