import React, { useState } from 'react';
import "../Style/Register.css"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import axios from "axios";

const Register = () => {
        const [userData,setUserData]=useState({name:"",email:"",password:"",confirmpassword:"",role:"buyer"})

        const router =useNavigate();
        console.log(userData,"userData");

        const handleChange =(event)=>{
            setUserData({...userData,[event.target.name]:event.target.value })
        }


        const handleSubmit=async(event)=>{
            event.preventDefault();
            if(userData.name && userData.email && userData.password && userData.confirmpassword){
                try {
                    const response=await axios.post("http://localhost:2000/anu/register",{
                        name:userData.name,
                        email:userData.email,
                        password:userData.password,
                        confirmpassword:userData.confirmpassword,
                        role:userData.role

                    });

                    console.log(response,"response")

                    const data=response.data;
                    console.log(data,"data");

                    if(data.success){
                        toast(data.message);
                        router('/login');
                    }   
                } catch (error) {
                    console.log(error)
                    if(!error.response.data.success){
                        alert(error.response.data.message);
                    }
                    
                }
            }
            else{
                alert("All field are required");
            }
        }


  return (
    <div class="screen-register">
        <div class="body-register">
            <div>
                 <h4>Signup </h4>
            <div>
                
                <form onSubmit={handleSubmit}>
                    <div class="form-register">
                        <div><input name="name" type="text" placeholder="Name" onChange={handleChange}/></div>
                        <div><input name="email" type="email" placeholder="Enter Email Id" onChange={handleChange}/></div>
                        <div><input name="password" type="password" placeholder="password" onChange={handleChange}/></div>
                        <div><input name="confirmpassword" type="password" placeholder="confimpassword" onChange={handleChange}/></div>
                        <div>
                         <select name="role" onChange={handleChange}>
                             <option value="buyer">Buyer</option>
                             <option value="seller" >Seller</option>
                         </select>
                         </div>
                         <div><input type="submit" value="Signup"/></div>

                    </div>

                   </form>
                 
            </div>

            <div>
                <input type="checkbox" checked/>
                <p>Remember Me</p>
            </div>


                 <p>By continuing, I agree to <span><u>Terms of Use & Privacy Policy</u></span></p>
                
                
           
                </div>

            <div>
                <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwcaaa047f/login_signup/Mask-Group.png"/>
            </div>
        </div>

    </div>
  )
}

export default Register;