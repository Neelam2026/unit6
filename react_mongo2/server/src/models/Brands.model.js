const mongoose = require("mongoose")

const BrandSchema = new mongoose.Schema({
   product_id : [{type : mongoose.Schema.Types.ObjectId, ref:"product", required : true}]
},{
    timestamps : true,
    versionKey : false,
})

module.exports=mongoose.model("brand", BrandSchema)