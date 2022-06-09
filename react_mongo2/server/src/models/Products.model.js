const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    Product_Name:{type:String,required:true},
    Product_Img:{type:String,required:true},
    Price:{type:Number,required:true},
    Quentity:{type:Number,required:true},
    category_id : [{type : mongoose.Schema.Types.ObjectId, ref:"category", required : true}]
},{
    timestamps : true,
    versionKey : false,
})

module.exports=mongoose.model("product", ProductSchema)