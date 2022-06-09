const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({
    category_name : [{type : String, required : true}],
    product_id : {type : mongoose.Schema.Types.ObjectId, ref:"product", required : true}
},{
    timestamps : true,
    versionKey : false,
})

module.exports=mongoose.model("category",  CategorySchema)