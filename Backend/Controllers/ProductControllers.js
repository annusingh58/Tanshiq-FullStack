import { get } from "mongoose";
import Product from "../Middleware/Product.js";

export const addProduct=async(req,res)=>{
    try{
       const{name,price,image} =req.body;

       if(!name) return res.status(400).json({status:400,success:false, message:"Name is required"}); 
       if(!price) return res.status(400).json({status:400,success:false, message:"Price is required"});
       if(!image) return res.status(400).json({status:400,success:false, message:"Image is required"});

       const product =new Product({
        name,price,image
       })

       await product.save();
       return res.status(200).json({status:200,success:true,message:"Product added successfuly"})

    }
    catch(error){
        return res.status(500).json({status:500, success:false,message:error})

    }
}


export const getallproducts=async(req,res)=>{
    try {
        const response=await Product.find({}).exec();
        if(response){
            return res.status(200).json({status:200,success:true,products:response})

        }
        else{
            return res.status(500).json({status:500,success:false,message:"No Product found"})

        }
        
    } catch (error) {
        return res.status(500).json({status:500, success:false,message:error})

    }
}


export const getSingleProduct=async(req,res)=>{
    try {
        const {id}=req.body;
        const getProduct=await Product.findById(id);
        console.log(getProduct);
        return res.status(200).json({status:200,success:true,product:getProduct})
    } catch (error) {
        return res.status(500).json({status:500, success:false,message:error})
    }
}