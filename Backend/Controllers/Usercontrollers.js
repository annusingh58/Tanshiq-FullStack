import USER from "../Model/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


export const register=async(req,res)=>{
    try {
        const{name,email,password,role}=req.body;
        const response=await USER.find({email}).exec();
        if(response.length)return res.status(400).json({status:400,success:false ,message:"user already registered"});

        const user=new USER({
            name,email,password,role
        })
        await user.save();
        return res.status(200).json({status:200,success:true,message:"User registered successfuly"})
    } catch (error) {
        return res.status(500).json({status:500,success:false,message:error})
    }
}


export const login =async(req,res)=>{
    try {
        const{email,password}=req.body;
        if(!email)return res.status(400).json({status:400,success:false,message:"email is required"});
        if(!password)return res.status(400).json({status:400,success:false,message:"password is required"});
        
        const response = await USER.findOne({email}).exec();
        if(!response) return res.status(400).json({status: 400,success:false, message: "email not exits"});
        
        if(response.email==email && response.password==password){
        
        const jwtToken=process.env.JWT;
        const token=jwt.sign({userId:response._id},jwtToken);

        return res.status(200).json({status:200,success:true,message:"Login sucessfully",token:token,user:response})
        }else{
            return res.status(500).json({status:500,success:false,message:"Credentials not matched"});
        }
 
    } catch (error) {
        return res.status(500).json({status:500,success:false,message:error});
    }
}



export const get_currentuser=async(req,res)=>{
    try {
        const {token} =req.body;
        const dectoken =jwt.verify(token,process.env.JWT);
        const userId =dectoken.userId;
        const user=await USER.findById(userId);

        console.log(user);
        if(user){
            return res.status(200).json({status:200,success:true,user})
    }
    } catch (error) {
        return res.status(500).json({status:500,success:false,message:error});

    }
}