import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function AuthProtected({children}){
    const {state}=useContext(AuthContext);
    const router=useNavigate();

    useEffect(()=>{
        if(!state?.user?.name){
            setTimeout(() => {
                router('/')
            }, 3000);
        }
    },[state])

    if(state?.user?.role){
        return(
            children
        )
    }else{
        return (
        <div>
            <h1>You are not logged in please log in first...</h1>
            <button onClick={()=>router('/login')}>Click here to Login</button>
        </div>
        )
    }
}

export default AuthProtected;