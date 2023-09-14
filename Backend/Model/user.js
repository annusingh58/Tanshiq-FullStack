import mongoose, { Schema } from "mongoose";


const user=new Schema({
    name:String,
    email:String,
    password:String,
    cartProducts:[String],
    role:{
        type:String,
        enum:['buyer','seller','admin'],
        default:'buyer'
    },
    isAdminVerified:{
        type:Boolean
    }

});
export default mongoose.model("USER",user)