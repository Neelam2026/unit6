const express = require("express");
const router=express.Router()
const Data=require("../models/Products.model")
const authenticate=require("../middlewares/authenticate")
router.get("/",async(req,res)=>{
    try{
        let page=req.query.page||1
        let pagesize=req.query.pagesize||12
        let skip=(page-1)*pagesize
        let sort=req.query.sort
        let sortvalue=req.query.sortvalue
        let filter=req.query.filter
        let filtervalue=req.query.filtervalue
        const data= await Data.find({[filter]:filtervalue}).skip(skip).limit(pagesize).sort({[sort]:sortvalue}).lean().exec();
        let countpage=Math.ceil((await Data.find({[filter]:filtervalue}).countDocuments())/pagesize)
        res.status(200).send({data:data,countpage:countpage})
    }
    catch(e){
        res.status(400).send({error:e})   
    }
   
})
router.get("/:id",async(req,res)=>{
    try{
        const data= await Data.findById({_id:req.params.id}).lean().exec();
        res.status(200).send({data:data})
    }
    catch(e){
        res.status(400).send({error:e})   
    }
   
})
router.post("/create",authenticate,async(req,res)=>{
    req.body.userId=req.userId
    try{
        const data=await Data.create(req.body)
        return res.status(201).send({data})
    }
    catch(e){
        res.status(400).send({error:e}) 
    }

})

//patch
router.patch("/:id/edit",authenticate,async(req,res)=>{
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
router.delete("/:id",authenticate,async(req,res)=>{
    try{
        const data= await Data.findByIdAndDelete(req.params.id)
        res.status(200).send(data)
    }
    catch(e){
        res.status(400).send({error:e})   
    }
    
})

module.exports =  router