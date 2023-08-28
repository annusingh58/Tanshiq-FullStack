import express from "express";
import { get_currentuser, login, register } from "../Controllers/Usercontrollers.js";
import { loginchk, registerchk } from "../Middleware/auth.js";



const router= express.Router();


router.post('/register',registerchk ,register);
router.post('/login',loginchk, login);
router.post('/getcurrentuser',get_currentuser);


export default router;