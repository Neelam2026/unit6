const express = require("express");
const router=express.Router()
const Places=require("../models/places.model")

router.get("/",async(req,res)=>{
    try{
       
        const places= await Places.find().lean().exec() 
        res.status(200).send({places:places})
    }
    catch(e){
        res.status(400).send({error:e})   
    }
   
})

router.post("/",async(req,res)=>{
    try{
        const places=await Places.create(req.body)
        return res.status(201).send({places})
    }
    catch(e){
        res.status(400).send({error:e}) 
    }

})

router.get("/:id",async(req,res)=>{
    try{
        const places= await Places.findById(req.params.id).lean().exec();
        res.status(200).send({places:places})
    }
    catch(e){
        res.status(400).send({error:e})   
    }
   
})

//patch
router.patch("/:id",async(req,res)=>{
    try{
        const places=await Places.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        })
       return res.status(200).send(places) 
    }
    catch(e){
        res.status(400).send({error:e})   
    }
    
})

//delete
router.delete("/:id",async(req,res)=>{
    try{
        const places= await Places.findByIdAndDelete(req.params.id)
        res.status(200).send(places)
    }
    catch(e){
        res.status(400).send({error:e})   
    }
    
})

module.exports =  router