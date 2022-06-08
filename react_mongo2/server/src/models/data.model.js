const mongoose = require("mongoose")

const dataSchema = new mongoose.Schema({
    firstname : {type : String},
    lastname: {type : String},
    address : {type : String},
    category : {type : String},
    brand: {type : String},
    products: {type : String}
 },{
    timestamps : true,
    versionKey : false,
})

module.exports=mongoose.model("data", dataSchema)