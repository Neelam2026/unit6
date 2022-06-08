const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    user_id : {type : mongoose.Schema.Types.ObjectId, ref:"user", required : true}
},{
    timestamps : true,
    versionKey : false,
})

module.exports=mongoose.model("order", orderSchema)