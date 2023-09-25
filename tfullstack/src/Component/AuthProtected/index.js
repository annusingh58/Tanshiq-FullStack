import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function AuthProtected({children}){
    const {state}=useContext(AuthContext);
    const router=useNavigate();


    const [change,setChange]=useState(5);

    useEffect(()=>{
        const count=setInterval(()=>{
            setChange(x=> x - 1);
        },1000);
        
        // Clean up the interval when the component unmounts
        return () => clearInterval(count);
    }, []);

//         if(!state?.user?.name){
//             setTimeout(() => {
//                 router('/')
//             }, 3000);
//         }
//     },[state])

//     if(state?.user?.role){
//         return(
//             children
//         )
//     }else{
//         return (
//         <div>
//             <h1>You are not logged in please log in first...</h1>
//             <button onClick={()=>router('/login')}>Click here to Login</button>
//         </div>
//         )
//     }
// }



useEffect(()=>{
    if(!state?.user?.name){
        setTimeout(()=>{router('/')},3000)
    }
},[state])

if(state?.user?.name){
    return(
        children
    )
}else{
    return(
        <div style={{width:"100%",height:"100vh",display:'flex',justifyContent:"center",alignItems:"center"}}>
            <div style={{height:'300px',display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <h1>To access this page you have to login...Redirecting you on HOme Page within {change} seconds</h1>
            <button style={{height:'40px',width:'140px',borderRadius:"10px",border:'none',outline:'none',color:"white",backgroundColor:'green',marginTop:"50px"}} onClick={()=>router('/login')}>Click here to Login</button>
            </div>
        </div>
    )
}
}

export default AuthProtected;