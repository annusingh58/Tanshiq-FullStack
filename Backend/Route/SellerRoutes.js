import express from "express";
import { addProduct } from "../Controllers/SellerController.js";
import { sellerProducts } from "../Controllers/SellerController.js";

const router=express.Router();

router.post("/add-product",addProduct);
router.post("/seller-products",sellerProducts)

export default router;