const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    category_id : [{type : mongoose.Schema.Types.ObjectId, ref:"category", required : true}]
},{
    timestamps : true,
    versionKey : false,
})

module.exports=mongoose.model("product", ProductSchema)