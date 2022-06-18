const mongoose = require("mongoose")

const countrySchema = new mongoose.Schema({
    country : {type : String},
    city: {type : String},
    population : {type : String},
   
 },{
    timestamps : true,
    versionKey : false,
})

module.exports=mongoose.model("country", countrySchema)