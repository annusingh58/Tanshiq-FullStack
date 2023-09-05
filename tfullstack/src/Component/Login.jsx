import React, { useContext, useState } from 'react';
import "../Style/Login.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from './Context/AuthContext';
import api from '../ApiConfig';


const Login = () => {
    const[userData,setUserData]=useState({email:"",password:""});
    const {state,dispatch}=useContext(AuthContext);

    const router=useNavigate();
    console.log(userData,"userData");

    const handleChange=(event)=>{
        setUserData({...userData,[event.target.name]:event.target.value})

    }
    const handleSubmit=async(event)=>{
        event.preventDefault();
        if(userData.email && userData.password){
            try {
                const response=await api.post("/login",{
                    email:userData.email,
                   password:userData.password

                });
                console.log(response,"response")
                const data=response.data;
                if(data.success){
                    dispatch({
                        type:"LOGIN",
                        payload:data?.user
                    });
                    localStorage.setItem("JWTToken",JSON.stringify(data.token));
                    alert(data.message);
                    router('/');
                }
                
            } catch (error) {
                console.log(error)
                if(!error.response.data.success){
                    alert(error.response.data.message)
                }
                
            }

        }
        else{
            alert("all field are required");
        }
    }
    
        
  return (
    <div class="screen-login">
    <div class="body-login">
        <div>
             <h4>Login </h4>
        <div>
            <form onSubmit={handleSubmit}>
               <div class="form"> 
                <div><input name="email" type="email" placeholder="Enter Email Id" onChange={handleChange}/><br/></div>
               <div><input name="password" type="password" placeholder="password" onChange={handleChange}/><br/></div>
               <div><input name="submit" type='submit' value="Login"/></div>
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

export default Login