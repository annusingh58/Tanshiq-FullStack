import Product from "../Model/Product.js";
import USER from "../Model/user.js";

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

export const addToCart=async(req,res)=>{
    try {
        const{userId,productId}=req.body;
        if(!userId)return res.status(404).json({status:404,success:false,message:"UserId not found"});
        if(!productId)return res.status(404).json({status:404,success:false,message:"prodcut Id not found"});
        

        const user=await USER.findByIdAndUpdate(userId,{$push:{cartProducts:productId}},{new:true})
        if(!user){
            return res.status(404).json({status:404,success:false,message:"User not found"});
 
        }
        else{
            return res.status(200).json({status:200,success:true,message:"Product added into the cart successfully."})

        }
    } catch (error) {
        return res.status(500).json({status:500, success:false,error:error,message:"Internal server error"})

    }
}

export const getCartProducts=async(req,res)=>{
    try {
        const{userId}=req.body;
        console.log(userId);

        const products=await USER.findById(userId);
        console.log(products);

        if(products){
            const cartProducts=products.cartProducts;

            const newproducts=[];

            for(let i=0;i<cartProducts.length;i++){
                const data=await Product.findById(cartProducts[i]);
                newproducts.push(data);
            }
            return res.status(200).json({status:200,success:true, cartProducts:newproducts})}
            else{
             return res.status(400).json({status:400,success:false,message:"Cart is empty"});

            }

        }

        
     catch (error) {
     return res.status(500).json({status:500, success:false,error:error,message:"Internal server error"})

    }
}