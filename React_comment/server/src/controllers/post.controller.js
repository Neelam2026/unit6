const express = require("express");
const router=express.Router()
const Data=require("../models/post")

router.get("/",async(req,res)=>{
    try{
        const data= await Data.find().lean().exec();
        res.status(200).send({data:data})
    }
    catch(e){
        res.status(400).send({error:e})   
    }
   
})

router.post("/",async(req,res)=>{
    try{
        const data=await Data.create(req.body)
        return res.status(201).send({data})
    }
    catch(e){
        res.status(400).send({error:e}) 
    }

})

router.get("/:id",async(req,res)=>{
    try{
        const data= await Data.findById(req.params.id).lean().exec();
        res.status(200).send({data:data})
    }
    catch(e){
        res.status(400).send({error:e})   
    }
   
})

//patch
router.patch("/:id",async(req,res)=>{
    try{
        const data=await Data.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        })
       return res.status(200).send(data) 
    }
    catch(e){
        res.status(400).send({error:e})   
    }
    
})

//delete
router.delete("/:id",async(req,res)=>{
    try{
        const data= await Data.findByIdAndDelete(req.params.id)
        res.status(200).send(data)
    }
    catch(e){
        res.status(400).send({error:e})   
    }
    
})

module.exports =  router