import express from 'express';
import { addToCart, getCartProducts } from '../Controllers/ProductControllers.js';


const router=express.Router();


router.post("/addToCart",addToCart);
router.post("/getCartProducts",getCartProducts);


export default router;