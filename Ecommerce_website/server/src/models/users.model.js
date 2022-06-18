const mongoose = require("mongoose")
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    firstname : {type : String, required : true},
    lastname: {type : String, required :false},
    email: { type: String, required: true,unique:true},
    password: { type: String, required: true },
    address : {type: String, required: false },
      
 },{
    timestamps : true,
    versionKey : false,
})

userSchema.pre('save', function (next) {
    const hash = bcrypt.hashSync(this.password,8);
    this.password=hash
    next();
  });

userSchema.methods.checkPassword=function(currentpassword){
 return bcrypt.compareSync(currentpassword, this.password);   
}

module.exports=mongoose.model("user", userSchema)



