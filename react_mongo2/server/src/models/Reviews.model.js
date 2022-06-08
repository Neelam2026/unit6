const mongoose = require("mongoose")

const ReviewSchema = new mongoose.Schema({
    product_id : {type : mongoose.Schema.Types.ObjectId, ref:"product", required : true},
    user_id : {type : mongoose.Schema.Types.ObjectId, ref:"user", required : true}
},{
    timestamps : true,
    versionKey : false,
})

module.exports=mongoose.model("review", ReviewSchema)