import React from 'react';
import "../Style/Login.css";

const Login = () => {
  return (
    <div class="screen">
    <div class="body">
        <div>
             <h4>Login </h4>
        <div>
            <form onsubmit="login(event)">
               <div id="form"> 
                <div><input id="lemail" type="email" placeholder="Enter Email Id"/><br/></div>
               <div><input id="lpassword" type="password" placeholder="password"/><br/></div>
               <div><input type="submit" value="login"/></div>
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