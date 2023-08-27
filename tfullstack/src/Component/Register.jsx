import React from 'react';
import "../Style/Register.css"

const Register = () => {
  return (
    <div class="screen-register">
        <div class="body">
            <div>
                 <h4>Signup </h4>
            <div>
                
                <form onsubmit="signup(event)">
                    <div class="form">
                        <div><input id="name" type="text" placeholder="Name"/></div>
                        <div><input id="email" type="email" placeholder="Enter Email Id"/></div>
                        <div><input id="password" type="password" placeholder="password"/></div>
                        <div><input id="confimpassword" type="password" placeholder="confimpassword"/></div>
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