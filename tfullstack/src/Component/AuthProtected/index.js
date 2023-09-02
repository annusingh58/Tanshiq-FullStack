import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function AuthProtected({children}){
    const {state}=useContext(AuthContext);
    const router=useNavigate();
    if(state?.user?.name){
        return(
            children
        )
    }else{
        return (
        <div>
            <h1>You are not logged in please log in first...</h1>
            <button onClick={()=>router('/login')}>Click here to login</button>
        </div>
        )
    }
}

export default AuthProtected;