export const registerchk=async(req,res,next)=>{
    try {
        const{name,email,password,confirmpassword}=req.body;
        if(!name) return res.status(400).json({status:400,success:false, message:"Name is required"});
        if(!email) return res.status(400).json({status:400,success:false, message:"email is required"});
        if(!password) return res.status(400).json({status:400, success:false, message:"password is required"});
        if(!confirmpassword) return res.status(400).json({status:400, success:false,message:"confirmpasswordis required"});
      

        if(password!=confirmpassword) return res.status(400).json({status:400,success:false ,message:"password not match"});
        next();
        
    } catch (error) {
        return res.status(500).json({status:500, success:false,message:error})
    }
}


export const loginchk=async(req,res,next)=>{
    try {
        const{email,password}=req.body;
        if(!email)return res.status(400).json({status:400,success:false,message:"email is required"});
        if(!password)return res.status(400).json({status:400,success:false,message:"password is required"});
          next();
     
        }catch (error) {
        return res.status(500).json({status:500,success:false,message:error})
        
        }
}


