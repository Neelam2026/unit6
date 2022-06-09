const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstname : {type : String, required : true},
    lastname: {type : String, required : true},
    email: { type: String, required: true },
    password: { type: String, required: true },
    address : [{
        line: { type: String, required: false },
        city: { type: String, required: false },
        state: { type: String, required: false },
        type: { type: String, required: false, default: "home" },
    }
       
    ]
 },{
    timestamps : true,
    versionKey : false,
})

module.exports=mongoose.model("user", userSchema)



