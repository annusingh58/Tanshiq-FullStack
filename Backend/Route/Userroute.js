import express from "express";
import { get_currentuser, login, register } from "../Controllers/Usercontrollers.js";
import { loginchk, registerchk } from "../Middleware/auth.js";
import { addProduct, addToCart, getCartProducts, getSingleProduct, getallproducts } from "../Controllers/ProductControllers.js";



const router= express.Router();


router.post('/register',registerchk ,register);
router.post('/login',loginchk, login);
router.post('/getcurrentuser',get_currentuser);
router.post('/addProduct',addProduct);
router.get('/getallproducts',getallproducts)
router.post('/getSingleProduct',getSingleProduct)
router.post('/addToCart',addToCart);
router.post('/getCartProducts',getCartProducts)


export default router;