import mongoose, { Schema } from "mongoose";


const user=new Schema({
    name:String,
    email:String,
    password:String,
    cartProducts:[String]
});
export default mongoose.model("USER",user)