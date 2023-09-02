import mongoose from "mongoose";
import { Schema } from "mongoose";


const Product=new Schema({
    name:String,
    price:Number,
    catergory:String,
    Image:["String"]

});
export default mongoose.model("Products",Product)