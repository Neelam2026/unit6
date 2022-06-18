
const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: Number, required:false },
  quantity: { type: Number, required:false},
  image_url: { type: String, required: false },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required:false,
  },
  categoryId: [
    { type: mongoose.Schema.Types.ObjectId, ref: "category", required: false },
  ],
  brandId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "brand",
    required:false,
  },
  reviewsId: [
    { ref: "reviews", type: mongoose.Schema.Types.ObjectId, required: false },
  ],
},
{
        timestamps : true,
        versionKey : false,
    })
    
    
module.exports=mongoose.model("product", ProductSchema)
