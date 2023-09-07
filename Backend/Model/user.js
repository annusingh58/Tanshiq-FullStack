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
    }

});
export default mongoose.model("USER",user)